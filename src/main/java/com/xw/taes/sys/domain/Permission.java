package com.xw.taes.sys.domain;

import lombok.Data;

/**
 * shiro权限
 * 权限实体
 * @author adx
 * @date 2020/7/22 15:06
 */
@Data
public class Permission {
    private int id;
    private String permissionName;
    private String description;
}
