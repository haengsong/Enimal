package com.enimal.backend.repository;

import com.enimal.backend.entity.Attendence;
import com.enimal.backend.entity.Money;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MoneyRepository extends JpaRepository<Money,Integer> {
    List<Money> findByUserId(String userId);

    Optional<Money> findTop1ByOrderByIdxDesc();
//    @Query("SELECT t FROM Money t " +
//            "WHERE t.userId = :userId AND t.idx < :lastIdx " +
//            "order by t.idx DESC")
//    Slice<Money> findByUserIdOrderByIdxDesc(String userId, Integer lastIdx, Pageable pageable);

}
