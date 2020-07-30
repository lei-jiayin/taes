package com.xw.taes.sys.service;

import com.xw.taes.commons.base.CrudService;
import com.xw.taes.sys.dao.UserDao;
import com.xw.taes.sys.domain.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = false)
public class UserService extends CrudService<UserDao, User>{

    @Override
    public int update(User user){
        int u = dao.update(user);
        dao.deleteRoleByUserId(user.getId());
        dao.insertRole(user.getId(),user.getRoleId());
        /*User user1 = dao.get(user);
        if (user1.getRoleId() != null && user1.getRoleId() > 0){
            dao.updateRole(user.getId(), user.getRoleId());
        }else {
            dao.insertRole(user.getId(),user.getRoleId());
        }*/
        return u;
    }

    @Override
    public int insert(User user){
        int i = dao.insert(user);
        dao.insertRole(user.getId(),user.getRoleId());
        return i;
    }
}
