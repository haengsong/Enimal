package com.enimal.backend.dto.Etc;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AnimalShowDto {
    private String animal;
    private Byte[] picture;
    private String grade;
    private String content;
    private int count;
}
