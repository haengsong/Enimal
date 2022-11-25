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
@Table(name = "PUZZLE")
public class Puzzle {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int idx;
    @Column(name = "user_id")
    private String userId;
    private String animal;
    private int piece;
    private LocalDateTime createdate;
    private int count;
}
