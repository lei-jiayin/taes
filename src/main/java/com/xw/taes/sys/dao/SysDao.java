package com.xw.taes.sys.dao;

import com.xw.taes.sys.domain.WardenTree;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 系统数据接口
 *
 * @author adx
 * @date 2020/7/21 14:21
 */
@Repository
public interface SysDao {
    List<WardenTree> getNav(@Param("id") String id, @Param("roleIdss") String[] roleIdss);

    List<WardenTree> findList(WardenTree wardenTree);

    List<WardenTree> getTid();

    WardenTree get(Integer id);

    int update(WardenTree wardenTree);

    int insert(WardenTree wardenTree);

    void insertMenuRole(int menuId, int roleId);

    void deleteRoleByMenuId(int menuId);

    int findCount(WardenTree wardenTree);
}
