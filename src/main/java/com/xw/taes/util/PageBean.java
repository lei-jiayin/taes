package com.xw.taes.util;

//import com.mysql.jdbc.exceptions.MySQLNonTransientConnectionException;

/**
 * 分页封装bean
 * @author 熊伟
 *
 */
public class PageBean {
	//当前页
	private int page = 0;
	//当前记录显示数量
	private int rows = 0;
	//排序字段
	private String sort;
	//排序顺序
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
