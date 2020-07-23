package com.xw.taes.sys.service;

import com.xw.taes.commons.base.CrudService;
import com.xw.taes.sys.dao.RoleDao;
import com.xw.taes.sys.domain.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 角色服务
 *
 * @author adx
 * @date 2020/7/23 14:13
 */
@Service
public class RoleService extends CrudService<RoleDao, Role> {
    @Autowired
    private RoleDao roleDao;

    public List<Role> findAll() {
        return roleDao.findAllList();
    }
}
