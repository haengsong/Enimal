package com.enimal.backend.dto.Etc;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BadgeShowDto {
    private String userId;
    private String[] modalName;
    private String eventDayName;
    private Boolean result;
}
