package com.xw.taes.warden.service;


import com.xw.taes.warden.domain.Warden;
import com.xw.taes.commons.util.WardenTree;

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
