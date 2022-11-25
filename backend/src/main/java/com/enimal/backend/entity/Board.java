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
@Table(name = "BOARD")
public class Board {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer idx;
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
    private String title;
    private LocalDateTime createdate;
    private LocalDateTime modifydate;
    private String content;
    private Integer view;
    private String picture;
}
