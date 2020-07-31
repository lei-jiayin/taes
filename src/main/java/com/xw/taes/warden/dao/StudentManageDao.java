package com.xw.taes.warden.dao;

import com.xw.taes.commons.base.CrudDao;
import com.xw.taes.warden.domain.Student;
import org.springframework.stereotype.Repository;

/**
 * @author adx
 * @date 2020/7/31 15:32
 */
@Repository
public interface StudentManageDao extends CrudDao<Student> {
}
