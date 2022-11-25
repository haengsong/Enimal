package com.enimal.backend.dto.User;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class UserBadgeListDto {
    private String nickname;
    private String badge;
    private int percentage;
    private LocalDateTime createdate;

}
