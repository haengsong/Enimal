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
        Optional<Badge> isBadge = badgeRepository.findByUserIdAndBadge(userId, "????????????");
        Optional<User> user = userRepository.findById(userId);
        if(!isBadge.isPresent() && moneyList.size()==0){ // ?????? 2???
            Badge badge = new Badge();
            badge.setBadge("????????????");
            badge.setCreatedate(LocalDateTime.now().plusHours(9));
            badge.setUser(user.get());
            badge.setPercentage(2);
            badgeRepository.save(badge);
            modal.add(badge.getBadge());
        }
        int userCredit = user.get().getCredit();
        int userDonation = user.get().getDonation();
        userDonation += (firstCredit/100)*percent; // ?????????
        userCredit += (firstCredit/100)*(100-percent);
        user.get().setDonation(userDonation);
        user.get().setCredit(userCredit);
        userRepository.save(user.get());
        Money money = new Money(); // ?????? ??????????????? ?????? ??????
        money.setCreatedate(LocalDateTime.now().plusHours(9));
        money.setUserId(userId);
        money.setCredit((firstCredit/100)*(100-percent));
        money.setDonateCredit((firstCredit/100)*percent);
        moneyRepository.save(money);
        // ?????? 7??? : ?????? 10000?????? - Enimal ??????
        Optional<Badge> isExchange = badgeRepository.findByUserIdAndBadge(userId, "Enimal ??????");
        if(user.get().getCredit() >= 10000 && !isExchange.isPresent()){
            Badge badge = new Badge();
            badge.setBadge("Enimal ??????");
            badge.setCreatedate(LocalDateTime.now().plusHours(9));
            badge.setUser(user.get());
            badge.setPercentage(2);
            badgeRepository.save(badge);
            modal.add(badge.getBadge());
        }
        // ?????? 8??? : ?????? 1000?????? - ?????? ??????
        Optional<Badge> isDonate = badgeRepository.findByUserIdAndBadge(userId, "?????? ??????");
        if(user.get().getDonation() >= 1000 && !isDonate.isPresent()){
            Badge badge = new Badge();
            badge.setBadge("?????? ??????");
            badge.setCreatedate(LocalDateTime.now().plusHours(9));
            badge.setUser(user.get());
            badge.setPercentage(2);
            badgeRepository.save(badge);
            modal.add(badge.getBadge());
        }
        // ?????? ??????
        String[] arr = new String[modal.size()];
        for(int i=0; i< modal.size(); i++){
            arr[i] = modal.get(i);
        }
        creditRegistDto.setModalName(arr);
        return creditRegistDto;
    }

}
