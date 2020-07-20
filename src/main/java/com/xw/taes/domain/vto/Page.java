package com.xw.taes.domain.vto;

import lombok.Data;
import lombok.ToString;

/**
 * 分页实体
 *
 * @author adx
 * @date 2020/7/17 11:04
 */
@Data
@ToString
public class Page {
    /**
     * 页码
     */
    private int page;
    /**
     * 每页显示数
     */
    private int rows;
    private int first = rows * (page - 1);
    /**
     * 默认排序字段
     */
    private String sort;
    /**
     * 升序降序（ASC/DESC）
     */
    private String order;
}
