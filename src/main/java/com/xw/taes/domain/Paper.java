package com.xw.taes.domain;

import java.util.HashSet;
import java.util.Set;

/**
 * 试卷信息表
 * @author 熊伟
 *
 */
public class Paper {
	//试卷id'
	private Integer paperId;
	//试卷代号
	private String paperNo;
	//试卷名称
	private String paperName;
	//所属课程
	private Courses courses;
	//试卷总分
	private Integer totalScore;
	//一张试卷多个题目
	private Set<QuestionBank> questionBanks = new HashSet<>();
	
	public Integer getPaperId() {
		return paperId;
	}
	public void setPaperId(Integer paperId) {
		this.paperId = paperId;
	}
	public String getPaperNo() {
		return paperNo;
	}
	public void setPaperNo(String paperNo) {
		this.paperNo = paperNo;
	}
	public String getPaperName() {
		return paperName;
	}
	public void setPaperName(String paperName) {
		this.paperName = paperName;
	}
	public Paper() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Set<QuestionBank> getQuestionBanks() {
		return questionBanks;
	}
	public void setQuestionBanks(Set<QuestionBank> questionBanks) {
		this.questionBanks = questionBanks;
	}
	public Courses getCourses() {
		return courses;
	}
	public void setCourses(Courses courses) {
		this.courses = courses;
	}
	public Integer getTotalScore() {
		return totalScore;
	}
	public void setTotalScore(Integer totalScore) {
		this.totalScore = totalScore;
	}
	
	
	
	

}
