package com.enimal.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "ANIMAL")
public class Animal {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int idx;

    private String animal;
    private int count;
    private String grade;
    private String content;
    private Byte[] picture;
}
