package com.xw.taes.sys.service.impl;

import com.xw.taes.sys.dao.LoginDao;
import com.xw.taes.sys.dao.PermissionDao;
import com.xw.taes.sys.dao.RoleDao;
import com.xw.taes.sys.dao.UserDao;
import com.xw.taes.sys.domain.Permission;
import com.xw.taes.sys.domain.Role;
import com.xw.taes.sys.domain.User;
import com.xw.taes.sys.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

/**
 * 登录处理实现
 *
 * @author adx
 * @date 2020/7/22 15:28
 */
@Service
public class LoginServiceImpl implements LoginService {
    @Autowired
    private LoginDao loginDao;
    @Autowired
    private UserDao userDao;
    @Autowired
    private RoleDao roleDao;
    @Autowired
    private PermissionDao permissionDao;

    @Override
    public User getUserByName(String name) {
        // 查询用户登录信息
        User user = userDao.selectUserByUserName(name);
        Set<Role> roles = roleDao.selectRolesByUser(user);
        for (Role role : roles){
            Set<Permission> permissions = permissionDao.selectPermissionByRole(role);
            role.setPermissions(permissions);
        }
        user.setRoles(roles);
        return user;
    }
}
