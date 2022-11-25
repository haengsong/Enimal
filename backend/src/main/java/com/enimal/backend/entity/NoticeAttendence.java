package com.enimal.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "NOTICEATTENDENCE")
public class NoticeAttendence {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int idx;
    @Column(name = "user_id")
    private String userId;
    @Column(name = "notice_idx")
    private int noticeIdx;
}
