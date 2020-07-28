package com.xw.taes.shiro.config;

import com.xw.taes.commons.exception.UserResponseEnum;
import com.xw.taes.commons.vto.ReturnResult;
import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.authc.AuthenticationFilter;
import org.apache.shiro.web.filter.authc.FormAuthenticationFilter;
import org.springframework.stereotype.Component;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

/**
 * ajax验证过滤
 *
 * @author adx
 * @date 2020/7/24 10:57
 */
@Slf4j
public class RoleAuthorizationFilter extends FormAuthenticationFilter {
    /**
     * 当访问拒绝时
     * @param request
     * @param response
     * @return
     * @throws Exception
     */
    @Override
    protected boolean onAccessDenied(ServletRequest request, ServletResponse response) throws Exception {
        if(this.isLoginRequest(request, response)) {
           String username = request.getParameter("userName");
           String password = request.getParameter("password");
           //this.setUsernameParam(username);
           //this.setPasswordParam(password);
            log.debug("账号：{}，密码：{}",username, password);
            if(this.isLoginSubmission(request, response)) {
                if(log.isTraceEnabled()) {
                    log.trace("Login submission detected.  Attempting to execute login.");
                }

                return this.executeLogin(request, response);
            } else {
                if(log.isTraceEnabled()) {
                    log.trace("Login page view.");
                }

                return true;
            }
        } else {
            if(log.isTraceEnabled()) {
                log.trace("Attempting to access a path which requires authentication.  Forwarding to the Authentication url [" + this.getLoginUrl() + "]");
            }

            this.saveRequestAndRedirectToLogin(request, response);
            return false;
        }
    }

    @Override
    protected boolean onLoginSuccess(AuthenticationToken token, Subject subject, ServletRequest request, ServletResponse response) throws Exception {
        //将user对象放入session，这里你可能用不到，可以删除
        //Map<String,String> params = new HashMap<String,String>();
        //params.put("username",token.getPrincipal().toString());
        //UserDto userDto = userMapper.findUserDto(params);
        //----------以上代码你可以删除-------------------
        //((HttpServletRequest)request).getSession().setAttribute(Constant.CURRENT_USER,userDto);

        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        HttpServletResponse httpServletResponse = (HttpServletResponse) response;

        if (!"XMLHttpRequest".equalsIgnoreCase(httpServletRequest
                .getHeader("X-Requested-With"))) {// 不是ajax请求
            issueSuccessRedirect(request, response);
        }
        new ReturnResult().outMessage(response,new ReturnResult("0"));
        return false;
    }

    @Override
    protected boolean onLoginFailure(AuthenticationToken token, AuthenticationException e, ServletRequest request, ServletResponse response) {
        if (!"XMLHttpRequest".equalsIgnoreCase(((HttpServletRequest) request)
                .getHeader("X-Requested-With"))) {// 不是ajax请求
            setFailureAttribute(request, e);
            return true;
        }
        try {
            //response.setCharacterEncoding("UTF-8");
            //PrintWriter out = response.getWriter();
            String message = e.getClass().getSimpleName();
            ReturnResult returnResult;
            if ("IncorrectCredentialsException".equals(message)) {
                returnResult = new ReturnResult(UserResponseEnum.USER_ACCOUNT_ERROR);
            } else if ("UnknownAccountException".equals(message)) {
                returnResult = new ReturnResult(UserResponseEnum.USER_ACCOUNT_NOT_FOUND);
                //out.println("{\"success\":false,\"message\":\"账号不存在\"}");
            } else if ("LockedAccountException".equals(message)) {
                returnResult = new ReturnResult(UserResponseEnum.USER_ACCOUNT_LOCKED);
                //out.println("{\"success\":false,\"message\":\"账号被锁定\"}");
            } else {
                returnResult = new ReturnResult(UserResponseEnum.ERROR);
                //out.println("{\"success\":false,\"message\":\"未知错误\"}");
            }
            returnResult.outMessage(response,returnResult);
            //out.flush();
            //out.close();
        } catch (IOException e1) {
            e1.printStackTrace();
        }
        return false;
    }
}
