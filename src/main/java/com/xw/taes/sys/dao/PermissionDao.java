package com.xw.taes.sys.dao;

import com.xw.taes.sys.domain.Permission;
import com.xw.taes.sys.domain.Role;

import java.util.Set;

/**
 * 系统权限数据层
 *
 * @author adx
 * @date 2020/7/22 15:42
 */
public interface PermissionDao {
    /**
     * 获取角色的权限信息
     * @param role
     * @return
     */
    Set<Permission> selectPermissionByRole(Role role);
}
