package com.xw.taes.domain;

import lombok.Data;

import java.util.List;

/**
 * 数据
 *
 * @author adx
 * @date 2020/7/17 11:06
 */
@Data
public class DataEntity<T> {
    // 接收page rows sort order
    private int page;
    private int size;
    private int rows;
    private int first = rows * (page - 1);
    private String sort;
    private String order;
    private int total;
    private List<T> list;
}
