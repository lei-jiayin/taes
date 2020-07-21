package com.xw.taes.warden.domain;

import java.util.HashSet;
import java.util.Set;

/**
 * �Ծ���Ϣ��
 * @author ��ΰ
 *
 */
public class Paper {
	//�Ծ�id'
	private Integer paperId;
	//�Ծ����
	private String paperNo;
	//�Ծ�����
	private String paperName;
	//�����γ�
	private Courses courses;
	//�Ծ��ܷ�
	private Integer totalScore;
	//һ���Ծ�����Ŀ
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
