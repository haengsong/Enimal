package com.enimal.backend.service.Impl;

import com.enimal.backend.dto.Etc.AnimalShowDto;
import com.enimal.backend.dto.Etc.CreditRegistDto;
import com.enimal.backend.entity.Animal;
import com.enimal.backend.entity.Badge;
import com.enimal.backend.entity.Money;
import com.enimal.backend.entity.User;
import com.enimal.backend.repository.AnimalRepository;
import com.enimal.backend.repository.BadgeRepository;
import com.enimal.backend.repository.MoneyRepository;
import com.enimal.backend.repository.UserRepository;
import com.enimal.backend.service.EtcService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EtcServiceImpl implements EtcService {
    private AnimalRepository animalRepository;
    private BadgeRepository badgeRepository;
    private UserRepository userRepository;
    private MoneyRepository moneyRepository;
    @Autowired
    EtcServiceImpl(AnimalRepository animalRepository,BadgeRepository badgeRepository,UserRepository userRepository,MoneyRepository moneyRepository){
        this.animalRepository = animalRepository;
        this.badgeRepository = badgeRepository;
        this.userRepository = userRepository;
        this.moneyRepository = moneyRepository;
    }
    @Override
    public AnimalShowDto detailAnimal() {
        AnimalShowDto animalShowDto = new AnimalShowDto();
        Integer todayIdx = LocalDateTime.now().getDayOfYear();
        todayIdx = todayIdx % 24 + 1;
        Optional<Animal> animal = animalRepository.findById(todayIdx);
        animalShowDto.setAnimal(animal.get().getAnimal());
        animalShowDto.setContent(animal.get().getContent());
        animalShowDto.setPicture(animal.get().getPicture());
        animalShowDto.setGrade(animal.get().getGrade());
        animalShowDto.setCount(animal.get().getCount());
        return animalShowDto;
    }

    @Override
    public CreditRegistDto registCredit(Integer percent, Integer firstCredit, String userId) {
        CreditRegistDto creditRegistDto = new CreditRegistDto();
        List<String> modal = new ArrayList<>();
        List<Money> moneyList = moneyRepository.findByUserId(userId);
        Optional<Badge> isBadge = badgeRepository.findByUserIdAndBadge(userId, "연금술사");
        Optional<User> user = userRepository.findById(userId);
        if(!isBadge.isPresent() && moneyList.size()==0){ // 업적 2번
            Badge badge = new Badge();
            badge.setBadge("연금술사");
            badge.setCreatedate(LocalDateTime.now().plusHours(9));
            badge.setUser(user.get());
            badge.setPercentage(2);
            badgeRepository.save(badge);
            modal.add(badge.getBadge());
        }
        int userCredit = user.get().getCredit();
        int userDonation = user.get().getDonation();
        userDonation += (firstCredit/100)*percent; // 기부금
        userCredit += (firstCredit/100)*(100-percent);
        user.get().setDonation(userDonation);
        user.get().setCredit(userCredit);
        userRepository.save(user.get());
        Money money = new Money(); // 재화 충전내역을 위해 저장
        money.setCreatedate(LocalDateTime.now().plusHours(9));
        money.setUserId(userId);
        money.setCredit((firstCredit/100)*(100-percent));
        money.setDonateCredit((firstCredit/100)*percent);
        moneyRepository.save(money);
        // 업적 7번 : 환전 10000이상 - Enimal 홀릭
        Optional<Badge> isExchange = badgeRepository.findByUserIdAndBadge(userId, "Enimal 홀릭");
        if(user.get().getCredit() >= 10000 && !isExchange.isPresent()){
            Badge badge = new Badge();
            badge.setBadge("Enimal 홀릭");
            badge.setCreatedate(LocalDateTime.now().plusHours(9));
            badge.setUser(user.get());
            badge.setPercentage(2);
            badgeRepository.save(badge);
            modal.add(badge.getBadge());
        }
        // 업적 8번 : 기부 1000이상 - 기부 천사
        Optional<Badge> isDonate = badgeRepository.findByUserIdAndBadge(userId, "기부 천사");
        if(user.get().getDonation() >= 1000 && !isDonate.isPresent()){
            Badge badge = new Badge();
            badge.setBadge("기부 천사");
            badge.setCreatedate(LocalDateTime.now().plusHours(9));
            badge.setUser(user.get());
            badge.setPercentage(2);
            badgeRepository.save(badge);
            modal.add(badge.getBadge());
        }
        // 뱃지 모달
        String[] arr = new String[modal.size()];
        for(int i=0; i< modal.size(); i++){
            arr[i] = modal.get(i);
        }
        creditRegistDto.setModalName(arr);
        return creditRegistDto;
    }

}
