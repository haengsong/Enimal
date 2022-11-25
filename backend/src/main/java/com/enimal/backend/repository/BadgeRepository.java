package com.enimal.backend.repository;

import com.enimal.backend.entity.Badge;
import com.enimal.backend.entity.Board;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BadgeRepository extends JpaRepository<Badge,Integer> {

    List<Badge> findByUserId(String userId);

    Long countByUserId(String userId);

    Optional<Badge> findByUserIdAndBadge(String userId, String badge);
}
