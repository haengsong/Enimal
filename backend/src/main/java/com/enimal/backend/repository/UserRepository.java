package com.enimal.backend.repository;

import com.enimal.backend.dto.User.UserProfileDto;
import com.enimal.backend.entity.Notice;
import com.enimal.backend.entity.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    @Query(value = "SELECT t.ranking from (SELECT id,rank() over (order by donation desc) as ranking from `USER` u) t where id = :userId",nativeQuery = true)
    Integer findByUserIdRank(@Param("userId") String userId);
    List<User> findTop10ByOrderByDonation();
    
    Optional<User> findByNickname(String nickname);

    Optional<User> findByWallet(String wallet);

    Optional<User> findTop1ByOrderByDonationDesc();

    @Query("SELECT t FROM User t " +
            "WHERE t.idx < :lastIdx " +
            "order by t.donation DESC")
    Slice<User> findAllByOrderByDonationDesc(Integer lastIdx, Pageable pageable);
}
