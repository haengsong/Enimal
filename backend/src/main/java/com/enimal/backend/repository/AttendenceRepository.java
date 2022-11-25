package com.enimal.backend.repository;

import com.enimal.backend.entity.Attendence;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AttendenceRepository extends JpaRepository<Attendence,Integer> {
    List<Attendence> findByUserId(String userId);
    List<Attendence> findByUserIdOrderByConvertdateDesc(String userId);
    Optional<Attendence> findTop1ByOrderByIdxDesc();
    @Query("SELECT t FROM Attendence t " +
            "WHERE t.userId = :userId AND t.convertdate > :convertDate - 60 " +
            "order by t.idx DESC")
    List<Attendence> findByUserIdLessThan(String userId, Integer convertDate);

    Optional<Attendence> findByUserIdAndConvertdate(String id, int convertDate);
}
