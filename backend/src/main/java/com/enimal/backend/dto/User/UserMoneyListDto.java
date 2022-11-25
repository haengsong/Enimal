package com.enimal.backend.dto.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class UserMoneyListDto {
    private Integer useCredit;
    private Integer donateCredit;
    private LocalDateTime createDate;
}
