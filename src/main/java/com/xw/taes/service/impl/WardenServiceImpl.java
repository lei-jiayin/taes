package com.xw.taes.service.impl;


import com.xw.taes.dao.WardenDao;
import com.xw.taes.domain.Warden;
import com.xw.taes.service.WardenService;
import com.xw.taes.util.WardenTree;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class WardenServiceImpl implements WardenService {
	/**
	 * π‹¿Ìdao
	 */
	@Autowired
	private WardenDao wardenDao;



	@Override
	public Warden findByNoAndPwd(Warden warden) {
		Warden existWarden = wardenDao.findByNoAndPwd(warden);
		return existWarden;
	}


	@Override
	public int save(Warden warden) {
		// TODO Auto-generated method stub
		int f = wardenDao.save(warden);
		return f;
	}



	@Override
	public int update(Warden warden) {
		// TODO Auto-generated method stub
		 int u = wardenDao.update(warden);
		 return u;
	}



	@Override
	public JSONArray getNav(String id) {
		// TODO Auto-generated method stub
		List<WardenTree> data = wardenDao.getNav(id);
		JSONArray json = new JSONArray();
         for(WardenTree pLog : data){
             JSONObject jo = new JSONObject();
             jo.put("id", pLog.getId());
             jo.put("text", pLog.getText());
             jo.put("url", pLog.getUrl());
             jo.put("state", pLog.getState());
             jo.put("tid", pLog.getTid());
             json.add(jo);
         }
         System.out.println(json);
         return json;
	}

	@Override
	public List show(int first, int rows, String sort, String order,String wName) {
		// TODO Auto-generated method stub
		List<Warden> list = wardenDao.find(first,rows,sort,order ,wName);
		JSONArray jsonA = new JSONArray();
		for(Warden warden : list){
			JSONObject jsonB = new JSONObject();
			jsonB.put("wid", warden.getWId());
			jsonB.put("wno", warden.getWNo());
			jsonB.put("wname", warden.getWName());
			jsonB.put("tel",warden.getTel());
			//jsonB.put("level", warden.getLevel());
			jsonA.add(jsonB);
		}
		int count = wardenDao.findCount(wName);
		
		String json = "{"+"\"total\""+":"+count+","+"\"rows\""+":"+jsonA+"}";
		System.err.println(json);
		JSONObject js = new JSONObject();
		js = JSONObject.fromObject(json);
		return list;
	}



	@Override
	public JSONObject findById(int getwId) {
		// TODO Auto-generated method stub
		JSONObject list = wardenDao.findById(getwId);
		JSONObject jsonO = new JSONObject();
		jsonO = JSONObject.fromObject(list);
		System.err.println("jsonO="+jsonO);
		
		return jsonO;
	}



	@Override
	public int delete(String ids) {
		// TODO Auto-generated method stub
		return wardenDao.delete(ids);
	}

}
