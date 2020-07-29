package com.xw.taes.commons.base;

import java.util.List;

/**
 * DAO支持类实现
 * @author adx
 * @date 2020/7/20 13:52
 */
public interface CrudDao<T> {
    /**
     * 获取单条数据
     * @param id
     * @return
     */
     T get(Integer id);

    /**
     * 获取单条数据
     * @param entity
     * @return
     */
     T get(T entity);

    /**
     * 查询数据列表，如果需要分页，请设置分页对象，如：entity.setPageVto(new PageVto<T>());
     * @param entity
     * @return
     */
     List<T> findList(T entity);

    /**
     * 查询所有数据列表
     * @param entity
     * @return
     */
     List<T> findAllList(T entity);

    /**
     * 查询所有数据列表
     * @see public List<T> findAllList(T entity)
     * @return
     */
    List<T> findAllList();

    /**
     * 插入数据
     * @param entity
     * @return
     */
     int insert(T entity);

    /**
     * 更新数据
     * @param entity
     * @return
     */
     int update(T entity);

    /**
     * 删除数据（一般为逻辑删除，更新del_flag字段为1）
     * @param id
     * @see public int delete(T entity)
     * @return
     */
    public int delete(String id);

    /**
     * 删除数据（一般为逻辑删除，更新del_flag字段为1）
     * @param entity
     * @return
     */
    public int delete(T entity);

    int deleteByIds(String[] ids);
}
