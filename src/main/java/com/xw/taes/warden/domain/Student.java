package com.xw.taes.warden.domain;

import com.xw.taes.commons.base.DataEntity;
import lombok.Data;

/**
 * 学生账号类
 * 
 * @author adx
 *
 */
@Data
public class Student extends DataEntity<Student> {
	private Integer studentId;
	private String studentNo;
	private String studentName;
	private String professionalClass;
	private String profession;
	private String college;
	private String password;

	/**
	 * 登录用户关联
	 */
	private Integer userId;
}
