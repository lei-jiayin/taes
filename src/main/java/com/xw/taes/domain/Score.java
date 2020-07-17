package com.xw.taes.domain;

import java.util.HashSet;
import java.util.Set;

/**
 * 分数信息
 * @author Administrator
 *
 */
public class Score{
	//主键
	private Integer scId;
	//学号
	private String studentNo;
	//课程
	private String coursesName;
	//private Student student;
	//题目
	//private String topic;
	//试卷
	private String paperName;
	//分数
	private Integer ascore;
	//考试时间
	private String exTime;
	//考试名称
	private String exName;
	//详细分数
	private Set<ScoreDetails> scoreDetails = new HashSet<>();
	
	public Integer getScId() {
		return scId;
	}

	public void setScId(Integer scId) {
		this.scId = scId;
	}

	public Integer getAscore() {
		return ascore;
	}

	public void setAscore(Integer ascore) {
		this.ascore = ascore;
	}




	public Set<ScoreDetails> getScoreDetails() {
		return scoreDetails;
	}

	public void setScoreDetails(Set<ScoreDetails> scoreDetails) {
		this.scoreDetails = scoreDetails;
	}

	public Score() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public String getStudentNo() {
		return studentNo;
	}

	public void setStudentNo(String studentNo) {
		this.studentNo = studentNo;
	}

	public String getCoursesName() {
		return coursesName;
	}

	public void setCoursesName(String coursesName) {
		this.coursesName = coursesName;
	}

	public String getPaperName() {
		return paperName;
	}

	public void setPaperName(String paperName) {
		this.paperName = paperName;
	}

	public String getExTime() {
		return exTime;
	}

	public void setExTime(String exTime) {
		this.exTime = exTime;
	}

	public String getExName() {
		return exName;
	}

	public void setExName(String exName) {
		this.exName = exName;
	}

	
	
	

	
}
