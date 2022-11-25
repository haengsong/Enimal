package com.enimal.backend.dto.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class UserPostListDto {
    private int idx;
    private String title;
    private LocalDateTime createDate;
    private LocalDateTime modifyDate;
    private String content;
    private Integer view;
    private String picture;
}
