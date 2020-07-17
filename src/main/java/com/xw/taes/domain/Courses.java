package com.xw.taes.domain;

import java.util.HashSet;
import java.util.Set;

/**
 * 课程信息
 * 
 * @author 熊伟
 *
 */
public class Courses extends DataEntity<Courses>{
	//主键
	private Integer coursesId;
	// 课程代号
	private String coursesNo;
	// 课程名称
	private String coursesName;
	// 课程学分
	private double credits;
	
	// 一门课程多张试卷
	private Set<Paper> papers = new HashSet<>();
	
	//一个学生可以选择多门课程 一个课程可以有多个学生
	//private Set<Score> scores = new HashSet<>();
	//一个课程可以由多个老师教，一个教室教授多门课程
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
