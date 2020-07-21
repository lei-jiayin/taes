package com.xw.taes.commons.util;

public class StudentReport {
	private Integer studentId;
	private String studentNo;
	private String coursesName;
	private String paperName;
	private Integer score;
	public Integer getStudentId() {
		return studentId;
	}
	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
	}
	public String getStudentNo() {
		return studentNo;
	}
	public void setStudentNo(String studentNo) {
		this.studentNo = studentNo;
	}
	public String getCoursesName() {
		return coursesName;
	}
	public void setCoursesName(String coursesName) {
		this.coursesName = coursesName;
	}
	public String getPaperName() {
		return paperName;
	}
	public void setPaperName(String paperName) {
		this.paperName = paperName;
	}
	
	public Integer getScore() {
		return score;
	}
	public void setScore(Integer score) {
		this.score = score;
	}
	public StudentReport() {
		super();
		// TODO Auto-generated constructor stub
	}
	public StudentReport(Integer studentId, String studentNo, String coursesName, String paperName, Integer score) {
		super();
		this.studentId = studentId;
		this.studentNo = studentNo;
		this.coursesName = coursesName;
		this.paperName = paperName;
		this.score = score;
	}
	
	
}
