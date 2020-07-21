package com.xw.taes.warden.domain;
/**
 * ��ʦ����γ̱�
 * @author Administrator
 *
 */
public class TeacherCourses {
	private Integer Id;
	//�����ʦ
	private Teacher teacher;
	//����γ�
	private Courses courses;
	private String semester;
	public Teacher getTeacher() {
		return teacher;
	}
	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}
	public Courses getCourses() {
		return courses;
	}
	public void setCourses(Courses courses) {
		this.courses = courses;
	}
	public String getSemester() {
		return semester;
	}
	public void setSemester(String semester) {
		this.semester = semester;
	}
	public Integer getId() {
		return Id;
	}
	public void setId(Integer id) {
		Id = id;
	}
	
}
