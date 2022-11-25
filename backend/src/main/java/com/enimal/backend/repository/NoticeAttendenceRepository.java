package com.enimal.backend.repository;

import com.enimal.backend.entity.NoticeAttendence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NoticeAttendenceRepository extends JpaRepository<NoticeAttendence,Integer> {
    List<NoticeAttendence> findByUserId(String userId);
    Optional<NoticeAttendence> findByUserIdAndNoticeIdx(String userId,int noticeIdx);
}
