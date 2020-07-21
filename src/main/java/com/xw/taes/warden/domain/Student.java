package com.xw.taes.warden.domain;

/**
 * ѧ����
 * 
 * @author ��ΰ
 *
 */
public class Student{
	// ����
	private Integer studentId;
	// ѧ��
	private String studentNo;
	// ѧ������
	private String studentName;
	// �༶
	private String professionalClass;
	// רҵ
	private String profession;
	// ѧԺ
	private String college;
	//����
	private String password;
	
	//һ��ѧ������ѡ����ſγ� һ���γ̿����ж��ѧ��
	//private Set<Score> scores = new HashSet<>();
	
	public Integer getStudentId() {
		return studentId;
	}
	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
	}
	public String getStudentNo() {
		return studentNo;
	}
	public void setStudentNo(String studentNo) {
		this.studentNo = studentNo;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public String getProfessionalClass() {
		return professionalClass;
	}
	public void setProfessionalClass(String professionalClass) {
		this.professionalClass = professionalClass;
	}
	public String getProfession() {
		return profession;
	}
	public void setProfession(String profession) {
		this.profession = profession;
	}
	public String getCollege() {
		return college;
	}
	public void setCollege(String college) {
		this.college = college;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	/*public Set<Score> getScores() {
		return scores;
	}
	public void setScores(Set<Score> scores) {
		this.scores = scores;
	}*/
	
}
