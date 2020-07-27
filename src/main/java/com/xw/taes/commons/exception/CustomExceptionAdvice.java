package com.xw.taes.commons.exception;

import com.xw.taes.commons.vto.ReturnResult;
import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

/**
 * 异常捕获
 * 虽然可以捕获异常并且返回前端，但是我找不到展示的机会
 * @author adx
 * @date 2020/7/24 10:01
 */
@Slf4j
@RestController
@ControllerAdvice(basePackages = {"com.xw.taes.sys.controller","com.xw.taes.shiro.config"})
public class CustomExceptionAdvice {
    /**
     * 处理与用户相关的业务异常
     * @return
     */
    @ExceptionHandler(SystemException.class)
    public ReturnResult UserExceptionHandler(HttpServletRequest request, SystemException e){
        log.error("用户信息异常：Host:{} invoke URL:{},错误信息：{}",request.getRemoteHost(),request.getRequestURL(),e.getMessage());
        return new ReturnResult(e.getCode(),e.getMessage(),false);
    }

    @ExceptionHandler(IncorrectCredentialsException.class)
    public ReturnResult incorrectCredentialsExceptionHandler(HttpServletRequest request, IncorrectCredentialsException e){
        log.error("用户登录错误：Host:{},错误信息为:{}",request.getRemoteHost(),e.getMessage());
        return new ReturnResult("0","登录失败用户名或密码错误");
    }
}
