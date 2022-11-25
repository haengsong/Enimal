package com.enimal.backend.dto.Notice;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class NoticeListDto {
    private String title;
    private String user_id;
    private LocalDateTime noticeTime;
    private int view;
    private int idx;
}
