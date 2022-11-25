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
@Table(name = "NOTICE")
public class Notice {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer idx;

    private String user_id;
    private String title;
    private LocalDateTime createdate;
    private LocalDateTime modifydate;
    private String content;
    private Integer view;
}
