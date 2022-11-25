package com.enimal.backend.dto.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class UserCommentListDto {
    private Integer boardIdx;
    private String boardTitle;
    private String content;
    private LocalDateTime createDate;

}
