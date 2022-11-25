package com.enimal.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "COLLECTION")
public class Collection {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int idx;
    @Column(name = "user_id")
    private String userId;
    private String animal;
    private LocalDateTime createdate;
    private String tokenIdInfo;
    private String nftType;
    private String nftURL;
    private String nftName;
    private String nftWallet;
    private boolean info;
}
