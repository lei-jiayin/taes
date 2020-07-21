package com.xw.taes.commons.util;

public class Param {
	//��������
	private Integer studentNum;
	//����ֵ
	private Integer fullScore;
	//��߷�
	private Integer maxScore;
	//��ͷ�
	private Integer minScore;
	//ƽ����
	private Double aveScore;
	//����
	private Double variance;
	//�Ѷ�ϵ��
	private Double dod;
	public Integer getFullScore() {
		return fullScore;
	}
	public void setFullScore(Integer fullScore) {
		this.fullScore = fullScore;
	}
	public Integer getMaxScore() {
		return maxScore;
	}
	public void setMaxScore(Integer maxScore) {
		this.maxScore = maxScore;
	}
	public Integer getMinScore() {
		return minScore;
	}
	public void setMinScore(Integer minScore) {
		this.minScore = minScore;
	}
	public Double getAveScore() {
		return aveScore;
	}
	public void setAveScore(Double aveScore) {
		this.aveScore = aveScore;
	}
	public Double getVariance() {
		return variance;
	}
	public void setVariance(Double variance) {
		this.variance = variance;
	}
	public Double getDod() {
		return dod;
	}
	public void setDod(Double dod) {
		this.dod = dod;
	}
	public Param() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public String toString() {
		return "Param [studentNum=" + studentNum + ", fullScore=" + fullScore + ", maxScore=" + maxScore + ", minScore="
				+ minScore + ", aveScore=" + aveScore + ", variance=" + variance + ", dod=" + dod + "]";
	}
	public Integer getStudentNum() {
		return studentNum;
	}
	public void setStudentNum(Integer studentNum) {
		this.studentNum = studentNum;
	}
	
	
}
