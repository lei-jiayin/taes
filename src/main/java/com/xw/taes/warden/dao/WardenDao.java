package com.xw.taes.warden.dao;


import com.xw.taes.commons.base.CrudDao;
import com.xw.taes.warden.domain.Warden;
import com.xw.taes.sys.domain.WardenTree;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WardenDao extends CrudDao<Warden> {

	Warden findByNoAndPwd(Warden warden);

	Warden show(int wId);

	int save(Warden warden);

	@Override
	int update(Warden warden);

	List<WardenTree> getNav(@Param("id") String id);

	List<Warden> find(Warden warden);

	@Override
    int findCount(Warden warden);

	Warden findById(int getwId);

	@Override
	int delete(String ids);
	

}
