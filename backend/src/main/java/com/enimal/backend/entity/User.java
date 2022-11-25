package com.enimal.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "USER")
public class User {
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int idx;

    private String wallet;
    private String nickname;
    @Id
    private String id;
    private int credit;
    private LocalDateTime createdate = LocalDateTime.now();;
    private int usedcredit;
    private int usedcount;
    private int donation;
    private String lastPuzzle;
}
