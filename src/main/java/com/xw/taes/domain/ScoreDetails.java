package com.xw.taes.domain;

public class ScoreDetails {
	//主键 id
	private Integer sdId;
	//分数id
	private Score score;
	//题目 题目由试卷提供
	private QuestionBank questionBank;
	//得分
	private Integer sdscore;
	//满分值
	//private Integer fullScore;
	//类型
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
