package com.xw.taes.commons.exception;

import lombok.Data;

/**
 * 业务异常枚举类
 *
 * @author adx
 * @date 2020/7/24 9:55
 */
public enum UserResponseEnum {

    USER_ACCOUNT_ERROR("3001","账号密码错误！"),
    USER_NOT_AU("3002","用户权限不足"),
    /**
     * 账号不存在
     */
    USER_ACCOUNT_NOT_FOUND("3003","账号不存在"),
    USER_ACCOUNT_LOCKED("3004","账号被锁定"),
    ERROR("500","系统错误"),

    SUCCESS("1","操作成功"),
    FAIL("0","操作失败")
    ;

    private String code;
    private String description;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    UserResponseEnum(String code, String description) {
        this.code = code;
        this.description = description;
    }}
