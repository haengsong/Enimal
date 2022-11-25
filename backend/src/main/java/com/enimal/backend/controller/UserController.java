package com.enimal.backend.controller;

import com.enimal.backend.dto.Etc.BadgeShowDto;
import com.enimal.backend.dto.User.*;
import com.enimal.backend.service.JwtService;
import com.enimal.backend.service.NoticeService;
import com.enimal.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class UserController {
    private static final String okay = "SUCCESS";
    private static final String fail = "FAIL";
    private final NoticeService noticeService;
    private final UserService userService;
    private final JwtService jwtService;
    @Autowired
    UserController(NoticeService noticeService,UserService userService,JwtService jwtService){
        this.noticeService = noticeService;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    @GetMapping("/user/nickname/{nickname}") // 닉네임 중복검사
    public ResponseEntity<?> checkUser(@PathVariable("nickname") String nickname){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        try{
            if(userService.checkUser(nickname)){
                result.put("message", okay);
            }else{
                result.put("message",fail);

            }
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @PostMapping("/user/login") // 지갑연결
    public ResponseEntity<?> loginUser(@RequestBody UserLoginDto userLoginDto, HttpServletResponse response){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        try{
            // create a cookie
            BadgeShowDto data = userService.loginUser(userLoginDto);
            if(data.getResult()) {
                String accessToken = jwtService.createAccessToken("id", data.getUserId());
                String refreshToken = jwtService.createRefreshToken("id", data.getUserId());
                result.put("Authorization", accessToken);
                result.put("message", okay);
                result.put("data", data);
                // create a cookie

                Cookie refreshCookie = new Cookie("refresh-token", refreshToken);
                refreshCookie.setMaxAge(1 * 60 * 60);
                refreshCookie.setPath("/");
                refreshCookie.setHttpOnly(true);
                refreshCookie.setSecure(true);

                response.addCookie(refreshCookie);
                status = HttpStatus.OK;
            }else{
                result.put("message", fail);
                status = HttpStatus.OK;
            }
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @DeleteMapping("/user") // 회원탈퇴
    public ResponseEntity<?> deleteUser(HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String)request.getAttribute("userId");
        try{
            userService.deleteUser(userId);
            result.put("message",okay);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result,status);
    }
    @PutMapping("/user") // 회원 수정
    public ResponseEntity<?> updateUser(HttpServletRequest request,@RequestBody Map<String, String> updateNickname){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            userService.updateUser(userId,updateNickname.get("nickname"));
            result.put("message",okay);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/user/attend") // 출석 정보 조회
    public ResponseEntity<?> attendUser(HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            Map<Integer, LocalDateTime> data = userService.attendUser(userId);
            result.put("message",okay);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/user/post") // 작성한 글 조회
    public ResponseEntity<?> listBoardUser(HttpServletRequest request, @RequestParam(value = "lastIdx") Integer lastIdx,@RequestParam(value = "pageSize") Integer pageSize){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            List<UserPostListDto> data = userService.boardList(userId,pageSize,lastIdx);
            result.put("message",okay);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/user/comment") //작성한 댓글 조회
    public ResponseEntity<?> listCommentUser(HttpServletRequest request, @RequestParam(value = "lastIdx") Integer lastIdx,@RequestParam(value = "pageSize") Integer pageSize){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            List<UserCommentListDto> data = userService.listCommentUser(userId,pageSize,lastIdx);
            result.put("message",okay);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/user/money") //재화 내역 조회
    public ResponseEntity<?> listMoneyUser(HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            List<UserMoneyListDto> data = userService.listMoneyUser(userId);
            result.put("message",okay);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/user/profile/{nickname}") //프로필 조회 - 기본정보
    public ResponseEntity<?> profileUser(HttpServletRequest request, @PathVariable("nickname") String nickname){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        try{
            UserProfileDto userProfileDto = userService.profileUser(nickname);
            result.put("message",okay);
            result.put("data",userProfileDto);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/user/completion/{nickname}") //프로필 조회 - 보유중인 컬렉션
    public ResponseEntity<?> completionUser(HttpServletRequest request, @PathVariable("nickname") String nickname){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        try{
            List<Map<String,Object>> data = userService.completionUser(nickname);
            result.put("message",okay);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result,status);
    }

    @GetMapping("/user/collection") //프로필 조회 - 수집중인 컬렉션
    public ResponseEntity<?> colletionUser(HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            List<UserCollectionDto> data = userService.collectionUser(userId);
            result.put("message",okay);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/user/credit") // 현재 재화 내역
    public ResponseEntity<?> currentCredit(HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            int data = userService.currentCredit(userId);
            result.put("message",okay);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result,status);
    }
}
