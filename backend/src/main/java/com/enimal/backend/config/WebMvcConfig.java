package com.enimal.backend.config;

import com.enimal.backend.interceptor.Intercepter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;
import java.util.List;

// interceptor를 등록
@Configuration
@PropertySource("classpath:application.yml")
@EnableAspectJAutoProxy
public class WebMvcConfig implements WebMvcConfigurer {
    public List loginEssential = Arrays.asList("/**"); //적용할 URL 패턴
    public List loginInessential = Arrays.asList("/user/login","/user/profile/**","/user/completion/**","/todayAnimal","/noticeList/**","/boardList/**","/user/nickname/**","/rank/**"); //제외할 URL 패턴
    @Bean
    public Intercepter intercepter(){
        return new Intercepter();
    }
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(intercepter())
                .addPathPatterns(loginEssential)
                .excludePathPatterns(loginInessential);
    }
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedOriginPatterns("http://localhost:3000", "http://localhost:3001","http://localhost:80","http://j7c106.p.ssafy.io", "http://j7c106.p.ssafy.io:3000", "https://j7c106.p.ssafy.io", "https://j7c106.p.ssafy.io:3000","https://localhost:80","https://localhost:8001","https://localhost:3000")
//                .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH","OPTIONS")
//                .maxAge(6000)
//                .allowCredentials(true);
//    }
}