package com.enimal.backend.service;

import com.enimal.backend.dto.Notice.NoticeListDto;
import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.dto.Notice.NoticeShowDto;
import com.enimal.backend.dto.Notice.NoticeUpdateDto;
import com.enimal.backend.entity.Notice;

import java.util.List;

public interface NoticeService {
    boolean registNotice(NoticeRegistDto noticeRegistDto);
    List<NoticeListDto> listNotice(Integer pageSize, Integer lastIdx);
    NoticeShowDto detailNotice(String userId,Integer idx);

    NoticeShowDto detailNotice(Integer idx);
    boolean deleteNotice(Integer idx);
    boolean updateNotice(NoticeUpdateDto noticeUpdateDto);
}
