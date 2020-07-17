package com.xw.taes.domain;

import lombok.Data;
import lombok.ToString;

/**
 * 管理员信息
 * 
 * @author 熊伟
 *
 */
@Data
@ToString
public class Warden extends DataEntity<Warden> {
	// 管理员id
	private Integer wId;
	// 管理员编号
	private String wNo;
	// 姓名
	private String wName;
	// 管理员联系电话
	private String tel;
	//管理员隶属院系
	//private String collegeName;
	//管理员等级
	//private String level;
	// 管理员登录密码
	private String wPassword;
}
