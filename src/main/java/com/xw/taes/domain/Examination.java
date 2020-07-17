package com.xw.taes.domain;

/**
 * 考试信息表
 * 
 * @author 熊伟
 *
 */
public class Examination {
	// 考试id
	private Integer exId;
	// 考试代号
	private String exNo;
	// 考试名称
	private String exName;
	// 考试时间
	private String exTime;
	// 考试专业
	private String profession2;
	// 考试年级加班级
	private String grade;
	// 考试地点
	private String address;
	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Integer getExId() {
		return exId;
	}
	public void setExId(Integer exId) {
		this.exId = exId;
	}
	public String getExNo() {
		return exNo;
	}
	public void setExNo(String exNo) {
		this.exNo = exNo;
	}
	public String getExName() {
		return exName;
	}
	public void setExName(String exName) {
		this.exName = exName;
	}
	public String getExTime() {
		return exTime;
	}
	public void setExTime(String exTime) {
		this.exTime = exTime;
	}
	
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public Examination() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getProfession2() {
		return profession2;
	}
	public void setProfession2(String profession2) {
		this.profession2 = profession2;
	}
	
	

}
