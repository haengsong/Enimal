package com.enimal.backend;

import com.enimal.backend.dto.Comment.CommentShowDto;
import com.enimal.backend.entity.Badge;
import com.enimal.backend.entity.Board;
import com.enimal.backend.entity.Comment;
import com.enimal.backend.entity.User;
import com.enimal.backend.repository.BadgeRepository;
import com.enimal.backend.repository.BoardRepository;
import com.enimal.backend.repository.CommentRepository;
import com.enimal.backend.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class CommentTests {
    UserRepository userRepository;
    BoardRepository boardRepository;
    CommentRepository commentRepository;
    BadgeRepository badgeRepository;
    @Autowired
    public CommentTests( UserRepository userRepository, BoardRepository boardRepository,CommentRepository commentRepository, BadgeRepository badgeRepository){
        this.userRepository = userRepository;
        this.boardRepository = boardRepository;
        this.commentRepository = commentRepository;
        this.badgeRepository = badgeRepository;
    }
    @Test
    void 댓글_등록(){
        String userId = "test";
        Integer idx = 3;
        String content = "댓글입니다";
        Comment comment = new Comment();
        Optional<Board> board = boardRepository.findById(idx);
        Optional<User> user = userRepository.findById(userId);
        comment.setContent(content);
        comment.setBoard(board.get());
        comment.setCreatedate(LocalDateTime.now());
        comment.setUser(user.get());
        commentRepository.save(comment);
        // 업적 14번 : 게시글에 댓글이 10개 이상 달린 경우
        List<Comment> commentList = commentRepository.findByBoard_Idx(idx);
        System.out.println(commentList.size());
        List<Badge> badgeList = badgeRepository.findByUserId(board.get().getUser().getId());
        System.out.println(badgeList.size());
        Boolean flag = true;
        for(int i=0; i< badgeList.size(); i++){ // 이미 그 글쓴이가 인플루언서인 경우는 제외하기
            if((badgeList.get(i).getBadge()).equals("인플루언서")) {
                flag = false;
                System.out.println("이미 뱃지가 있어요");
                break;
            }
        }
        System.out.println(flag);
        if(commentList.size() >= 10 && flag){ // 일단 10개 이상인지 확인 후 글 작성자가 작성한 댓글은 제외하기
            String writerId = board.get().getUser().getId();
            System.out.println("writerId"+writerId);
            int count = 0;
            for (int i=0; i<commentList.size(); i++){
                if((commentList.get(i).getUser().getId()).equals(writerId)){
                    System.out.println("스스로 댓글은 안됩니다.");
                }
                else {
                    count++;
                    System.out.println("인플루언서에 한걸음.");
                }
            }
            if(count >= 10){
                Badge badge = new Badge();
                badge.setBadge("인플루언서");
                badge.setCreatedate(LocalDateTime.now());
                badge.setUser(board.get().getUser());
                badge.setPercentage(2);
                badgeRepository.save(badge);
                System.out.println("인플루언서!!!");
            }
        }
        System.out.println(comment.getContent());
        System.out.println(comment.getUser().getId());
        System.out.println(comment.getBoard().getIdx());
    }
    @Test
    void 댓글_조회(){
        Integer idx = 3;
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
        for(int i=0; i<commentShowDtos.size(); i++){
            System.out.println(commentShowDtos.get(i).getUser_id());
            System.out.println(commentShowDtos.get(i).getContent());
        }
    }
    @Test
    void 댓글_삭제(){
        Integer idx = 8;
        String userId = "sadfsafsdf";
        Optional<Comment> comment = commentRepository.findById(idx);
        if(userId.equals(comment.get().getUser().getId())){
            commentRepository.deleteById(idx);
        }
    }
}
