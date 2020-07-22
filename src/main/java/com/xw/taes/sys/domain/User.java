package com.xw.taes.sys.domain;

import com.xw.taes.commons.base.DataEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.util.Set;

/**
 * 系统用户
 *  shiro 权限
 * @author adx
 * @date 2020/7/21 17:33
 */
@EqualsAndHashCode(callSuper = true)
@Data
@ToString
public class User extends DataEntity<User> {
    private int id;
    private String userName;
    private String password;
    private String type;
    /**
     * 存放用户角色信息
     */
    private Set<Role> roles;
}
