package com.enimal.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "EVENTDAY")
public class EventDay {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer idx;
    private String eventName;
    private String eventDate;
}
