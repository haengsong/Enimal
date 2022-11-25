package com.enimal.backend.dto.Comment;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CommentRegistDto {
    private String content;
    private String user_id;
    private Integer idx;
}
