package com.enimal.backend.service;

import com.enimal.backend.dto.Board.*;
import com.enimal.backend.dto.Etc.BadgeShowDto;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface BoardService {
    BoardRegistShowDto registBoard(BoardRegistDto boardRegistDto);

    boolean deleteBoard(String userId,Integer idx);

    List<BoardListDto> listBoard(Integer pageSize, Integer lastIdx);

    BoardShowDto detailBoard(Integer idx,String userid);
    @Transactional
    int updateView(int idx);
    boolean updateBoard(BoardUpdateDto boardUpdateDto);
}
