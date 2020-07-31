package com.xw.taes.commons.base;

import com.xw.taes.commons.vto.PageVto;
import com.xw.taes.commons.vto.ReturnResult;
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
    public T get(Integer id) {
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
     * @param
     * @param entity
     * @return
     */
    public ReturnResult findPage(PageVto pageVto, T entity) {
        ReturnResult<T> rr = new ReturnResult<>();
        entity.setPageVto(pageVto);
        rr.setRows(dao.findList(entity));
        rr.setTotal(dao.findCount(entity));
        return rr;
    }

   @Transactional(readOnly = false)
   public int update(T entity){
       return dao.update(entity);
   }

   @Transactional(readOnly = false)
   public int insert(T entity){
       return dao.insert(entity);
   }

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

    @Transactional(readOnly = false)
    public int deleteByIds(String ids){
        String[] idss = ids.split(",");
        return dao.deleteByIds(idss);
    }
}
