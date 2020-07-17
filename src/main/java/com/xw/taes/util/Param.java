package com.xw.taes.util;

public class Param {
	//考试人数
	private Integer studentNum;
	//满分值
	private Integer fullScore;
	//最高分
	private Integer maxScore;
	//最低分
	private Integer minScore;
	//平均分
	private Double aveScore;
	//方差
	private Double variance;
	//难度系数
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
