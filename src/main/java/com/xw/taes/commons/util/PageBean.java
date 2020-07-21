package com.xw.taes.commons.util;

//import com.mysql.jdbc.exceptions.MySQLNonTransientConnectionException;

/**
 * ��ҳ��װbean
 * @author ��ΰ
 *
 */
public class PageBean {
	//��ǰҳ
	private int page = 0;
	//��ǰ��¼��ʾ����
	private int rows = 0;
	//�����ֶ�
	private String sort;
	//����˳��
	private String order;
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public int getRows() {
		return rows;
	}
	public void setRows(int rows) {
		this.rows = rows;
	}
	public String getSort() {
		return sort;
	}
	public void setSort(String sort) {
		this.sort = sort;
	}
	public String getOrder() {
		return order;
	}
	public void setOrder(String order) {
		this.order = order;
	}
	public PageBean() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
