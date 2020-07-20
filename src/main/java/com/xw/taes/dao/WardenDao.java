package com.xw.taes.dao;


import com.xw.taes.domain.Warden;
import com.xw.taes.util.WardenTree;
import net.sf.json.JSONObject;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WardenDao extends CrudeDao<Warden> {

	Warden findByNoAndPwd(Warden warden);

	Warden show(int wId);

	int save(Warden warden);

	int update(Warden warden);

	List<WardenTree> getNav(@Param("id") String id);

	List<Warden> find(Warden warden);

	int findCount(Warden warden);

	Warden findById(int getwId);

	int delete(String ids);
	

}
