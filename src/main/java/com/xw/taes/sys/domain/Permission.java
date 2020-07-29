package com.xw.taes.sys.domain;

import com.xw.taes.commons.base.DataEntity;
import lombok.Data;

/**
 * shiro权限
 * 权限实体
 * @author adx
 * @date 2020/7/22 15:06
 */
@Data
public class Permission extends DataEntity<Permission> {
    private int id;
    private String permissionName;
    private String permissionCode;
    private String description;
}
