package com.xw.taes.warden.controller;

import com.xw.taes.commons.exception.UserResponseEnum;
import com.xw.taes.commons.vto.PageVto;
import com.xw.taes.commons.vto.ReturnResult;
import com.xw.taes.warden.domain.Student;
import com.xw.taes.warden.service.StudentManageService;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 学生信息管理 角色 管理员（admin） 所有在校学生信息
 *
 * @author adx
 * @date 2020/7/31 14:49
 */
@Controller
@RequestMapping("/warden/student")
public class StudentManageController {

    @Autowired
    private StudentManageService studentManageService;

    @RequiresRoles({"admin","root"})
    @GetMapping("/list")
    public String list(){
        return "/warden/student/list";
    }

    @PostMapping("/list")
    @ResponseBody
    public ReturnResult list(PageVto pageVto, Student student){
        try{
            ReturnResult returnResult = studentManageService.findPage(pageVto, student);
            returnResult.setCode("1");
            returnResult.setMessage("操作成功");
            return returnResult;
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ReturnResult(UserResponseEnum.ERROR);
    }

}
