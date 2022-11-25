package com.enimal.backend;

import com.enimal.backend.dto.Board.BoardRegistDto;
import com.enimal.backend.dto.Board.BoardShowDto;
import com.enimal.backend.entity.Badge;
import com.enimal.backend.entity.Board;
import com.enimal.backend.entity.User;
import com.enimal.backend.repository.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class BoardTests {
    UserRepository userRepository;
    BoardRepository boardRepository;
    BadgeRepository badgeRepository;
    @Autowired
    public BoardTests( UserRepository userRepository, BoardRepository boardRepository, BadgeRepository badgeRepository){
        this.userRepository = userRepository;
        this.boardRepository = boardRepository;
        this.badgeRepository = badgeRepository;
    }
    @Test
    void 자유게시판_등록(){
        String userId = "admin";
        String title = "자유게시판 제목";
        String content = "자유게시판 내용";
        Byte[] picture = {1,2,3,4,5,3,2,1};
        BoardRegistDto boardRegistDto = new BoardRegistDto();
        boardRegistDto.setUserId(userId);
        boardRegistDto.setTitle(title);
        boardRegistDto.setContent(content);
        boardRegistDto.setPicture(picture);
        Board board = new Board();
        Optional<User> user = userRepository.findById(userId);
        // 업적 4번 : 첫 게시물 작성
        List<Board> boards = boardRepository.findByUser(user);
        int size = boards.size();
        if(size == 0) {
            Badge badge = new Badge();
            badge.setBadge("업적 냠냠");
            badge.setCreatedate(LocalDateTime.now());
            badge.setUser(user.get());
            badge.setPercentage(2);
            badgeRepository.save(badge);
            System.out.println("뱃지내역");
            System.out.println(badge.getBadge());
            System.out.println(badge.getUser().getId());
            System.out.println(badge.getCreatedate());
            System.out.println(badge.getPercentage());
        }
        else System.out.println(size+"입니다");
        board.setUser(user.get());
        board.setTitle(boardRegistDto.getTitle());
        board.setContent(boardRegistDto.getContent());
        board.setPicture(boardRegistDto.getPicture());
        board.setCreatedate(LocalDateTime.now());
        board.setModifydate(LocalDateTime.now());
        board.setView(0);
        boardRepository.save(board);
        System.out.println(board.getUser().getId());
        System.out.println(board.getTitle());
        System.out.println(board.getContent());
        System.out.println(board.getPicture());
    }
    @Test
    void 자유게시판_삭제(){
        Integer idx = 1;
        boardRepository.deleteById(idx);
    }
    @Test
    void 자유게시판_리스트_조회(){
        Integer pageSize = 5;
        Integer lastIdx = 0;
        Slice<Board> boards = null;
        Pageable pageable = PageRequest.ofSize(pageSize);
        if (lastIdx == 0) {
            lastIdx = boardRepository.findTop1ByOrderByIdxDesc().get().getIdx() + 1;
        }
        boards = boardRepository.findAllByOrderByIdxDesc(lastIdx, pageable);
        for (Board board : boards) {
            System.out.println(board.getContent() + " : " + board.getTitle());
        }
    }
    @Test
    void 자유게시판_세부_조회() {
        Integer idx = 5;
        Optional<Board> board = boardRepository.findById(idx);
        BoardShowDto boardShowDto = new BoardShowDto();
        boardShowDto.setBoardTime(board.get().getModifydate());
        boardShowDto.setNickname(board.get().getUser().getNickname());
        boardShowDto.setTitle(board.get().getTitle());
        boardShowDto.setContent(board.get().getContent());
        boardShowDto.setPicture(board.get().getPicture());
        board.get().setView(board.get().getView()+1);
        boardRepository.save(board.get());
        boardShowDto.setView(board.get().getView());
        System.out.println(boardShowDto.getTitle());
        System.out.println(boardShowDto.getContent());
        System.out.println(boardShowDto.getView());
    }
    @Test
    void 자유게시판_수정(){
        Integer idx = 7;
        String titleC = "제목 수정합니다111111";
        Optional<Board> board = boardRepository.findById(idx);
        if(board.isPresent()){
            board.get().setTitle(titleC);
            board.get().setModifydate(LocalDateTime.now());
        }
        boardRepository.save(board.get());
        System.out.println(board.get().getTitle());
    }
}
