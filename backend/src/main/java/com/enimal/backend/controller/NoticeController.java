package com.enimal.backend.controller;

import com.enimal.backend.dto.Notice.NoticeListDto;
import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.dto.Notice.NoticeShowDto;
import com.enimal.backend.dto.Notice.NoticeUpdateDto;
import com.enimal.backend.service.JwtService;
import com.enimal.backend.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class NoticeController {
    private static final String okay = "SUCCESS";
    private static final String fail = "FAIL";
    private static final String admin = "Enimal";
    NoticeService noticeService;
    JwtService jwtService;
    @Autowired
    NoticeController(NoticeService noticeService,JwtService jwtService){
        this.noticeService = noticeService;
        this.jwtService = jwtService;
    }

    @PostMapping("/notice") // 공지사항 작성
    public ResponseEntity<?> registNotice(@RequestBody NoticeRegistDto noticeRegistDto,HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            if(userId.equals(admin)){ // 작성자인지 확인
                noticeService.registNotice(noticeRegistDto);
                result.put("message",okay);
                status = HttpStatus.OK;
            }
            else{
                result.put("message",fail);
                status = HttpStatus.OK;
            }
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/noticeList") // 공지사항 리스트 조회
    public ResponseEntity<?> listNotice(@RequestParam(value = "pageSize") Integer pageSize,@RequestParam(value = "lastIdx") Integer lastIdx){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        try{
            List<NoticeListDto> data = noticeService.listNotice(pageSize,lastIdx);
            result.put("message",okay);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/noticeList/{idx}") // 공지사항 세부 조회
    public ResponseEntity<?> detailNotice(@PathVariable(value = "idx") Integer idx,HttpServletRequest request){
        Map<String,Object> result = new HashMap<>() ;
        HttpStatus status;
        String accessToken = request.getHeader("Authorization");
        String decodeId = jwtService.decodeToken(accessToken);
        try{
            NoticeShowDto data;
            if(decodeId != "timeOut" && decodeId != null){
                data = noticeService.detailNotice(decodeId,idx);
            }else{
                data = noticeService.detailNotice(idx);
            }
            result.put("message",okay);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            System.out.println(e);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @DeleteMapping("/notice") // 공지사항 삭제
    public ResponseEntity<?> deleteNotice(HttpServletRequest request, @RequestParam(value = "idx") Integer idx){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            if(userId.equals(admin)){ // 작성자인지 확인
                noticeService.deleteNotice(idx);
                result.put("message",okay);
                status = HttpStatus.OK;
            }
            else{
                result.put("message",fail);
                status = HttpStatus.OK;
            }
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @PutMapping("/notice") // 공지사항 수정
    public ResponseEntity<?> updateNotice(HttpServletRequest request, @RequestBody NoticeUpdateDto noticeUpdateDto){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            if(userId.equals(admin)){ // 작성자인지 확인
                boolean is = noticeService.updateNotice(noticeUpdateDto);
                result.put("message",okay);
                status = HttpStatus.OK;
            }
            else{
                result.put("message",fail);
                status = HttpStatus.OK;
            }
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }

}
