package com.xw.taes.sys.service;

import com.xw.taes.commons.base.CrudService;
import com.xw.taes.sys.dao.PermissionDao;
import com.xw.taes.sys.domain.Permission;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 权限服务
 *
 * @author adx
 * @date 2020/7/29 15:45
 */
@Service
@Transactional(readOnly = false)
public class PermissionService extends CrudService<PermissionDao, Permission> {
    @Autowired
    private PermissionDao permissionDao;
    public List<Permission> findAll() {
        return permissionDao.findAllList();
    }
}
