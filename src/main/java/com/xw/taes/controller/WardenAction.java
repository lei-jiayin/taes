package com.xw.taes.controller;

import com.xw.taes.domain.Warden;
import com.xw.taes.domain.vto.ReturnResult;
import com.xw.taes.service.WardenService;
import com.xw.taes.util.WardenTree;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/admin/warden")
public class WardenAction extends BaseAction {

	@Autowired
	private WardenService wardenService;

	private final static String SESSION_WARDEN = "warden";

	@GetMapping("/login")
	public String login() {
		System.out.println("login");
		return "/wLogin";
	}

	@PostMapping("/login")
	public String wlogin(Warden warden, HttpServletRequest request, Model model){
		System.out.println("--------wardenֵ=" + warden + "," + "��ǰ��=WardenAction.wlogin()");
		Warden existLogin = wardenService.findByNoAndPwd(warden);
		if (existLogin != null){
			request.getSession().setAttribute(SESSION_WARDEN, existLogin);
			model.addAttribute("warden", existLogin);
			System.out.println("--------existLoginֵ=" + existLogin + "," + "当前类=WardenAction.wlogin()");
			return "/warden/index";
		}else {
			return "/warden/error";
		}
	}

	@GetMapping("/exit")
	public String exit(HttpServletRequest request){
		//ActionContext.getContext().getSession().clear();
		request.getSession().removeAttribute(SESSION_WARDEN);
		return "/wLogin";
	}

	@GetMapping("/info")
	public String info(HttpServletRequest request, Model model){
		Warden warden = (Warden) request.getSession().getAttribute(SESSION_WARDEN);
		/*warden = (Warden) ActionContext.getContext().getSession().get("warden");
		warden = wardenService.show(warden.getwId());*/
		model.addAttribute(SESSION_WARDEN, warden);
		return "/warden/info";
	}

	@GetMapping("/add")
	@ResponseBody
	public ReturnResult add(HttpServletRequest request, Warden warden){
		int f = wardenService.save(warden);
		if (f > 0){
			return new ReturnResult("1","",warden.getWid());
		}else {
			return new ReturnResult("0","");
		}
	}

	public String addto(Warden warden){
		wardenService.save(warden);
		return "addto";
	}

	private JSONObject editData = null;
	public JSONObject getEditData() {
		return editData;
	}
	public void setEditData(JSONObject editData) {
		this.editData = editData;
	}

	@PostMapping("/edit")
	@ResponseBody
	public ReturnResult edit(Warden warden){
		System.err.println("edit="+warden.getWid());
		Warden editData = wardenService.findById(warden.getWid());
		return new ReturnResult("1","",editData);
		
	}
	
	
	@PostMapping("/save")
	@ResponseBody
	public ReturnResult update(Warden warden){
		//warden = (Warden) ActionContext.getContext().getSession().get("warden");
		int n = 0;
		if (warden.getWid() != null && warden.getWid() > 0){
			n = wardenService.update(warden);
		}else {
			n = wardenService.save(warden);
		}
		if (n > 0){
			return new ReturnResult<Warden>("1","");
		}
		return new ReturnResult("0","");
	}

	@PostMapping("/getNav")
	@ResponseBody
	public String getNav(String id){
		Map<String, Object> map = new HashMap<>();
		if (StringUtils.isBlank(id)){
			id = "0";
		}
		List<WardenTree> tree = wardenService.getNav(id);
		//tree = wardenService.getNav(id);
		System.err.println("id="+id);
		String trees = JSONArray.fromObject(tree).toString();
		//map.put("tree", trees);
		//return SUCCESS;
		return trees;
	}

	/**
	 * 跳转到管理员页面
	 * @return 页面
	 */
	@GetMapping("/mwarden")
	public String mWarden(){
		return "/warden/mwarden";
	}

	/**
	 * 查询管理员数据
	 * @param warden
	 * @return
	 */
	@PostMapping("mwarden")
	@ResponseBody
	public ReturnResult mWarden(Warden warden){

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
