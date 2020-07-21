package com.xw.taes.warden.domain;

import com.xw.taes.commons.base.DataEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * 管理员实体
 * @author adx
 * @date 2020-07-20
 */
@EqualsAndHashCode(callSuper = true)
@Data
@ToString
@ApiModel
public class Warden extends DataEntity<Warden> {
	@ApiModelProperty(value = "用户id",dataType = "int")
	private Integer wid;
	@ApiModelProperty(value = "用户账号")
	private String wno;
	@ApiModelProperty(value = "用户名字")
	private String wname;
	@ApiModelProperty(value = "用户电话")
	private String tel;
	//private String collegeName;
	//private String level;
	@ApiModelProperty(value = "用户密码")
	private String wpassword;
}
