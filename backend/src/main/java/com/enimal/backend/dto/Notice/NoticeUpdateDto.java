package com.enimal.backend.dto.Notice;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class NoticeUpdateDto {
    private Integer idx;
    private String title;
    private String content;
}
