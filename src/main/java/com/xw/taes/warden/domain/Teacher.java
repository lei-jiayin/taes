package com.xw.taes.warden.domain;

import java.util.HashSet;
import java.util.Set;

/**
 * ��ʦ��Ϣ
 * 
 * @author ��ΰ
 *
 */
public class Teacher {
	//����
	private Integer teacherId;
	// ��ʦ���
	private String teacherNo;
	// ��ʦ����
	private String teacherName;
	// ����רҵ
	private String profession3;
	// ѧԺ
	private String college3;
	
	//��¼����
	private String password;
	
	//һ����ʦ���ſγ�
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
