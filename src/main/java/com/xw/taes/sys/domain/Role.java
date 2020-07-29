package com.xw.taes.sys.domain;

import com.xw.taes.commons.base.DataEntity;
import lombok.Data;

import java.util.Set;

/**
 * shiro 权限 <br> 系统角色
 *
 * @author adx
 * @date 2020/7/22 14:57
 */
@Data
public class Role extends DataEntity<Role> {
    private int id;
    private String roleName;
    private String description;

    private String permissionId;
    private String[] perId;
    private String permissionName;
    private String[] perName;

    //private String roleFlage;
    /**
     * 角色所拥有的权限列表
     */
    private Set<Permission> permissions;
}
