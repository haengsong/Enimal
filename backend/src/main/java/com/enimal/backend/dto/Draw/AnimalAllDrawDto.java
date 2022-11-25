package com.enimal.backend.dto.Draw;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AnimalAllDrawDto {
    private String animal;
    private int count;
    private int piece;
    private boolean complete; // 컬렉션 완성여부
    private boolean useBadge; // 미보유뽑기 여부
    private String[] modalName; // 뱃지 획득
}
