package com.xw.taes.sys.domain;

import lombok.Data;

import java.util.Set;

/**
 * shiro 权限 <br> 系统角色
 *
 * @author adx
 * @date 2020/7/22 14:57
 */
@Data
public class Role {
    private int id;
    private String roleName;
    private String description;

    //private String roleFlage;
    /**
     * 角色所拥有的权限列表
     */
    private Set<Permission> permissions;
}
