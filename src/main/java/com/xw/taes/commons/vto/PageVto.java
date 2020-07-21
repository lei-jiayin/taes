package com.xw.taes.commons.vto;

import lombok.Data;
import lombok.ToString;

import java.util.List;

/**
 * 分页实体
 *
 * @author adx
 * @date 2020/7/17 11:04
 */
@Data
@ToString
public class PageVto {
    /**
     * 页码
     */
    private int page;
    /**
     * 总数
     */
    private int total;
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

    //private List<T> rows;
}
