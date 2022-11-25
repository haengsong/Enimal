package com.enimal.backend.repository;

import com.enimal.backend.entity.Attendence;
import com.enimal.backend.entity.Board;
import com.enimal.backend.entity.Comment;
import com.enimal.backend.service.JwtService;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommentRepository extends JpaRepository<Comment,Integer> {

    List<Comment> findByUserId(String userId);
    Optional<Comment> findTop1ByOrderByIdxDesc();
    @Query("SELECT t FROM Comment t " +
            "WHERE t.user.id = :userId AND t.idx < :lastIdx " +
            "order by t.idx DESC")
    Slice<Comment> findByUserIdOrderByIdxDesc(String userId, Integer lastIdx, Pageable pageable);

    List<Comment> findByBoard_Idx(Integer idx);
}
