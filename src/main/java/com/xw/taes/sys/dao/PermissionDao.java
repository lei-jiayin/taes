package com.xw.taes.sys.dao;

import com.xw.taes.commons.base.CrudDao;
import com.xw.taes.sys.domain.Permission;
import com.xw.taes.sys.domain.Role;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Set;

/**
 * 系统权限数据层
 *
 * @author adx
 * @date 2020/7/22 15:42
 */
@Repository
public interface PermissionDao extends CrudDao<Permission> {
    /**
     * 获取角色的权限信息
     * @param role
     * @return
     */
    Set<Permission> selectPermissionByRole(Role role);
}
