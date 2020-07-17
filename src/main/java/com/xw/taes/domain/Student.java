package com.xw.taes.domain;

/**
 * 学生表
 * 
 * @author 熊伟
 *
 */
public class Student{
	// 主键
	private Integer studentId;
	// 学号
	private String studentNo;
	// 学生姓名
	private String studentName;
	// 班级
	private String professionalClass;
	// 专业
	private String profession;
	// 学院
	private String college;
	//密码
	private String password;
	
	//一个学生可以选择多门课程 一个课程可以有多个学生
	//private Set<Score> scores = new HashSet<>();
	
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
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public String getProfessionalClass() {
		return professionalClass;
	}
	public void setProfessionalClass(String professionalClass) {
		this.professionalClass = professionalClass;
	}
	public String getProfession() {
		return profession;
	}
	public void setProfession(String profession) {
		this.profession = profession;
	}
	public String getCollege() {
		return college;
	}
	public void setCollege(String college) {
		this.college = college;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	/*public Set<Score> getScores() {
		return scores;
	}
	public void setScores(Set<Score> scores) {
		this.scores = scores;
	}*/
	
}
