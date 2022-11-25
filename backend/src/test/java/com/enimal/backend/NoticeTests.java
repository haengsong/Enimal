package com.enimal.backend;

import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.dto.Notice.NoticeShowDto;
import com.enimal.backend.entity.*;
import com.enimal.backend.repository.*;
import com.enimal.backend.service.JwtService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;

@ExtendWith(SpringExtension.class)
@SpringBootTest
//@Transactional
class NoticeTests {
	NoticeRepository noticeRepository;
	JwtService jwtService;
	UserRepository userRepository;
	AttendenceRepository attendenceRepository;
	BoardRepository boardRepository;
	CommentRepository commentRepository;
	@Autowired
	public NoticeTests(NoticeRepository noticeRepository, JwtService jwtService, UserRepository userRepository, AttendenceRepository attendenceRepository, BoardRepository boardRepository, CommentRepository commentRepository){
		this.noticeRepository = noticeRepository;
		this.jwtService = jwtService;
		this.userRepository = userRepository;
		this.attendenceRepository = attendenceRepository;
		this.boardRepository = boardRepository;
		this.commentRepository = commentRepository;
	}
	@Test
	void 공지사항_등록() {
		NoticeRegistDto noticeRegistDto = new NoticeRegistDto();
		noticeRegistDto.setContent("test");
		noticeRegistDto.setTitle("titletest");

		Notice notice = new Notice();
		notice.setTitle(noticeRegistDto.getTitle());
		notice.setContent(noticeRegistDto.getContent());
		noticeRepository.save(notice);
	}
	@Test
	void 공지사항_리스트_조회(){
		Integer pageSize = 5;
		Integer lastIdx = 0;
		Slice<Notice> notices = null;
		Pageable pageable = PageRequest.ofSize(pageSize);
		// 맨처음
		if (lastIdx == 0) {
			lastIdx = noticeRepository.findTop1ByOrderByIdxDesc().get().getIdx() + 1;
		}
		notices = noticeRepository.findAllByOrderByIdxDesc(lastIdx, pageable);
		for (Notice notice : notices) {
			System.out.println(notice.getContent() + " : " + notice.getTitle());
		}
	}
	@Test
	void 공지사항_세부_조회() {
		Integer idx = 5;
		Optional<Notice> notice = noticeRepository.findById(idx);
		NoticeShowDto noticeShowDto = new NoticeShowDto();
		noticeShowDto.setUserId(notice.get().getUser_id());
		noticeShowDto.setTitle(notice.get().getTitle());
		noticeShowDto.setContent(notice.get().getContent());
		noticeShowDto.setNoticedate(notice.get().getModifydate());
		noticeShowDto.setView(notice.get().getView());
		System.out.println(noticeShowDto.getTitle());
		System.out.println(noticeShowDto.getContent());
		System.out.println(noticeShowDto.getNoticedate());
	}
	@Test
	void 공지사항_삭제(){
		Integer idx = 5;
		noticeRepository.deleteById(idx);
	}
	@Test
	void 공지사항_수정(){
		Integer idx = 2;
		String titleC = "제목 수정합니다";
		Optional<Notice> notice = noticeRepository.findById(idx);
		if(notice.isPresent()){
			notice.get().setTitle(titleC);
		}
		noticeRepository.save(notice.get());
		System.out.println(notice.get().getTitle());
	}
}
