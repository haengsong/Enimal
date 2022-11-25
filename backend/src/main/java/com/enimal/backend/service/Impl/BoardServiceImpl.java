package com.enimal.backend.service.Impl;

import com.enimal.backend.dto.Board.*;
import com.enimal.backend.entity.*;
import com.enimal.backend.repository.*;
import com.enimal.backend.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class BoardServiceImpl implements BoardService {
    private NoticeRepository noticeRepository;
    private UserRepository userRepository;
    private BoardRepository boardRepository;
    private CommentRepository commentRepository;
    private BadgeRepository badgeRepository;
    @Autowired
    BoardServiceImpl(NoticeRepository noticeRepository,UserRepository userRepository,BoardRepository boardRepository,CommentRepository commentRepository,BadgeRepository badgeRepository){
        this.noticeRepository = noticeRepository;
        this.userRepository = userRepository;
        this.boardRepository = boardRepository;
        this.commentRepository = commentRepository;
        this.badgeRepository = badgeRepository;
    }
    @Override
    public BoardRegistShowDto registBoard(BoardRegistDto boardRegistDto) {
        BoardRegistShowDto boardRegistShowDto = new BoardRegistShowDto();
        List<String> modal = new ArrayList<>();
        Board board = new Board();
        Optional<User> user = userRepository.findById(boardRegistDto.getUserId());
        List<Board> boards = boardRepository.findByUser(user);
        int size = boards.size();
        if(size == 0) { // 첫 게시물인 경우
            Badge badge = new Badge();
            badge.setBadge("업적 냠냠");
            badge.setCreatedate(LocalDateTime.now().plusHours(9));
            badge.setUser(user.get());
            badge.setPercentage(2);
            badgeRepository.save(badge);
            modal.add(badge.getBadge());
        }
        board.setUser(user.get());
        board.setTitle(boardRegistDto.getTitle());
        board.setContent(boardRegistDto.getContent());
        board.setPicture(boardRegistDto.getPicture());
        board.setCreatedate(LocalDateTime.now().plusHours(9));
        board.setModifydate(LocalDateTime.now().plusHours(9));
        board.setView(0);
        boardRepository.save(board);
        boardRegistShowDto.setIdx(board.getIdx());

        // 뱃지 모달
        String[] arr = new String[modal.size()];
        for(int i=0; i< modal.size(); i++){
            arr[i] = modal.get(i);
        }
        boardRegistShowDto.setModalName(arr);
        return boardRegistShowDto;
    }

    @Override
    @Transactional
    public boolean deleteBoard(String userId, Integer idx) {
        Optional<Board> board = boardRepository.findById(idx);
        List<Comment> comments = commentRepository.findByBoard_Idx(idx);
        if(board.isPresent()){
            String realId = board.get().getUser().getId();
            // 작성자의 경우만 삭제 가능하도록
            if(realId.equals(userId)){
                boardRepository.deleteById(idx);
                for(int i=0; i<comments.size(); i++){ // 관련 게시물 댓글 삭제
                    commentRepository.deleteById(comments.get(i).getIdx());
                }
                return true;
            }
            else return false;
        }
        else return false;
    }

    @Override
    public List<BoardListDto> listBoard(Integer pageSize, Integer lastIdx) {
        List<BoardListDto> boardListDtos = new ArrayList<>();
        Pageable pageable = PageRequest.ofSize(pageSize);
        if (lastIdx == 0) {
            lastIdx = boardRepository.findTop1ByOrderByIdxDesc().get().getIdx() + 1;
        }
        Slice<Board> boards = boardRepository.findAllByOrderByIdxDesc(lastIdx, pageable);
        for (Board board : boards) {
            BoardListDto boardListDto = new BoardListDto();
            boardListDto.setTitle(board.getTitle());
            boardListDto.setView(board.getView());
            boardListDto.setNickname(board.getUser().getNickname());
            boardListDto.setIdx(board.getIdx());
            boardListDto.setPicture(board.getPicture());
            boardListDtos.add(boardListDto);
        }
        return boardListDtos;
    }

    @Override
    public BoardShowDto detailBoard(Integer idx,String userId) {
        Optional<Board> board = boardRepository.findById(idx);
        BoardShowDto boardShowDto = new BoardShowDto();
        boardShowDto.setBoardTime(board.get().getModifydate());
        if(userId.equals(board.get().getUser().getId())){ // 작성자라면
            boardShowDto.setIsWriter(true);
        }
        boardShowDto.setNickname(board.get().getUser().getNickname());
        boardShowDto.setTitle(board.get().getTitle());
        boardShowDto.setContent(board.get().getContent());
        boardShowDto.setPicture(board.get().getPicture());
        boardRepository.save(board.get());
        boardShowDto.setView(board.get().getView());
        return boardShowDto;
    }

    @Override
    public int updateView(int idx) {
        return boardRepository.updateView(idx);
    }

    @Override
    public boolean updateBoard(BoardUpdateDto boardUpdateDto) {
        Optional<Board> board = boardRepository.findById(boardUpdateDto.getIdx());
        if(board.isPresent()){
            board.get().setTitle(boardUpdateDto.getTitle());
            board.get().setContent(boardUpdateDto.getContent());
            board.get().setPicture(boardUpdateDto.getPicture());
            board.get().setModifydate(LocalDateTime.now().plusHours(9));
        }
        boardRepository.save(board.get());
        return true;
    }
}
