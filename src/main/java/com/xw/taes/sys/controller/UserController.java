package com.xw.taes.sys.controller;

import com.xw.taes.commons.vto.PageVto;
import com.xw.taes.commons.vto.ReturnResult;
import com.xw.taes.sys.domain.Role;
import com.xw.taes.sys.domain.User;
import com.xw.taes.sys.service.RoleService;
import com.xw.taes.sys.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * 系统用户控制
 * @author xw
 * @date 2020/7/22 23:15
 */
@Controller
@RequestMapping("/admin/user")
public class UserController {

    @Autowired
    public UserService userService;
    @Autowired
    private RoleService roleService;

    @RequiresRoles("root")
    @GetMapping("/list")
    public String index(){
        return "/sys/user/list";
    }

    @RequiresRoles("root")
    @PostMapping("/list")
    @ApiOperation(value = "展示用户列表")
    @ResponseBody
    public ReturnResult list(PageVto pageVto, User user){
        user.setPageVto(pageVto);
        List<User> users = userService.findList(user);
        ReturnResult<User> returnResult = new ReturnResult<>();
        returnResult.setCode("1");
        returnResult.setRows(users);
        returnResult.setTotal(users.size());
        return returnResult;
    }

    @RequiresRoles("root")
    @PostMapping("/edit")
    @ApiOperation(value = "获取要修改的用户信息")
    @ResponseBody
    public ReturnResult edit(Integer id){
        User user1 = userService.get(id);
        return new ReturnResult("1",user1);
    }

    @RequiresRoles("root")
    @PostMapping("/save")
    @ApiOperation(value = "保存管理员信息")
    @ResponseBody
    public ReturnResult save(User user){
        int n;
        if (user.getId() > 0){
            n = userService.update(user);
        }else {
            n = userService.insert(user);
        }
        if (n > 0){
            return new ReturnResult("1");
        }else {
            return new ReturnResult("0");
        }
    }

    @GetMapping("/getRoles")
    @ResponseBody
    public ReturnResult getRoles(){
        List<Role> roles = roleService.findAll();
        return new ReturnResult("1",roles);
    }
}
