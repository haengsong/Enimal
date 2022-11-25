package com.enimal.backend.dto.Comment;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class CommentShowDto {
    private Integer idx;
    private String content;
    private String user_id;
    private LocalDateTime commentTime;
    private Integer comment_idx;
}
