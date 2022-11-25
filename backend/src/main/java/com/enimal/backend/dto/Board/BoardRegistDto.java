package com.enimal.backend.dto.Board;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BoardRegistDto {
    private String userId;
    private String title;
    private String content;
    private String picture;
}
