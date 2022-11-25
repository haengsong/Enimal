package com.enimal.backend.dto.Notice;

import java.time.LocalDateTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class NoticeShowDto {
    private String userId;
    private String title;
    private LocalDateTime noticedate;
    private String content;
    private Integer view;
    private String[] modalName;
}
