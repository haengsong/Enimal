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
@Table(name = "ATTENDENCE")
public class Attendence {
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Id
    private Integer idx;
    @Column(name = "user_id")
    private String userId;
    private LocalDateTime attenddate;
    private Integer convertdate;
}
