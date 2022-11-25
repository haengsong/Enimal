package com.enimal.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "COMMENT")
public class Comment {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int idx;
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
    private String content;
    @ManyToOne
    @JoinColumn(name="board_idx")
    private Board board;
    private LocalDateTime createdate;
}
