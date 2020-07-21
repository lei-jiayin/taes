package com.xw.taes.warden.domain;

public class ScoreDetails {
	//���� id
	private Integer sdId;
	//����id
	private Score score;
	//��Ŀ ��Ŀ���Ծ��ṩ
	private QuestionBank questionBank;
	//�÷�
	private Integer sdscore;
	//����ֵ
	//private Integer fullScore;
	//����
	//private String topicType;
	public Integer getSdId() {
		return sdId;
	}
	public void setSdId(Integer sdId) {
		this.sdId = sdId;
	}
	public Score getScore() {
		return score;
	}
	public void setScore(Score score) {
		this.score = score;
	}
	/*public String getTopic() {
		return topic;
	}
	public void setTopic(String topic) {
		this.topic = topic;
	}*/
	public Integer getSdscore() {
		return sdscore;
	}
	public void setSdscore(Integer sdscore) {
		this.sdscore = sdscore;
	}
	/*public String getTopicType() {
		return topicType;
	}
	public void setTopicType(String topicType) {
		this.topicType = topicType;
	}*/
	public ScoreDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public QuestionBank getQuestionBank() {
		return questionBank;
	}
	public void setQuestionBank(QuestionBank questionBank) {
		this.questionBank = questionBank;
	}


	
	
	
}
