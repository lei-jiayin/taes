package com.xw.taes.sys.dao;

import com.xw.taes.sys.domain.User;

/**
 * 系统用户数据层
 *
 * @author adx
 * @date 2020/7/22 15:41
 */
public interface UserDao {
    /**
     * 查询用户基本信息
     * @param userName 用户名
     * @return user
     */
    User selectUserByUserName(String userName);
}
