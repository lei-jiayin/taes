package com.xw.taes.sys.service.impl;

import com.xw.taes.commons.util.WardenTree;
import com.xw.taes.sys.dao.SysDao;
import com.xw.taes.sys.service.SysService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 系统服务实现
 *
 * @author adx
 * @date 2020/7/21 14:19
 */
@Service
@Slf4j
public class SysServiceImpl implements SysService {
    @Autowired
    public SysDao sysDao;

    @Override
    public List<WardenTree> getNav(String id) {
        List<WardenTree> data = sysDao.getNav(id);
        if (data != null && data.size() > 0){
            return data;
        }
        return null;
    }
}
