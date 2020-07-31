package com.xw.taes.warden.service;

import com.xw.taes.commons.base.CrudService;
import com.xw.taes.warden.dao.StudentManageDao;
import com.xw.taes.warden.domain.Student;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 学生账号服务类
 *
 * @author adx
 * @date 2020/7/31 15:31
 */
@Service
@Transactional(readOnly = false)
public class StudentManageService extends CrudService<StudentManageDao, Student> {
}
