package com.xw.taes.sys.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 系统用户控制
 * @author xw
 * @date 2020/7/22 23:15
 */
@Controller
@RequestMapping("/admin/user")
public class UserController {

    @GetMapping("/list")
    public String index(){
        return "/sys/user/list";
    }

}
