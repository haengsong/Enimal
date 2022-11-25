package com.enimal.backend.dto.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "test")
public class UserRankCollectionListDto {
    @Id
    private int idx;
    private String nickname;
    private long collectionCount;
    private int drawCount;
    public UserRankCollectionListDto(int idx, String nickname, long collectionCount){
        this.idx = idx;
        this.nickname = nickname;
        this.collectionCount = collectionCount;
    }

}
