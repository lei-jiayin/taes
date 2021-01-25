package com.xw.taes.commons.config;

import com.xw.taes.commons.vto.ReturnResult;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import com.alibaba.fastjson.JSONObject;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

/**
 * @author adv
 * @date 2021/1/25 9:47
 */
@Aspect
@Component
@Slf4j
public class LogAspect {

    @Pointcut("execution(public * com.xw.taes.*.controller..*.*(..))")
    public void controllerMethod(){
    }

    @Before(value = "controllerMethod()")
    public void logBefore(JoinPoint joinPoint){
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        assert requestAttributes != null;
        HttpServletRequest request = requestAttributes.getRequest();

        StringBuilder requestLog = new StringBuilder();
        Signature signature = joinPoint.getSignature();
        if (((MethodSignature) signature).getMethod().getAnnotation(ApiOperation.class) != null){
            requestLog.append(((MethodSignature) signature).getMethod().getAnnotation(ApiOperation.class).value()).append("\t")
                    .append("请求信息：").append("URL = {").append(request.getRequestURI()).append("},\t")
                    .append("请求方式 = {").append(request.getMethod()).append("},\t")
                    .append("请求IP = {").append(request.getRemoteAddr()).append("},\t")
                    .append("类方法 = {").append(signature.getDeclaringTypeName()).append(".")
                    .append(signature.getName()).append("},\t");
            // 处理请求参数
            if (((MethodSignature) signature).getParameterNames() != null){
                String[] paramNames = ((MethodSignature) signature).getParameterNames();
                Object[] paramValues = joinPoint.getArgs();
                int paramLength = null == paramNames ? 0 : paramNames.length;
                if (paramLength == 0) {
                    requestLog.append("请求参数 = {} ");
                } else {
                    requestLog.append("请求参数 = [");
                    for (int i = 0; i < paramLength - 1; i++) {
                        requestLog.append(paramNames[i]).append("=").append(JSONObject.toJSONString(paramValues[i])).append(",");
                    }
                    requestLog.append(paramNames[paramLength - 1]).append("=").append(JSONObject.toJSONString(paramValues[paramLength - 1])).append("]");
                }
            }
        }else {
            requestLog.append("请求参数为空");
        }


        log.info(requestLog.toString());
    }

    @AfterReturning(returning = "resultVO", pointcut = "controllerMethod()")
    public void logResultVOInfo(ReturnResult resultVO){
        log.info("请求结果：" + resultVO.getCode() + "\t" + resultVO.getMessage());
    }

}
