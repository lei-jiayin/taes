package com.xw.taes.sys.service.impl;

import com.xw.taes.sys.domain.WardenTree;
import com.xw.taes.sys.dao.SysDao;
import com.xw.taes.sys.service.SysService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 系统服务实现
 *
 * @author adx
 * @date 2020/7/21 14:19
 */
@Service
@Slf4j
@Transactional(readOnly = false)
public class SysServiceImpl implements SysService {
    @Autowired
    public SysDao sysDao;

    @Override
    public List<WardenTree> getNav(String id, String[] roleIdss) {
        List<WardenTree> data = sysDao.getNav(id, roleIdss);
        if (data != null && data.size() > 0){
            return data;
        }
        return null;
    }

    @Override
    public List<WardenTree> findList(WardenTree wardenTree) {
        return sysDao.findList(wardenTree);
    }

    @Override
    public List<WardenTree> getTid() {
        return sysDao.getTid();
    }

    @Override
    public WardenTree get(Integer id) {
        WardenTree wardenTree = sysDao.get(id);
        if (wardenTree.getRoleId() != null){
            String roleId = wardenTree.getRoleId();
            String[] rids = roleId.split(",");
            wardenTree.setRoId(rids);
        }
        return wardenTree;
    }

    @Override
    public int update(WardenTree wardenTree) {
        sysDao.deleteRoleByMenuId(wardenTree.getId());
        String[] rids = wardenTree.getRoleId().split(",");
        for (int i=0; i < rids.length; i++)
        {
            sysDao.insertMenuRole(wardenTree.getId(), Integer.valueOf(rids[i]));
        }
        return sysDao.update(wardenTree);
    }

    @Override
    public int insert(WardenTree wardenTree) {
        int j = sysDao.insert(wardenTree);
        String[] rids = wardenTree.getRoleId().split(",");
        for (int i=0; i < rids.length; i++)
        {
            sysDao.insertMenuRole(wardenTree.getId(), Integer.valueOf(rids[i]));
        }
        return j;
    }

    @Override
    public int findCount(WardenTree wardenTree) {
        return sysDao.findCount(wardenTree);
    }
}
