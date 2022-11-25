package com.enimal.backend.dto.Board;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BoardUpdateDto {
    private Integer idx;
    private String title;
    private String content;
    private String user_id;
    private String picture;
}
