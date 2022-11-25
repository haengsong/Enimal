package com.enimal.backend.interceptor;

import com.enimal.backend.entity.User;
import com.enimal.backend.repository.UserRepository;
import com.enimal.backend.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class Intercepter extends HandlerInterceptorAdapter {
    @Autowired
    JwtService jwtService;

    private static final String timeOut = "timeOut";

    // 컨트롤러 전 실행
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (HttpMethod.OPTIONS.matches(request.getMethod())) {
            return true;
        }
        // 로그인 해야만 사용할 수 있는 서비스들 체크
        String accessToken = request.getHeader("Authorization");
        String decodeId = jwtService.decodeToken(accessToken);
        if(decodeId.equals(timeOut)){ // 토큰 만료
            response.setStatus(401);
            return false;
        }else{
            request.setAttribute("userId",decodeId);
            return true;
        }

    }
//    // 컨트롤러 처리 후 실행
//    @Override
//    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
//        System.out.println("postHandle");
//    }
//    // 화면 처리 후 실행
//    @Override
//    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
//        System.out.println("afterHandle");
//    }
}