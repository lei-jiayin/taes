package com.xw.taes.service;


import com.xw.taes.domain.Warden;
import com.xw.taes.util.WardenTree;
import net.sf.json.JSONObject;

import java.util.List;

public interface WardenService {

	Warden findByNoAndPwd(Warden warden);

	List<Warden> show(Warden warden);

	int save(Warden warden);

	int update(Warden warden);

	List<WardenTree> getNav(String id);

	Warden findById(int wid);

	int delete(String ids);


	int findCount(Warden warden);

}
