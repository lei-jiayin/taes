package com.xw.taes.domain;

import java.util.HashSet;
import java.util.Set;

/**
 * 教师信息
 * 
 * @author 熊伟
 *
 */
public class Teacher {
	//主键
	private Integer teacherId;
	// 教师编号
	private String teacherNo;
	// 教师姓名
	private String teacherName;
	// 所属专业
	private String profession3;
	// 学院
	private String college3;
	
	//登录密码
	private String password;
	
	//一个教师多门课程
	private Set<TeacherCourses> teacherCourses = new HashSet<>();
	
	public Integer getTeacherId() {
		return teacherId;
	}

	public void setTeacherId(Integer teacherId) {
		this.teacherId = teacherId;
	}

	public String getTeacherNo() {
		return teacherNo;
	}

	public void setTeacherNo(String teacherNo) {
		this.teacherNo = teacherNo;
	}

	public String getTeacherName() {
		return teacherName;
	}

	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}

	


	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Teacher() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getProfession3() {
		return profession3;
	}

	public void setProfession3(String profession3) {
		this.profession3 = profession3;
	}

	public String getCollege3() {
		return college3;
	}

	public void setCollege3(String college3) {
		this.college3 = college3;
	}

	public Set<TeacherCourses> getTeacherCourses() {
		return teacherCourses;
	}

	public void setTeacherCourses(Set<TeacherCourses> teacherCourses) {
		this.teacherCourses = teacherCourses;
	}
	
	

	
}
