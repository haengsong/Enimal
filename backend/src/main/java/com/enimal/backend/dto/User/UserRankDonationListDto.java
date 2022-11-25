package com.enimal.backend.dto.User;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserRankDonationListDto {
    private int idx;
    private String nickname;
    private int doantion;
}
