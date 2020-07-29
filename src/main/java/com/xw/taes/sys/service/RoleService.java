package com.xw.taes.sys.service;

import com.xw.taes.commons.base.CrudService;
import com.xw.taes.sys.dao.RoleDao;
import com.xw.taes.sys.domain.Role;
import org.apache.commons.lang.StringUtils;
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

    @Override
    public int update(Role role){
        insertPermission(role);
        return super.update(role);
    }

    @Override
    public int insert(Role role){
        int i = super.insert(role);
        insertPermission(role);
        return i;
    }

    private void insertPermission(Role role){
        if (role.getPermissionId() != null){
            roleDao.deletePermissionByRoleId(role.getId());
            String permissionId = role.getPermissionId();
            String[] pids = permissionId.split(",");
            for (String pid:
                    pids) {
                roleDao.insertRolePermission(role.getId(), Integer.valueOf(pid));
            }
        }
    }

    @Override
    public Role get(Role role){
        Role r1 = super.get(role);
        if (StringUtils.isNotBlank(r1.getPermissionId())){
            r1.setPerId(r1.getPermissionId().split(","));
            r1.setPerName(r1.getPermissionName().split(","));
        }
        return r1;
    }
}
