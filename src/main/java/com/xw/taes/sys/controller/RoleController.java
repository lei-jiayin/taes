package com.xw.taes.sys.controller;

import com.xw.taes.commons.exception.UserResponseEnum;
import com.xw.taes.commons.vto.PageVto;
import com.xw.taes.commons.vto.ReturnResult;
import com.xw.taes.sys.domain.Permission;
import com.xw.taes.sys.domain.Role;
import com.xw.taes.sys.service.PermissionService;
import com.xw.taes.sys.service.RoleService;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * 角色管理
 *
 * @author adx
 * @date 2020/7/29 10:03
 */
@Controller
@RequestMapping("/admin/role")
public class RoleController {

    @Autowired
    private RoleService roleService;
    @Autowired
    private PermissionService permissionService;

    @RequiresRoles("root")
    @GetMapping("/list")
    public String list(){
        return "/sys/role/list";
    }

    @PostMapping("/list")
    @ResponseBody
    public ReturnResult list(PageVto pageVto, Role role){
        role.setPageVto(pageVto);
        List<Role> roles = roleService.findList(role);
        ReturnResult<Role> returnResult = new ReturnResult<>(UserResponseEnum.SUCCESS);
        returnResult.setRows(roles);
        returnResult.setTotal(roles.size());
        return returnResult;
    }

    @GetMapping("/getPermissions")
    @ResponseBody
    public ReturnResult getPermissions(){
        List<Permission> permissions = permissionService.findAll();
        return new ReturnResult("1", permissions);
    }

    @PostMapping("/edit")
    @ResponseBody
    public ReturnResult edit(Role role){
        Role role1 = roleService.get(role);
        return new ReturnResult("1",role1);
    }

    @PostMapping("/save")
    @ResponseBody
    public ReturnResult save(Role role, HttpServletRequest request){
        int u;
        //String[] preIds = request.getParameterValues("preId");
        //String permissionId = String.join(",", preIds);
        //role.setPermissionId(permissionId);
        try{
            if (role.getId() > 0){
                // 更新
                u = roleService.update(role);
            }else {
                u = roleService.insert(role);
            }
            if (u > 0){
                return new ReturnResult(UserResponseEnum.SUCCESS);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ReturnResult(UserResponseEnum.ERROR);
    }

    @PostMapping("/delete")
    @ResponseBody
    public ReturnResult delete(String ids){
        int d = roleService.deleteByIds(ids);
        if (d > 0){
            return new ReturnResult(UserResponseEnum.SUCCESS);
        }
        return new ReturnResult(UserResponseEnum.ERROR);
    }


}
