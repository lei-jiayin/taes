package com.xw.taes.warden.service.impl;


import com.xw.taes.warden.dao.WardenDao;
import com.xw.taes.warden.domain.Warden;
import com.xw.taes.warden.service.WardenService;
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
	public List<Warden> show(Warden warden) {
		List<Warden> list = wardenDao.find(warden);
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
