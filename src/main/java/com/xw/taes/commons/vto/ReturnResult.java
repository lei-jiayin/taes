package com.xw.taes.commons.vto;

import lombok.Data;

import java.util.List;
import java.util.Map;

/**
 * 返回结果集
 *
 * @author adx
 * @date 2020/7/17 11:01
 */
@Data
public class ReturnResult<T> {
    private String code;
    private String message;
    private Object data;
    private Map<String, Object> map;
    private List<T> rows;
    private int total;
    //private int page;

    public ReturnResult() {
    }

    public ReturnResult(String code) {
        this.code = code;
    }

    public ReturnResult(String code, Object data) {
        this.code = code;
        this.data = data;
    }

    public ReturnResult(String code, String message) {
        this.code = code;
        this.message = message;
    }

    public ReturnResult(String code, String message, Object data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public ReturnResult(String code, String message, Map<String, Object> map) {
        this.code = code;
        this.message = message;
        this.data = data;
        this.map = map;
    }
}
