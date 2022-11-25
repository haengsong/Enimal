package com.enimal.backend.service;

import com.enimal.backend.dto.Notice.NoticeRegistDto;

import java.util.Map;

public interface JwtService {
    <T> String createAccessToken(String key, T data);
    <T> String createRefreshToken(String key, T data);
    <T> String create(String key, T data, String subject, long expir);
    Map<String, Object> get(String key);
    String getUserId();
    String decodeToken(String jwt);


}
