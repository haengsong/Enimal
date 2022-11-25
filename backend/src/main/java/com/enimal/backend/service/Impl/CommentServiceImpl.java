package com.enimal.backend.service.Impl;

import com.enimal.backend.dto.Comment.CommentRegistDto;
import com.enimal.backend.dto.Comment.CommentShowDto;
import com.enimal.backend.entity.Badge;
import com.enimal.backend.entity.Board;
import com.enimal.backend.entity.Comment;
import com.enimal.backend.entity.User;
import com.enimal.backend.repository.BadgeRepository;
import com.enimal.backend.repository.BoardRepository;
import com.enimal.backend.repository.CommentRepository;
import com.enimal.backend.repository.UserRepository;
import com.enimal.backend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CommentServiceImpl implements CommentService {
    private BoardRepository boardRepository;
    private UserRepository userRepository;
    private CommentRepository commentRepository;
    private BadgeRepository badgeRepository;
    @Autowired
    CommentServiceImpl(BoardRepository boardRepository,UserRepository userRepository,CommentRepository commentRepository, BadgeRepository badgeRepository){
        this.boardRepository = boardRepository;
        this.userRepository = userRepository;
        this.commentRepository = commentRepository;
        this.badgeRepository = badgeRepository;
    }
    @Override
    public void registComment(CommentRegistDto commentRegistDto) {
        Comment comment = new Comment();
        Optional<Board> board = boardRepository.findById(commentRegistDto.getIdx());
        Optional<User> user = userRepository.findById(commentRegistDto.getUser_id());
        comment.setContent(commentRegistDto.getContent());
        comment.setBoard(board.get());
        comment.setCreatedate(LocalDateTime.now().plusHours(9));
        comment.setUser(user.get());
        commentRepository.save(comment);
        // 업적 14번 : 게시글에 댓글이 10개 이상 달린 경우
        List<Comment> commentList = commentRepository.findByBoard_Idx(commentRegistDto.getIdx());
        List<Badge> badgeList = badgeRepository.findByUserId(board.get().getUser().getId());
        Boolean flag = true;
        for(int i=0; i< badgeList.size(); i++){ // 이미 그 글쓴이가 인플루언서인 경우는 제외하기
            if((badgeList.get(i).getBadge()).equals("인플루언서")) {
                flag = false;
                break;
            }
        }
        if(commentList.size() >= 10 && flag){ // 일단 10개 이상인지 확인 후 글 작성자가 작성한 댓글은 제외하기
            String writerId = board.get().getUser().getId();
            int count = 0;
            for (int i=0; i<commentList.size(); i++){
                if(!(commentList.get(i).getUser().getId()).equals(writerId)) count++;
            }
            if(count >= 10){
                Badge badge = new Badge();
                badge.setBadge("인플루언서");
                badge.setCreatedate(LocalDateTime.now().plusHours(9));
                badge.setUser(board.get().getUser());
                badge.setPercentage(2);
                badgeRepository.save(badge);
            }
        }
    }

    @Override
    public List<CommentShowDto> listComment(Integer idx) {
        List<Comment> comments = commentRepository.findByBoard_Idx(idx);
        List<CommentShowDto> commentShowDtos = new ArrayList<>();
        for(int i=0; i<comments.size(); i++){
            CommentShowDto commentShowDto = new CommentShowDto();
            commentShowDto.setCommentTime(comments.get(i).getCreatedate());
            commentShowDto.setComment_idx(comments.get(i).getIdx());
            commentShowDto.setContent(comments.get(i).getContent());
            commentShowDto.setUser_id(comments.get(i).getUser().getId());
            commentShowDto.setIdx(idx);
            commentShowDtos.add(commentShowDto);
        }
        return commentShowDtos;
    }

    @Override
    public boolean deleteComment(Integer comment_idx, String userId) {
        Optional<Comment> comment = commentRepository.findById(comment_idx);
        if(userId.equals(comment.get().getUser().getId())){
            commentRepository.deleteById(comment_idx);
            return true;
        }
        else return false;
    }
}
