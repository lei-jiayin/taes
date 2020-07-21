package com.xw.taes.warden.domain;

import java.util.HashSet;
import java.util.Set;

/**
 * �γ���Ϣ
 * 
 * @author ��ΰ
 *
 */
public class Courses {
	//����
	private Integer coursesId;
	// �γ̴���
	private String coursesNo;
	// �γ�����
	private String coursesName;
	// �γ�ѧ��
	private double credits;
	
	// һ�ſγ̶����Ծ�
	private Set<Paper> papers = new HashSet<>();
	
	//һ��ѧ������ѡ����ſγ� һ���γ̿����ж��ѧ��
	//private Set<Score> scores = new HashSet<>();
	//һ���γ̿����ɶ����ʦ�̣�һ�����ҽ��ڶ��ſγ�
	private Set<TeacherCourses> teacherCourses = new HashSet<>();
	
	public Integer getCoursesId() {
		return coursesId;
	}
	public void setCoursesId(Integer coursesId) {
		this.coursesId = coursesId;
	}
	public String getCoursesNo() {
		return coursesNo;
	}
	public void setCoursesNo(String coursesNo) {
		this.coursesNo = coursesNo;
	}
	public String getCoursesName() {
		return coursesName;
	}
	public void setCoursesName(String coursesName) {
		this.coursesName = coursesName;
	}
	
	public double getCredits() {
		return credits;
	}
	public void setCredits(double credits) {
		this.credits = credits;
	}
	public Set<TeacherCourses> getTeacherCourses() {
		return teacherCourses;
	}
	public void setTeacherCourses(Set<TeacherCourses> teacherCourses) {
		this.teacherCourses = teacherCourses;
	}
/*	public Set<Score> getScores() {
		return scores;
	}
	public void setScores(Set<Score> scores) {
		this.scores = scores;
	}*/
	public Set<Paper> getPapers() {
		return papers;
	}
	public void setPapers(Set<Paper> papers) {
		this.papers = papers;
	}
	
	
	
}
