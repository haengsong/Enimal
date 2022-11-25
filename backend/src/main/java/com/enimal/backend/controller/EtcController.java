package com.enimal.backend.controller;

import com.enimal.backend.dto.Etc.AnimalShowDto;
import com.enimal.backend.dto.Etc.CreditRegistDto;
import com.enimal.backend.dto.User.UserRankCollectionListDto;
import com.enimal.backend.dto.User.UserRankDonationListDto;
import com.enimal.backend.service.EtcService;
import com.enimal.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Slice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class EtcController {
    private static final String okay = "SUCCESS";
    private static final String fail = "FAIL";
    EtcService etcService;
    UserService userService;
    @Autowired
    EtcController(UserService userService, EtcService etcService){
        this.etcService = etcService;
        this.userService = userService;
    }
    @GetMapping("/todayAnimal") // 오늘의 동물 조회
    public ResponseEntity<?> detailAnimal(){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        try{
            AnimalShowDto data = etcService.detailAnimal();
            result.put("message",okay);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @PostMapping("/credit") // Enimal 재화로 전환시 기부금, 사이트 내 재화 저장
    public ResponseEntity<?> registCredit(HttpServletRequest request, @RequestParam(value = "percent") Integer percent, @RequestParam(value = "firstCredit") Integer firstCredit){
        Map<String,Object> result = new HashMap<>();
        String userId = (String) request.getAttribute("userId");
        HttpStatus status;
        try{
            CreditRegistDto data = etcService.registCredit(percent,firstCredit,userId);
            result.put("message",okay);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }

    @GetMapping("/rank/{type}") // 랭킹 조회
    public ResponseEntity<?> rankiList(@RequestParam(value = "pageSize") Integer pageSize,@RequestParam(value = "lastIdx") Integer lastIdx, @PathVariable(value = "type") String type){
        Map<String,Object> result = new HashMap<>();

        HttpStatus status;
        try{
            if(type.equals("donation")){
                List<UserRankDonationListDto> data = userService.rankListDonation(pageSize,lastIdx);
                result.put("data",data);
            } else if (type.equals("collection")) {
                List<UserRankCollectionListDto> data = userService.rankListCollection(pageSize,lastIdx);
                result.put("data",data);
            }
            result.put("message",okay);
            status = HttpStatus.OK;
        }catch (Exception e){
            System.out.println(e);
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
}
