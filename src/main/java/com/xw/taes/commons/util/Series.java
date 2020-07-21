package com.xw.taes.commons.util;

import java.util.List;

public class Series {
	private int id;
	private String name;
	private String type;
	private List<Integer> data;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public List<Integer> getData() {
		return data;
	}
	public void setData(List<Integer> data) {
		this.data = data;
	}
	public Series() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Series(int id, String name, String type, List<Integer> data) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.data = data;
	}
	@Override
	public String toString() {
		return "Series [id=" + id + ", name=" + name + ", type=" + type + ", data=" + data + "]";
	}
	
	
}
