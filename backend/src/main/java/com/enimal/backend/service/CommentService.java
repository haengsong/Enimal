package com.enimal.backend.service;

import com.enimal.backend.dto.Comment.CommentRegistDto;
import com.enimal.backend.dto.Comment.CommentShowDto;

import java.util.List;

public interface CommentService {
    void registComment(CommentRegistDto commentRegistDto);

    List<CommentShowDto> listComment(Integer idx);

    boolean deleteComment(Integer idx, String userId);
}
