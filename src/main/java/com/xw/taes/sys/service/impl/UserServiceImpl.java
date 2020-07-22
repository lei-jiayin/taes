package com.xw.taes.sys.service.impl;

import com.xw.taes.commons.base.CrudService;
import com.xw.taes.sys.dao.UserDao;
import com.xw.taes.sys.domain.User;
import com.xw.taes.sys.service.UserService;
import org.springframework.stereotype.Service;

/**
 * @author xw
 * @date 2020/7/22 23:20
 */
@Service
public class UserServiceImpl extends CrudService<UserDao, User> implements UserService {
}
