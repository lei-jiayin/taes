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
	 * ����dao
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
	public List<WardenTree> getNav(String id) {
		// TODO Auto-generated method stub
		List<WardenTree> data = wardenDao.getNav(id);
		//JSONArray json = new JSONArray();
        // for(WardenTree pLog : data){
        //     JSONObject jo = new JSONObject();
        //     jo.put("id", pLog.getId());
        //     jo.put("text", pLog.getText());
        //     jo.put("url", pLog.getUrl());
        //     jo.put("state", pLog.getState());
        //     jo.put("tid", pLog.getTid());
        //     json.add(jo);
        // }
        // System.out.println(json);
		if (data != null && data.size() > 0){
			return data;
		}
		return null;
	}

	@Override
	public List<Warden> show(Warden warden) {
		// TODO Auto-generated method stub
		List<Warden> list = wardenDao.find(warden);
		JSONArray jsonA = new JSONArray();
		/*for(Warden warden : list){
			JSONObject jsonB = new JSONObject();
			jsonB.put("wid", warden.getWId());
			jsonB.put("wno", warden.getWNo());
			jsonB.put("wname", warden.getWName());
			jsonB.put("tel",warden.getTel());
			//jsonB.put("level", warden.getLevel());
			jsonA.add(jsonB);
		}*/
		int count = wardenDao.findCount(warden);
/*
		String json = "{"+"\"total\""+":"+count+","+"\"rows\""+":"+jsonA+"}";
		System.err.println(json);
		JSONObject js = new JSONObject();
		js = JSONObject.fromObject(json);*/
		return list;
	}



	@Override
	public Warden findById(int wid) {
		// TODO Auto-generated method stub
		Warden warden = wardenDao.findById(wid);
		//JSONObject jsonO = new JSONObject();
		//jsonO = JSONObject.fromObject(list);
		//System.err.println("jsonO="+jsonO);
		
		return warden;
	}

	@Override
	public int findCount(Warden warden) {
		return wardenDao.findCount(warden);
	}

	@Override
	public int delete(String ids) {
		// TODO Auto-generated method stub
		return wardenDao.delete(ids);
	}

}
