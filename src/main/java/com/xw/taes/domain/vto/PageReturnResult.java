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
public class PageReturnResult extends ReturnResult {
    // 接收page rows sort order
    private int page;
    private int size;
    private int rows;
    private String sort;
    private String order;
    private int total;

}
