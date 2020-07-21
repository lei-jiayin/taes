package com.xw.taes.warden.domain;

import java.util.HashSet;
import java.util.Set;

/**
 * ������Ϣ
 * @author Administrator
 *
 */
public class Score{
	//����
	private Integer scId;
	//ѧ��
	private String studentNo;
	//�γ�
	private String coursesName;
	//private Student student;
	//��Ŀ
	//private String topic;
	//�Ծ�
	private String paperName;
	//����
	private Integer ascore;
	//����ʱ��
	private String exTime;
	//��������
	private String exName;
	//��ϸ����
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
