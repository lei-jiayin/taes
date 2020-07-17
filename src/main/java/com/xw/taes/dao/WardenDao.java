package com.xw.taes.dao;


import com.xw.taes.domain.Warden;
import com.xw.taes.util.WardenTree;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WardenDao {
	/**
	 * 查询管理员是否存在
	 * @param warden
	 * @return
	 */
	Warden findByNoAndPwd(Warden warden);
	/**
	 * 显示管理员信息
	 * @param wId
	 * @return
	 */
	Warden show(int wId);
	/**
	 * 保存添加的管理员信息到数据库中
	 * @param warden
	 * @return 
	 */
	int save(Warden warden);
	/**
	 * 保存修改后的数据到数据库中
	 * @param warden
	 */
	int update(Warden warden);
	/**
	 * 从数据库中获取导航数据
	 * @param id
	 * @return
	 */
	List<WardenTree> getNav(String id);
	/**
	 * 查询排序
	 * @param first
	 * @param rows
	 * @param sort
	 * @param order
	 * @param wName 
	 * @param level 
	 * @return
	 */
	List<Warden> find(int first, int rows, String sort, String order, String wName);
	/**
	 * 查询总记录数
	 * @param wName 
	 * @return
	 */
	int findCount(String wName);
	/**
	 * 获取要编辑的对象
	 * @param getwId
	 * @return
	 */
	JSONObject findById(int getwId);
	/**
	 * 从数据库批量删除
	 * @param ids
	 */
	int delete(String ids);
	

}
