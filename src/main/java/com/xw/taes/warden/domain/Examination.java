package com.xw.taes.warden.domain;

/**
 * ������Ϣ��
 * 
 * @author ��ΰ
 *
 */
public class Examination {
	// ����id
	private Integer exId;
	// ���Դ���
	private String exNo;
	// ��������
	private String exName;
	// ����ʱ��
	private String exTime;
	// ����רҵ
	private String profession2;
	// �����꼶�Ӱ༶
	private String grade;
	// ���Եص�
	private String address;
	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Integer getExId() {
		return exId;
	}
	public void setExId(Integer exId) {
		this.exId = exId;
	}
	public String getExNo() {
		return exNo;
	}
	public void setExNo(String exNo) {
		this.exNo = exNo;
	}
	public String getExName() {
		return exName;
	}
	public void setExName(String exName) {
		this.exName = exName;
	}
	public String getExTime() {
		return exTime;
	}
	public void setExTime(String exTime) {
		this.exTime = exTime;
	}
	
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public Examination() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getProfession2() {
		return profession2;
	}
	public void setProfession2(String profession2) {
		this.profession2 = profession2;
	}
	
	

}
