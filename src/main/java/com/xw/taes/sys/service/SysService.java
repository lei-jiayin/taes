package com.xw.taes.sys.service;

import com.xw.taes.sys.domain.WardenTree;

import java.util.List;

/**
 * 系统服务类
 *
 * @author adx
 * @date 2020/7/21 14:18
 */
public interface SysService {
    List<WardenTree> getNav(String id, String[] roleIdss);

    List<WardenTree> findList(WardenTree wardenTree);

    List<WardenTree> getTid();

    WardenTree get(Integer id);

    int update(WardenTree wardenTree);

    int insert(WardenTree wardenTree);

    int findCount(WardenTree wardenTree);
}
