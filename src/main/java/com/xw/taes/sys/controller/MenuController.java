package com.xw.taes.sys.controller;

import com.xw.taes.commons.util.WardenTree;
import com.xw.taes.sys.service.SysService;
import net.sf.json.JSONArray;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * 菜单控制
 *
 * @author adx
 * @date 2020/7/21 11:38
 */
@Controller
@RequestMapping("/sys/menu")
public class MenuController {

    @Autowired
    public SysService sysService;

    @PostMapping("/getNav")
    @ResponseBody
    public String getNav(String id){
        if (StringUtils.isBlank(id)){
            id = "0";
        }
        List<WardenTree> tree = sysService.getNav(id);
        //tree = wardenService.getNav(id);
        //System.err.println("id="+id);
        String trees = JSONArray.fromObject(tree).toString();
        //map.put("tree", trees);
        //return SUCCESS;
        return trees;
    }
}
