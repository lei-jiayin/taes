package com.xw.taes.sys.domain;

import com.xw.taes.commons.base.DataEntity;
import lombok.Data;

@Data
public class WardenTree extends DataEntity<WardenTree> {
	private int id;
	private String text;
	private String url;
	private String state;
	private String stateName;
	private int tid;
	private String tidText;

	private String roleId;
	private String[] roId;

	private String roleName;


	public String getStateName(){
		if (this.state.equals("closed")){
			return "关闭";
		}else {
			return "开启";
		}
	}
}
