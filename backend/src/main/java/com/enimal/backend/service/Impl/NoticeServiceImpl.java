package com.enimal.backend.service.Impl;

import com.enimal.backend.dto.Notice.NoticeListDto;
import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.dto.Notice.NoticeShowDto;
import com.enimal.backend.dto.Notice.NoticeUpdateDto;
import com.enimal.backend.entity.Badge;
import com.enimal.backend.entity.Notice;
import com.enimal.backend.entity.NoticeAttendence;
import com.enimal.backend.entity.User;
import com.enimal.backend.repository.BadgeRepository;
import com.enimal.backend.repository.NoticeAttendenceRepository;
import com.enimal.backend.repository.NoticeRepository;
import com.enimal.backend.repository.UserRepository;
import com.enimal.backend.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class NoticeServiceImpl implements NoticeService {
    private static final String admin = "Enimal";
    private NoticeRepository noticeRepository;
    private NoticeAttendenceRepository noticeAttendenceRepository;
    private UserRepository userRepository;
    private BadgeRepository badgeRepository;
    @Autowired
    NoticeServiceImpl(NoticeRepository noticeRepository,NoticeAttendenceRepository noticeAttendenceRepository,UserRepository userRepository,BadgeRepository badgeRepository){
        this.noticeRepository = noticeRepository;
        this.noticeAttendenceRepository = noticeAttendenceRepository;
        this.userRepository = userRepository;
        this.badgeRepository = badgeRepository;
    }
    @Override
    public boolean registNotice(NoticeRegistDto noticeRegistDto) {
        Notice notice = new Notice();
        notice.setTitle(noticeRegistDto.getTitle());
        notice.setContent(noticeRegistDto.getContent());
        notice.setCreatedate(LocalDateTime.now().plusHours(9));
        notice.setModifydate(LocalDateTime.now().plusHours(9));
        notice.setUser_id(admin);
        notice.setView(0);
        noticeRepository.save(notice);
        return true;
    }
    @Override
    public List<NoticeListDto> listNotice(Integer pageSize, Integer lastIdx) {
        List<NoticeListDto> noticeListDtos = new ArrayList<>();
        Pageable pageable = PageRequest.ofSize(pageSize);
        // 맨처음
        if (lastIdx == 0) {
            lastIdx = noticeRepository.findTop1ByOrderByIdxDesc().get().getIdx() + 1;
        }
        Slice<Notice> notices = noticeRepository.findAllByOrderByIdxDesc(lastIdx, pageable);
        for (Notice notice : notices) {
            NoticeListDto noticeListDto = new NoticeListDto();
            noticeListDto.setTitle(notice.getTitle());
            noticeListDto.setView(notice.getView());
            noticeListDto.setUser_id(notice.getUser_id());
            noticeListDto.setIdx(notice.getIdx());
            noticeListDto.setNoticeTime(notice.getModifydate());
            noticeListDtos.add(noticeListDto);
        }
        return noticeListDtos;
    }
    @Override
    public NoticeShowDto detailNotice(String userId, Integer idx) {
        List<String> modal = new ArrayList<>();
        Optional<Notice> notice = noticeRepository.findById(idx);
        Optional<NoticeAttendence> noticeAttendenceList = noticeAttendenceRepository.findByUserIdAndNoticeIdx(userId,idx);
        List<Notice> notices = noticeRepository.findAll(); // 공지사항 총 개수
        if(!noticeAttendenceList.isPresent()){
            NoticeAttendence noticeAttendence = new NoticeAttendence();
            noticeAttendence.setUserId(userId);

            noticeAttendence.setNoticeIdx(idx);
            noticeAttendenceRepository.save(noticeAttendence);
        }
        List<NoticeAttendence> noticeAttendences = noticeAttendenceRepository.findByUserId(userId);
        Optional<User> user = userRepository.findById(userId);
        NoticeShowDto noticeShowDto = new NoticeShowDto();
        List<Badge> list = badgeRepository.findByUserId(userId);
        Boolean isBadge = true;
        for(int i=0;i<list.size();i++){ // 뱃지 있는지 확인
            if((list.get(i).getBadge()).equals("Enimal 애호가")){
                isBadge = false;
                break;
            }
        }
        if(isBadge&&noticeAttendences.size()==notices.size()){
            Badge badge = new Badge();
            badge.setBadge("Enimal 애호가");
            badge.setCreatedate(LocalDateTime.now().plusHours(9));
            badge.setUser(user.get());
            badge.setPercentage(2);
            badgeRepository.save(badge);
            modal.add(badge.getBadge());
        }
        noticeShowDto.setUserId(notice.get().getUser_id());
        noticeShowDto.setTitle(notice.get().getTitle());
        noticeShowDto.setContent(notice.get().getContent());
        noticeShowDto.setNoticedate(notice.get().getModifydate());
        int count = notice.get().getView();
        notice.get().setView(count+1);
        noticeRepository.save(notice.get());
        noticeShowDto.setView(notice.get().getView());
        // 뱃지 모달
        String[] arr = new String[modal.size()];
        for(int i=0; i< modal.size(); i++){
            arr[i] = modal.get(i);
        }
        noticeShowDto.setModalName(arr);
        return noticeShowDto;
    }
    @Override
    public NoticeShowDto detailNotice(Integer idx) {
        Optional<Notice> notice = noticeRepository.findById(idx);
        NoticeShowDto noticeShowDto = new NoticeShowDto();
        noticeShowDto.setUserId(notice.get().getUser_id());
        noticeShowDto.setTitle(notice.get().getTitle());
        noticeShowDto.setContent(notice.get().getContent());
        noticeShowDto.setNoticedate(notice.get().getModifydate());
        noticeShowDto.setView(notice.get().getView()); // 비로그인시 조회수 증가X
        return noticeShowDto;
    }
    @Override
    @Transactional
    public boolean deleteNotice(Integer idx) {
        noticeRepository.deleteById(idx);
        return true;
    }
    @Override
    public boolean updateNotice(NoticeUpdateDto noticeUpdateDto) {
        Optional<Notice> notice = noticeRepository.findById(noticeUpdateDto.getIdx());
        if(notice.isPresent()){
            notice.get().setTitle(noticeUpdateDto.getTitle());
            notice.get().setContent(noticeUpdateDto.getContent());
            notice.get().setModifydate(LocalDateTime.now().plusHours(9));
        }
        noticeRepository.save(notice.get());
        return true;
    }
}
