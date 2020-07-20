package com.xw.taes.dao;

import java.util.List;

/**
 * @author adx
 * @date 2020/7/20 13:52
 */
public interface CrudeDao<T> {
    List<T> findList();
}
