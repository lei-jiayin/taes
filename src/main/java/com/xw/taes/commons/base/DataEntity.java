package com.xw.taes.commons.base;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.xw.taes.commons.vto.PageVto;
import com.xw.taes.sys.domain.User;
import lombok.Data;

import java.util.Date;

/**
 * 数据支持类
 * @author adx
 * @date 2020/7/21 17:30
 */
@Data
public abstract class DataEntity<T> {
    protected String remarks;	// 备注
    protected User createBy;	// 创建者
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    protected Date createDate;	// 创建日期
    protected User updateBy;	// 更新者
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    protected Date updateDate;	// 更新日期
    protected String delFlag; 	// 删除标记（0：正常；1：删除；）

    protected PageVto pageVto;

    public DataEntity() {
        super();
        this.delFlag = "0";
    }
}
