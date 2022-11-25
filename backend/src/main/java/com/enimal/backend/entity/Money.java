package com.enimal.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "MONEY")
public class Money {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer idx;
    @Column(name = "user_id")
    private String userId;
    private Integer credit;
    private LocalDateTime createdate;
    private Integer donateCredit;
}
