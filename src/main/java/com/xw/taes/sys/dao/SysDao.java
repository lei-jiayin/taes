package com.xw.taes.sys.dao;

import com.xw.taes.commons.util.WardenTree;
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
    List<WardenTree> getNav(@Param("id") String id);
}
