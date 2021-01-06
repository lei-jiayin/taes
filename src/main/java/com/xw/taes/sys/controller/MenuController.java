package com.xw.taes.sys.controller;

import com.xw.taes.commons.exception.UserResponseEnum;
import com.xw.taes.sys.domain.WardenTree;
import com.xw.taes.commons.vto.PageVto;
import com.xw.taes.commons.vto.ReturnResult;
import com.xw.taes.sys.domain.Role;
import com.xw.taes.sys.domain.User;
import com.xw.taes.sys.service.LoginService;
import com.xw.taes.sys.service.SysService;
import lombok.extern.slf4j.Slf4j;
import net.sf.json.JSONArray;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Iterator;
import java.util.List;
import java.util.Set;

/**
 * 菜单控制
 *
 * @author adx
 * @date 2020/7/21 11:38
 */
@Slf4j
@Controller
@RequestMapping("/sys/menu")
public class MenuController {

    @Autowired
    public SysService sysService;
    @Autowired
    public LoginService loginService;

    @PostMapping("/getNav")
    @ResponseBody
    public String getNav(String id){
        Subject subject = SecurityUtils.getSubject();
        log.debug("subject：" + subject);
        if (StringUtils.isBlank(id)){
            id = "0";
        }

        //subject.checkRole("root");

        String name = subject.getPrincipal().toString();
        User user = loginService.getUserByName(name);
        Set<Role> roles = user.getRoles();
        Iterator<Role> iterator = roles.iterator();
        StringBuilder roleIds = new StringBuilder();
        while (iterator.hasNext()){
            Role role = iterator.next();
            roleIds.append(role.getId()).append(",");
        }

        log.debug("角色ID为：" + roleIds.toString());
        String[] roleIdss = roleIds.toString().split(",");

        List<WardenTree> tree = sysService.getNav(id, roleIdss);
        String trees = JSONArray.fromObject(tree).toString();
        return trees;
    }

    @GetMapping("/list")
    public String list(){
        return "/sys/menu/list";
    }

    @PostMapping("/list")
    @ResponseBody
    public ReturnResult list(PageVto pageVto, WardenTree wardenTree){
        pageVto.setOrder(pageVto.getSort() + " " + pageVto.getOrder());
        wardenTree.setPageVto(pageVto);
        List<WardenTree> wardenTrees = sysService.findList(wardenTree);
        ReturnResult<WardenTree> returnResult = new ReturnResult<>(UserResponseEnum.SUCCESS);
        returnResult.setRows(wardenTrees);
        returnResult.setTotal(sysService.findCount(wardenTree));
        return returnResult;
    }

    @GetMapping("/getTid")
    @ResponseBody
    public ReturnResult getTid(){
        List<WardenTree> tids = sysService.getTid();
        ReturnResult returnResult = new ReturnResult(UserResponseEnum.SUCCESS);
        returnResult.setData(tids);
        return returnResult;
    }

    @PostMapping("/edit")
    @ResponseBody
    public ReturnResult edit(Integer id){
        WardenTree wardenTree = sysService.get(id);
        ReturnResult returnResult = new ReturnResult(UserResponseEnum.SUCCESS);
        returnResult.setData(wardenTree);
        return returnResult;
    }

    @PostMapping("/save")
    @ResponseBody
    public ReturnResult save(WardenTree wardenTree){
        try{
            int n;
            if (wardenTree.getId() > 0){
                n = sysService.update(wardenTree);
            }else {
                n = sysService.insert(wardenTree);
            }
            if (n > 0){
                return new ReturnResult("1","操作成功");
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ReturnResult(UserResponseEnum.ERROR);
    }

}
