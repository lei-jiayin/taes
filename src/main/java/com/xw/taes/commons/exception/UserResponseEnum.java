package com.xw.taes.commons.exception;

import lombok.Data;

/**
 * 业务异常枚举类
 *
 * @author adx
 * @date 2020/7/24 9:55
 */
public enum UserResponseEnum {

    USER_NOT_AU(3002,"用户权限不足");

    private int code;
    private String description;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    UserResponseEnum(int code, String description) {
        this.code = code;
        this.description = description;
    }}
