package com.xw.taes.sys.dao;

import com.xw.taes.commons.base.CrudDao;
import com.xw.taes.sys.domain.Role;
import com.xw.taes.sys.domain.User;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Set;

/**
 * 系统角色数据层
 *
 * @author adx
 * @date 2020/7/22 15:42
 */
@Repository
public interface RoleDao extends CrudDao<Role> {
    /**
     * 获取该用户的角色
     * @param user
     * @return
     */
    Set<Role> selectRolesByUser(User user);
}
