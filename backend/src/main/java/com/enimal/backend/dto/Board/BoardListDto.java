package com.enimal.backend.dto.Board;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BoardListDto {
    private String title;
    private String picture;
    private Integer view;
    private Integer idx;
    private String nickname;
}
