package com.xw.taes.domain;

import java.util.HashSet;
import java.util.Set;

/**
 * 试卷题库
 * @author Administrator
 *
 */
public class QuestionBank {
	// 主键
	private Integer QBankId;
	// 题目编号
	private String qBankNo;
	// 试题
	private String content;
	// 分值
	private Integer fullScore;
	// 类型
	private String type;
	// 学科
	//private String subject;
	// 所属试卷
	private Paper paper;
	
	//一个题目有多个分数
	private Set<ScoreDetails> scoreDetails = new HashSet<>();
	
	public Paper getPaper() {
		return paper;
	}
	public void setPaper(Paper paper) {
		this.paper = paper;
	}
	
	public String getqBankNo() {
		return qBankNo;
	}
	public void setqBankNo(String qBankNo) {
		this.qBankNo = qBankNo;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public QuestionBank() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Set<ScoreDetails> getScoreDetails() {
		return scoreDetails;
	}
	public void setScoreDetails(Set<ScoreDetails> scoreDetails) {
		this.scoreDetails = scoreDetails;
	}
	public Integer getFullScore() {
		return fullScore;
	}
	public void setFullScore(Integer fullScore) {
		this.fullScore = fullScore;
	}
	public Integer getQBankId() {
		return QBankId;
	}
	public void setQBankId(Integer qBankId) {
		QBankId = qBankId;
	}
	
	
	
	
}
