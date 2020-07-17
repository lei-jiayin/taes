package com.xw.taes.service;


import com.xw.taes.domain.Warden;
import net.sf.json.JSONObject;

import java.util.List;

public interface WardenService {
	/**
	 * 查询是否存在此管理员
	 * @param warden 
	 * @return
	 */
	Warden findByNoAndPwd(Warden warden);
	/**
	 * 显示当前管理员的信息
	 * @param wName
	 * @return
	 */
	List show(int first, int rows, String sort, String order, String wName);
	/**
	 * 保存添加的管理员信息
	 * @param warden
	 * @return 
	 */
	int save(Warden warden);
	/**
	 * 保存修改后的管理员信息
	 * @param warden
	 */
	int update(Warden warden);
	/**
	 * 获取树导航
	 * @param id
	 * @return
	 */
	List getNav(String id);
	/**
	 * 获取要编辑的所有数据
	 * @param getwId
	 * @return
	 */
	JSONObject findById(int getwId);
	/**
	 * 批量删除数据
	 * @param ids
	 */
	int delete(String ids);


}
