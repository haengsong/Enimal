package com.enimal.backend.service.Impl;

import com.enimal.backend.dto.Draw.AnimalAllDrawDto;
import com.enimal.backend.dto.Draw.AnimalSelectDrawDto;
import com.enimal.backend.dto.Draw.NftBadgeShowDto;
import com.enimal.backend.dto.Draw.NftCollectionDto;
import com.enimal.backend.entity.*;
import com.enimal.backend.repository.*;
import com.enimal.backend.service.DrawService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;


@Service
public class DrawServiceImpl implements DrawService {
    char [] grade = {'E','E','E','E','E','E','D','D','D','D','D','C','C','C','C','B','B','B','A','A',};


    BadgeRepository badgeRepository;
    AnimalRepository animalRepository;
    PuzzleRepository puzzleRepository;
    UserRepository userRepository;
    CollectionRepository collectionRepository;
    @Autowired
    DrawServiceImpl(BadgeRepository badgeRepository, UserRepository userRepository, AnimalRepository animalRepository, PuzzleRepository puzzleRepository, CollectionRepository collectionRepository){
        this.badgeRepository = badgeRepository;
        this.animalRepository = animalRepository;
        this.userRepository = userRepository;
        this.puzzleRepository = puzzleRepository;
        this.collectionRepository = collectionRepository;
    }
    private boolean drawCredit(int type, String userId,String drawWhat){
        try{
            Optional<User> user = userRepository.findById(userId);
            int drawCredit = 100; // 사용된 재화
            int userCredit = user.get().getCredit();
            if(type == 0){ // 전체 뽑기
                userCredit -= 100;
            } else if (type == 1) { //개별 뽑기
                // 등급별 재화 가격 다르게 여기에
                if(drawWhat.equals("위급")) drawCredit = 1500;
                else if(drawWhat.equals("위기")) drawCredit = 1200;
                else if(drawWhat.equals("취약")) drawCredit = 900;
                else if(drawWhat.equals("준위협")) drawCredit = 600;
                else if(drawWhat.equals("최소관심")) drawCredit = 300;
                userCredit -= drawCredit;
            }
            if(userCredit < 0){
                return false;
            }
            user.get().setCredit(userCredit);
            int usedCount = user.get().getUsedcount();
            int alreadyCredit = user.get().getUsedcredit();
            user.get().setUsedcount(usedCount+1); // 사용한 뽑기 개수
            user.get().setUsedcredit(alreadyCredit+drawCredit); // 사용된 총 재화
            userRepository.save(user.get());
            return true;
        }catch (Exception e){
            return false;
        }
    }
    private String firstDraw(String userId){ // 업적 1번 : 첫 뽑기
        List<Puzzle> puzzleList = puzzleRepository.findByUserId(userId); // 해당 아이디로 뽑기 전적이 있는지 확인
        Optional<User> user = userRepository.findById(userId);

        if(puzzleList.size()==1){
            Badge badge = new Badge();
            badge.setBadge("첫 걸음");
            badge.setCreatedate(LocalDateTime.now().plusHours(9));
            badge.setUser(user.get());
            badge.setPercentage(2);
            badgeRepository.save(badge);
            return badge.getBadge();
        }
        return null;
    }
    private String manyDraw(String userId){ // 업적 10번 : 뽑기 횟수 100번 이상
        String result = null;
        Optional<User> user = userRepository.findById(userId);
        List<Badge> list = badgeRepository.findByUserId(userId);
        Boolean flag = true;
        for(int i=0; i< list.size(); i++){
            if((list.get(i).getBadge()).equals("뽑기 중독")) {
                flag = false;
                break;
            }
        }
        if(flag && user.get().getUsedcount()==100) {
            Badge badge = new Badge();
            badge.setBadge("뽑기 중독");
            badge.setCreatedate(LocalDateTime.now().plusHours(9));
            badge.setUser(user.get());
            badge.setPercentage(2);
            badgeRepository.save(badge);
            result = "뽑기 중독";
        }
        return result;
    }
    private List<Object> collectDraw(String userId,String drawEnimal){ // 컬렉션 완성여부, 업적13번, 업적5번, 업적 3번
        List<Object> list = new ArrayList<>();
        // 1종의 컬렉션을 모았는지 확인
        List<Puzzle> listForCollection = puzzleRepository.findByUserIdAndAnimal(userId,drawEnimal);
        int[] collect = new int[9];
        boolean flag = false;
        for(int i=0; i<listForCollection.size(); i++){
            collect[listForCollection.get(i).getPiece()] = listForCollection.get(i).getCount();
        }
        for(int i=0; i<collect.length; i++){
            if(collect[i]>0) flag = true;
            else flag = false; // 한조각이라도 없는 경우 컬렉션 완성 불가능
            if(!flag) {
                list.add(false); // 컬렉션 완성여부
                break;
            }
            if(flag && i==collect.length-1){ // 모은 경우 조각 감소 및 삭제
                list.add(true); // 컬렉션 완성여부
                Collection collection = new Collection(); // 컬렉션 추가
                collection.setAnimal(drawEnimal);
                collection.setUserId(userId);
                collectionRepository.save(collection);
                Optional<User> user = userRepository.findById(userId);
                for(int j=0; j<collect.length; j++){ // 컬렉션을 모은 경우 조각 개수 감소 또는 삭제
                    Optional<Puzzle> collectPuzzle = puzzleRepository.findByUserIdAndAnimalAndPiece(userId, drawEnimal, j);
                    int count = collectPuzzle.get().getCount();
                    if(count>1) {
                        collectPuzzle.get().setCount(count-1);
                        puzzleRepository.save(collectPuzzle.get());
                    }
                    else {
                        puzzleRepository.delete(collectPuzzle.get());
                    }
                }
                // 업적 13번 : 같은 종을 3번 모은 경우
                // 관련 업적이 없는 경우에만 추가해주기
                Optional<Badge> isBadge = badgeRepository.findByUserIdAndBadge(userId,"안 질려?");
                if(isBadge.isEmpty()){
                    List<Collection> sameCollection = collectionRepository.findByUserIdAndAnimal(userId,drawEnimal);
                    int sameCount = sameCollection.size();
                    if(sameCount==3) {
                        Badge badge = new Badge();
                        badge.setBadge("안 질려?");
                        badge.setCreatedate(LocalDateTime.now().plusHours(9));
                        badge.setUser(user.get());
                        badge.setPercentage(2);
                        badgeRepository.save(badge);
                        list.add(badge.getBadge());
                    }
                }
                // 업적 5번 : 24종의 컬렉션을 모두 모은 경우
                Optional<Badge> allBadge = badgeRepository.findByUserIdAndBadge(userId,"뽑기의 달인");
                if(allBadge.isEmpty()){
                    List<String> allCollection = collectionRepository.findByUserIdALL(userId);
                    if(allCollection.size() == 24){
                        Badge badge = new Badge();
                        badge.setBadge("뽑기의 달인");
                        badge.setCreatedate(LocalDateTime.now().plusHours(9));
                        badge.setUser(user.get());
                        badge.setPercentage(2);
                        badgeRepository.save(badge);
                        list.add(badge.getBadge());
                    }
                }
            }
        }
        return list;
    }
    private String twiceDraw(String userId,String animal,int drawPuzzle){
        String result = null;
        Optional<User> user = userRepository.findById(userId);
        String lastPuzzle = user.get().getLastPuzzle();
        animal += Integer.toString(drawPuzzle);
        if(lastPuzzle.equals(animal)){
            List<Badge> list = badgeRepository.findByUserId(userId);
            Boolean isBadge = true;
            for(int i=0;i<list.size();i++){ // 뱃지 있는지 확인
                if((list.get(i).getBadge()).equals("똥손")){
                    isBadge = false;
                    break;
                }
            }
            if(isBadge){
                Badge badge = new Badge();
                badge.setBadge("똥손");
                badge.setCreatedate(LocalDateTime.now().plusHours(9));
                badge.setUser(user.get());
                badge.setPercentage(2);
                badgeRepository.save(badge);
                result = badge.getBadge();
            }
        }
        else {
            user.get().setLastPuzzle(animal);
            userRepository.save(user.get());
        }
        return result;
    }
    @Override
    public AnimalAllDrawDto drawAllAnimal(String userId) {
        AnimalAllDrawDto animalAllDrawDto = new AnimalAllDrawDto();
        HashMap<Character,String> gradeDic = new HashMap<>();
        List<String> modal = new ArrayList<>();
        gradeDic.put('E',"위급");
        gradeDic.put('D',"위기");
        gradeDic.put('C',"취약");
        gradeDic.put('B',"준위협");
        gradeDic.put('A',"최소관심");

        Long hap = badgeRepository.countByUserId(userId); // 내가 가진 업적 확인하기
        boolean drawType = false; // false일때는 전체 뽑기, true일때는 미보유 뽑기
        int randombox = 0;
        randombox = (int) (Math.random() * (100 + 1));
        if ( 0 <= randombox && randombox <=  hap*2 )  // 업적 보유량에 따라 선택
            drawType = true;

        randombox = (int) (Math.random() * (19 + 1)); // 0부터 19까지
        char drawGrade = grade[randombox];
        String drawGradeDic = gradeDic.get(drawGrade);
        List<Animal> animalList = animalRepository.findByGrade(drawGradeDic); //해당 등급의 동물들
        int randomEnimal = (int) (Math.random() * (animalList.size()-1 + 1 )); // 랜덤 동물 인덱스
        String drawEnimal = animalList.get(randomEnimal).getAnimal();
        int drawPuzzle = -1;

        if (!drawType) {// 전체 뽑기
            drawPuzzle = (int) (Math.random() * (8 + 1)); // 0부터 8까지
        } else {// 미보유 뽑기
            List<Puzzle> puzzleList = puzzleRepository.findByUserIdAndAnimal(userId, drawEnimal);
            int[] pices = {0, 0, 0, 0, 0, 0, 0, 0, 0};
            for (int i = 0; i < puzzleList.size(); i++) {
                int idx = puzzleList.get(i).getPiece();
                pices[idx] = 1;
            }
            int puzzleListSize = puzzleList.size();
            drawPuzzle = (int) (Math.random() * (8 - puzzleListSize + 1)); // 0~8 까지인 9개중 보유한 갯수를 제외한 최대수
            int cnt = 0;
            for (int i = 0; i < pices.length; i++) {
                if (pices[i] == 0) {
                    cnt++;
                }
                if (cnt == drawPuzzle) {
                    drawPuzzle = i;
                    break;
                }
            }
        }

        Optional<Puzzle> userPuzzle = puzzleRepository.findByUserIdAndAnimalAndPiece(userId,drawEnimal,drawPuzzle);
        if(userPuzzle.isPresent()){ //존재한다면
            int getCount = userPuzzle.get().getCount();
            userPuzzle.get().setCount(getCount+1);
            animalAllDrawDto.setCount(getCount+1);
            userPuzzle.get().setCreatedate(LocalDateTime.now().plusHours(9));
            if(drawCredit(0,userId,gradeDic.get(drawGrade))){
                puzzleRepository.save(userPuzzle.get());
            }else{
                return null;
            }
        }else{
            Puzzle puzzle = new Puzzle();
            puzzle.setAnimal(drawEnimal);
            puzzle.setUserId(userId);
            puzzle.setPiece(drawPuzzle);
            puzzle.setCreatedate(LocalDateTime.now().plusHours(9));
            puzzle.setCount(1);
            animalAllDrawDto.setCount(1);
            if(drawCredit(0,userId,gradeDic.get(drawGrade))){
                puzzleRepository.save(puzzle);
            }else{
                return null;
            }
        }
        // 같은 조각 연속으로 뽑았는지 체크
        String isTwiceDraw = twiceDraw(userId,drawEnimal,drawPuzzle);
        if(isTwiceDraw!=null) modal.add(isTwiceDraw);
        animalAllDrawDto.setUseBadge(drawType);
        String isFirstBadge = firstDraw(userId);
        if(isFirstBadge!=null) modal.add(isFirstBadge);
        String isManyDraw = manyDraw(userId);
        if(isManyDraw!=null) modal.add(isManyDraw);
        animalAllDrawDto.setAnimal(drawEnimal);
        animalAllDrawDto.setPiece(drawPuzzle);

        // 완성했는지 체크하기
        List<Object> list = collectDraw(userId,drawEnimal);
        animalAllDrawDto.setComplete((Boolean)list.get(0)); // 뱃지 얻지 못하거나 얻어도 앞의 값은 무조건 있으니까
        if(list.size()>1){ // 뱃지 있는 경우
            for(int i=1; i<list.size(); i++){
                modal.add((String)list.get(i));
            }
        }

        // 뱃지 여러개 일수있으니까
        String[] arr = new String[modal.size()];
        for(int i=0; i< modal.size(); i++){
            arr[i] = modal.get(i);
        }
        animalAllDrawDto.setModalName(arr);
        return animalAllDrawDto;
    }

    @Override
    public AnimalSelectDrawDto drawSelectAnimal(String userId, String animal) {
        List<String> modal = new ArrayList<>();
        Animal optionalAnimal =  animalRepository.findByAnimal(animal).get();
        String choiceEnimal = optionalAnimal.getAnimal();
        Long hap = badgeRepository.countByUserId(userId); // 내가 가진 업적 확인하기
        boolean drawType = false; //0일때는 전체 뽑기, 1일때는 미보유 뽑기
        int randombox = 0;
        int drawPuzzle = -1;
        AnimalSelectDrawDto animalSelectDrawDto = new AnimalSelectDrawDto();
        randombox = (int) (Math.random() * (100 + 1));
        if ( 0 <= randombox && randombox <=  hap*2 )  // 업적 보유량에 따라 선택
            drawType = true;
        if(!drawType) { //그냥 뽑기
            drawPuzzle = (int) (Math.random() * (8 + 1)); // 0부터 8까지
        }else{ //미보유 뽑기
            List<Puzzle> puzzleList = puzzleRepository.findByUserIdAndAnimal(userId, choiceEnimal);
            int[] pices = {0, 0, 0, 0, 0, 0, 0, 0, 0};
            int puzzleListSize = puzzleList.size();
            int cnt = 0;
            int idx = 0;
            int maxSize = 0;
            for (int i = 0; i < puzzleListSize; i++) {
                idx = puzzleList.get(i).getPiece();
                pices[idx] = 1;
            }

            maxSize = (int) (Math.random() * (8 - puzzleListSize + 1)); // 0~8 까지인 9개중 보유한 갯수를 제외한 최대수

            for (int i = 0; i < pices.length; i++) {
                if (pices[i] == 0) {
                    cnt++;
                }
                if (cnt == maxSize) {
                    drawPuzzle = i;
                    break;
                }
            }
        }

        Optional<Puzzle> userPuzzle = puzzleRepository.findByUserIdAndAnimalAndPiece(userId,choiceEnimal,drawPuzzle);
        if(userPuzzle.isPresent()){ //존재한다면
            int getCount = userPuzzle.get().getCount();
            userPuzzle.get().setCount(getCount+1);
            animalSelectDrawDto.setCount(getCount+1);
            userPuzzle.get().setCreatedate(LocalDateTime.now().plusHours(9));
            if(drawCredit(1,userId, optionalAnimal.getGrade())){
                puzzleRepository.save(userPuzzle.get());
            }else{
                return null;
            }

        }else{ //퍼즐이 처음이라면
            Puzzle puzzle = new Puzzle();
            puzzle.setAnimal(choiceEnimal);
            puzzle.setUserId(userId);
            puzzle.setPiece(drawPuzzle);
            puzzle.setCount(1);
            puzzle.setCreatedate(LocalDateTime.now().plusHours(9));
            if(drawCredit(1,userId, optionalAnimal.getGrade())){
                puzzleRepository.save(puzzle);
            }else{
                return null;
            }
        }
        String isFirstBadge = firstDraw(userId);
        if(isFirstBadge!=null) modal.add(isFirstBadge);
        String isManyDraw = manyDraw(userId);
        if(isManyDraw!=null) modal.add(isManyDraw);
        animalSelectDrawDto.setAnimal(choiceEnimal);
        animalSelectDrawDto.setPiece(drawPuzzle);

        // 완성했는지 체크하기
        List<Object> list = collectDraw(userId,choiceEnimal);
        animalSelectDrawDto.setComplete((Boolean)list.get(0)); // 뱃지 얻지 못하거나 얻어도 앞의 값은 무조건 있으니까
        if(list.size()>1){ // 뱃지 있는 경우
            for(int i=1; i<list.size(); i++){
                modal.add((String)list.get(i));
            }
        }

        // 뱃지 여러개 일수있으니까
        String[] arr = new String[modal.size()];
        for(int i=0; i< modal.size(); i++){
            arr[i] = modal.get(i);
        }
        animalSelectDrawDto.setModalName(arr);
        return animalSelectDrawDto;
    }

    @Override
    public NftBadgeShowDto nftCollection(NftCollectionDto nftCollectionDto, String userId) {
        NftBadgeShowDto nftBadgeShowDto = new NftBadgeShowDto();
        List<String> modal = new ArrayList<>();
        int idx = nftCollectionDto.getIdx();
        Optional<Collection> collection = collectionRepository.findByIdxAndUserId(idx,userId);
        collection.get().setCreatedate(LocalDateTime.now().plusHours(9));
        collection.get().setNftName(nftCollectionDto.getName());
        collection.get().setNftType(nftCollectionDto.getType());
        collection.get().setNftURL(nftCollectionDto.getImage());
        collection.get().setNftWallet(nftCollectionDto.getOwner());
        collection.get().setTokenIdInfo(nftCollectionDto.getTokenId());
        collection.get().setInfo(true);
        collectionRepository.save(collection.get());
        // 업적 3번 : 첫 NFT발급
        Optional<Badge> firstNft = badgeRepository.findByUserIdAndBadge(userId,"마음에 드시나요");
        Optional<User> user = userRepository.findById(userId);
        List<Collection> collectionList = collectionRepository.findByUserId(userId);
        int count = 0; // nft발급된 컬렉션 개수
        for(int i=0;i<collectionList.size();i++){
            if(collectionList.get(i).isInfo()) count++;
        }
        if(count==1 && firstNft.isEmpty()){ // 뱃지 내역 없고, 처음 컬렉션 만든 경우
            Badge badge = new Badge();
            badge.setBadge("마음에 드시나요");
            badge.setCreatedate(LocalDateTime.now().plusHours(9));
            badge.setUser(user.get());
            badge.setPercentage(2);
            badgeRepository.save(badge);
            modal.add(badge.getBadge());
        }
        // 뱃지 여러개 일수있으니까
        String[] arr = new String[modal.size()];
        for(int i=0; i< modal.size(); i++){
            arr[i] = modal.get(i);
        }
        nftBadgeShowDto.setModalName(arr);
        return nftBadgeShowDto;
    }
}
