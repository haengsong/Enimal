package com.enimal.backend.repository;

import com.enimal.backend.entity.Notice;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface NoticeRepository extends JpaRepository<Notice,Integer> {
    Optional<Notice> findTop1ByOrderByIdxDesc();
    @Query("SELECT t FROM Notice t " +
            "WHERE t.idx < :lastIdx " +
            "order by t.idx DESC")
    Slice<Notice> findAllByOrderByIdxDesc(Integer lastIdx, Pageable pageable);
}
