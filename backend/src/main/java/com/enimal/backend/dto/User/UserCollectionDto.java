package com.enimal.backend.dto.User;

import com.enimal.backend.entity.Badge;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class UserCollectionDto {
    private String animal;
    private Integer piece;
    private LocalDateTime  createDate;
    private Integer count;
}
