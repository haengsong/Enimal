package com.enimal.backend.repository;

import com.enimal.backend.entity.Attendence;
import com.enimal.backend.entity.Board;
import com.enimal.backend.entity.Notice;
import com.enimal.backend.entity.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository<Board,Integer> {

    Optional<Board> findTop1ByOrderByIdxDesc();
    @Query("SELECT t FROM Board t " +
            "WHERE t.user.id = :userId AND t.idx < :lastIdx " +
            "order by t.idx DESC")
    Slice<Board> findByUserIdOrderByIdxDesc(String userId, Integer lastIdx, Pageable pageable);
    @Query("SELECT t FROM Board t " +
            "WHERE t.idx < :lastIdx " +
            "order by t.idx DESC")
    Slice<Board> findAllByOrderByIdxDesc(Integer lastIdx, Pageable pageable);
    List<Board> findByUser(Optional<User> user);
    @Modifying
    @Query("update Board b set b.view = b.view + 1 where b.idx = :id")
    int updateView(@Param("id") Integer id);
}
