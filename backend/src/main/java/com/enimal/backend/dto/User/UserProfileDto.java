package com.enimal.backend.dto.User;

import com.enimal.backend.entity.Badge;
import com.enimal.backend.entity.Collection;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.List;
import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
public class UserProfileDto {
    private String nickname;
    private Integer usedCount;
    private Integer usedCredit;
    private Integer collectionCount;
    private Integer collectionRank;
    private Integer donationRank;
    private List<UserBadgeListDto> badges;
}
