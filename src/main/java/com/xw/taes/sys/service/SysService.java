package com.xw.taes.sys.service;

import com.xw.taes.commons.util.WardenTree;

import java.util.List;

/**
 * 系统服务类
 *
 * @author adx
 * @date 2020/7/21 14:18
 */
public interface SysService {
    List<WardenTree> getNav(String id);
}
