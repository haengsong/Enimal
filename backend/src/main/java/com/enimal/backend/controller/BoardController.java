package com.enimal.backend.controller;

import com.enimal.backend.dto.Board.*;
import com.enimal.backend.dto.Comment.CommentShowDto;
import com.enimal.backend.dto.Etc.BadgeShowDto;
import com.enimal.backend.service.BoardService;
import com.enimal.backend.service.CommentService;
import com.enimal.backend.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class BoardController {
    private static final String okay = "SUCCESS";
    private static final String fail = "FAIL";
    private final BoardService boardService;
    private final CommentService commentService;
    private final JwtService jwtService;
    @Autowired
    BoardController(BoardService boardService,JwtService jwtService , CommentService commentService){
        this.commentService = commentService;
        this.jwtService = jwtService;
        this.boardService = boardService;
    }
    @PostMapping("/board") // 자유게시판 등록
    public ResponseEntity<?> registBoard(@RequestBody BoardRegistDto boardRegistDto, HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            boardRegistDto.setUserId(userId);
            BoardRegistShowDto data = boardService.registBoard(boardRegistDto);
            result.put("data",data);
            result.put("message",okay);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @DeleteMapping("/board") // 자유게시판 삭제
    public ResponseEntity<?> deleteBoard(HttpServletRequest request, @RequestParam(value = "idx") Integer idx){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            boolean is = boardService.deleteBoard(userId,idx);
            if(is) result.put("message",okay);
            else result.put("message",fail);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/boardList") // 자유게시판 리스트 조회
    public ResponseEntity<?> listBoard(@RequestParam(value = "pageSize") Integer pageSize,@RequestParam(value = "lastIdx") Integer lastIdx){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        try{
            List<BoardListDto> data = boardService.listBoard(pageSize,lastIdx);
            result.put("message",okay);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/boardList/{idx}") // 자유게시판 세부 조회
    public ResponseEntity<?> detailBoard(HttpServletRequest request , HttpServletResponse response, @PathVariable(value = "idx") Integer idx){
        Map<String,Object> result = new HashMap<>() ;
        HttpStatus status;
        try{
            String accessToken = request.getHeader("Authorization");
            String decodeId = jwtService.decodeToken(accessToken);
            Cookie oldCookie = null;
            Cookie[] cookies = request.getCookies();
            if (cookies != null) {
                for (Cookie cookie : cookies) {
                    if (cookie.getName().equals("postView")) {
                        oldCookie = cookie;
                    }
                }
            }

            if (oldCookie != null) {
                if (!oldCookie.getValue().contains("["+ idx.toString() +"]")) {
                    boardService.updateView(idx);
                    oldCookie.setValue(oldCookie.getValue() + "_[" + idx + "]");
                    oldCookie.setPath("/");
                    oldCookie.setMaxAge(60 * 60 * 24); 							// 쿠키 시간
                    response.addCookie(oldCookie);
                }
            } else {
                boardService.updateView(idx);
                Cookie newCookie = new Cookie("postView", "[" + idx + "]");
                newCookie.setPath("/");
                newCookie.setMaxAge(60 * 60 * 24); 								// 쿠키 시간
                response.addCookie(newCookie);
            }

            BoardShowDto data = boardService.detailBoard(idx,decodeId);
            List<CommentShowDto> comment = commentService.listComment(idx);
            result.put("message",okay);
            result.put("data",data);
            result.put("comment",comment);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            System.out.println(e);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @PutMapping("/board") // 자유게시판 수정
    public ResponseEntity<?> updateBoard(HttpServletRequest request, @RequestBody BoardUpdateDto boardUpdateDto){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            if(userId.equals(boardUpdateDto.getUser_id())){ // 작성자인지 확인
                boolean is = boardService.updateBoard(boardUpdateDto);
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
