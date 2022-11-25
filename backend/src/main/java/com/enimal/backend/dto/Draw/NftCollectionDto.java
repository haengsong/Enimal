package com.enimal.backend.dto.Draw;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class NftCollectionDto {
    private int idx;
    private String name; // nft 이름
    private String owner; // nft 소유자 지갑주소
    private String type; // nft 생성유형
    private String image; // 이미지 url
    private String tokenId; // ssafy wallet에서 nft를 불러올때 필요한 값
}
