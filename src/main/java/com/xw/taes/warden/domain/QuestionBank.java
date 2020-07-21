package com.xw.taes.warden.domain;

import java.util.HashSet;
import java.util.Set;

/**
 * �Ծ����
 * @author Administrator
 *
 */
public class QuestionBank {
	// ����
	private Integer QBankId;
	// ��Ŀ���
	private String qBankNo;
	// ����
	private String content;
	// ��ֵ
	private Integer fullScore;
	// ����
	private String type;
	// ѧ��
	//private String subject;
	// �����Ծ�
	private Paper paper;
	
	//һ����Ŀ�ж������
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
