package com.xw.taes.warden.domain;

import com.xw.taes.commons.vto.Page;
import lombok.Data;
import lombok.ToString;

/**
 * ����Ա��Ϣ
 * @author ��ΰ
 * @date 2020-07-20
 */
@Data
@ToString
public class Warden extends Page {
	private Integer wid;
	private String wno;
	private String wname;
	private String tel;
	//private String collegeName;
	//private String level;
	private String wpassword;
}
