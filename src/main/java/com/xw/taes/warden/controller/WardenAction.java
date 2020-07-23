package com.xw.taes.warden.controller;

import com.xw.taes.commons.base.BaseAction;
import com.xw.taes.commons.vto.PageVto;
import com.xw.taes.warden.domain.Warden;
import com.xw.taes.commons.vto.ReturnResult;
import com.xw.taes.warden.service.WardenService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Api(value = "管理员控制", description = "管理员接口") // swagger注解
@Controller
@RequestMapping("/admin/warden")
@Slf4j
public class WardenAction extends BaseAction {

	@Autowired
	private WardenService wardenService;

	private final static String SESSION_WARDEN = "warden";

	@GetMapping("/info")
	public String info(HttpServletRequest request, Model model){
		Warden warden = (Warden) request.getSession().getAttribute(SESSION_WARDEN);
		/*warden = (Warden) ActionContext.getContext().getSession().get("warden");
		warden = wardenService.show(warden.getwId());*/
		model.addAttribute(SESSION_WARDEN, warden);
		return "/warden/info";
	}

	/*@GetMapping("/add")
	@ResponseBody
	public ReturnResult add(HttpServletRequest request, Warden warden){
		int f = wardenService.save(warden);
		if (f > 0){
			return new ReturnResult("1","",warden.getWid());
		}else {
			return new ReturnResult("0","");
		}
	}*/

	/**
	 * 载入需要修改的数据
	 * @param warden 传入ID
	 * @return 返回待修改的值
	 */
	@RequiresPermissions("root:edit")
	@ApiOperation(value = "获取要修改的信息", notes = "传入wid")
	@PostMapping("/edit")
	@ResponseBody
	public ReturnResult edit(Warden warden){
		System.err.println("edit="+warden.getWid());
		Warden editData = wardenService.findById(warden.getWid());
		return new ReturnResult("1",editData);
	}

	/**
	 * 保存或修改管理员数据
	 * @param warden 值
	 * @return 成功or失败
	 */
	@RequiresRoles("root")
	@RequiresPermissions("root:edit")
	@PostMapping("/save")
	@ResponseBody
	public ReturnResult update(Warden warden){
		//warden = (Warden) ActionContext.getContext().getSession().get("warden");
		log.debug("save：" + warden.getWid());
		int n;
		if (warden.getWid() != null && warden.getWid() > 0){
			n = wardenService.update(warden);
		}else {
			n = wardenService.save(warden);
		}
		if (n > 0){
			return new ReturnResult<Warden>("1");
		}
		return new ReturnResult("0");
	}


	/**
	 * 跳转到管理员页面
	 * @return 页面
	 */
	@RequiresRoles("root")
	@GetMapping("/mwarden")
	public String mWarden(){
		return "/warden/mwarden";
	}

	/**
	 * 查询管理员数据
	 * @param warden
	 * @return
	 */
	@RequiresRoles("root")
	@PostMapping("mwarden")
	@ResponseBody
	public ReturnResult mWarden(PageVto pageVto, Warden warden){
		log.debug("mWarden：" + pageVto.toString());
		warden.setPageVto(pageVto);
		List<Warden> w1 = wardenService.show(warden);
		ReturnResult<Warden> returnResult = new ReturnResult<>();
		returnResult.setCode("1");
		returnResult.setRows(w1);
		returnResult.setTotal(wardenService.findCount(warden));
		return returnResult;
	}

	/*private String ids=null;
	public String getIds() {
		return ids;
	}
	public void setIds(String ids) {
		this.ids = ids;
	}*/
	public String delete(String ids){
		int count = wardenService.delete(ids);
		return "";
	}
	
}
