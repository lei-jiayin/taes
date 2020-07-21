package com.xw.taes.commons.base;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * service支持类
 *
 * @author adx
 * @date 2020/7/21 17:26
 */
@Transactional(readOnly = false)
public abstract class CrudService<D extends CrudDao<T>, T extends DataEntity<T>>{

    /**
     * 持久层对象
     */
    @Autowired
    protected D dao;

    /**
     * 获取单条数据
     * @param id
     * @return
     */
    public T get(String id) {
        return dao.get(id);
    }

    /**
     * 获取单条数据
     * @param entity
     * @return
     */
    public T get(T entity) {
        return dao.get(entity);
    }

    /**
     * 查询列表数据
     * @param entity
     * @return
     */
    public List<T> findList(T entity) {
        return dao.findList(entity);
    }

    /**
     * 查询分页数据
     * @param pageVto 分页对象
     * @param entity
     * @return
     */
   /* public PageVto<T> findPage(PageVto<T> pageVto, T entity) {
        entity.setPageVto(pageVto);
        pageVto.setList(dao.findList(entity));
        return pageVto;
    }*/

    /**
     * 保存数据（插入或更新）
     * @param entity
     */
    /*@Transactional(readOnly = false)
    public void save(T entity) {
        if (entity.getIsNewRecord()){
            entity.preInsert();
            dao.insert(entity);
        }else{
            entity.preUpdate();
            dao.update(entity);
        }
    }*/

    /**
     * 删除数据
     * @param entity
     */
    @Transactional(readOnly = false)
    public void delete(T entity) {
        dao.delete(entity);
    }
}
