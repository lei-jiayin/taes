package com.xw.taes.sys.service;

import com.xw.taes.sys.domain.User;

/**
 * 统一登录处理
 *
 * @author adx
 * @date 2020/7/22 15:27
 */
public interface LoginService {
    /**
     * 通过用户名获取用户信息包括角色及权限
     * @param name
     * @return
     */
    User getUserByName(String name);
}
