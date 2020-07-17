package com.xw.taes.controller;

import com.xw.taes.domain.Warden;
import com.xw.taes.service.WardenService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/admin/warden")
public class WardenAction extends BaseAction {

	// 注入业务层的wardenService
	@Autowired
	private WardenService wardenService;

	/**
	 * 跳转到登录页面
	 * 
	 * @return
	 */
	@GetMapping("/login")
	public String login() {
		System.out.println("login");
		return "/wLogin";
	}
	/**
	 * 管理员登录
	 * @return
	 */
	@PostMapping("/login")
	public String wlogin(Warden warden){
		System.out.println("--------warden值=" + warden + "," + "当前类=WardenAction.wlogin()");
		Warden existLogin = wardenService.findByNoAndPwd(warden);
		if (existLogin != null){
			return "/warden/index";
		}else {
			return "/warden/error";
		}
	}
	/**
	 * 退出登录
	 * @return
	 */
	public String exit(){
		//ActionContext.getContext().getSession().clear();
		return "exit";
	}
	/**
	 * 显示管理员信息
	 * @return
	 */
	public String info(){
		/*warden = (Warden) ActionContext.getContext().getSession().get("warden");
		warden = wardenService.show(warden.getwId());*/
		return "info";
	}
	/**
	 * 接收ajax传来的参数，添加到数据库
	 * @return
	 */
	public String add(HttpServletRequest request,Warden warden){
		/*System.err.println("第五次："+warden.getwNo());
		System.err.println("第五次："+warden.getwName());
		System.err.println("第五次："+warden.getTel());
		System.err.println("第五次："+warden.getwPassword());*/
		int f = wardenService.save(warden);
		PrintWriter out;
		System.err.println("第五次："+f);
		return "";
	}
	/**
	 * 保存添加的管理员信息
	 * @return
	 */
	public String addto(Warden warden){
		wardenService.save(warden);
		//this.addActionMessage("添加成功！");
		return "addto";
	}
	/**
	 * 编辑管理员信息
	 * @return
	 */
	//把要编辑的json数据传给前端
	private JSONObject editData = null;
	public JSONObject getEditData() {
		return editData;
	}
	public void setEditData(JSONObject editData) {
		this.editData = editData;
	}

	public String edit(Warden warden){
		System.err.println("edit="+warden.getWId());
		JSONObject editData = wardenService.findById(warden.getWId());
		return "";
		
	}
	
	
	
	/**
	 * 修改管理员信息
	 * @return
	 */
	public String update(Warden warden){
		//warden = (Warden) ActionContext.getContext().getSession().get("warden");
		int u = 0;
		u = wardenService.update(warden);
		return "";
	}
	///**
	// * 保存修改后的信息
	// * @return
	// */
	//public String updateto(){
	//	wardenService.update(warden);
	//	this.addActionMessage("修改成功！");
	//	return "updateto";
	//}
	
	/**
	 * 获取导航信息
	 * @return
	 */
	//导航的json数据
	private JSONArray tree = null;
	public JSONArray getTree() {
		return tree;
	}
	public void setTree(JSONArray tree) {
		this.tree = tree;
	}
	//树的节点id
	private String id;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNav(){
		//tree = wardenService.getNav(id);
		//System.err.println("id="+id);
		//return SUCCESS;
		return "";
	}
	/**
	 * 管理管理员信息
	 * @return
	 */
	//后台接收数据 当前页 每页显示数 排序字段 顺序
	//private PageBean pb = new PageBean();
/*	private int rows;
	private int page;
	private String sort;
	private String order;
	public int getRows() {
		return rows;
	}
	public void setRows(int rows) {
		this.rows = rows;
	}
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public String getSort() {
		return sort;
	}
	public void setSort(String sort) {
		this.sort = sort;
	}
	public String getOrder() {
		return order;
	}
	public void setOrder(String order) {
		this.order = order;
	}
	//前台接收json结果
	private JSONObject mwa = null;
	public JSONObject getMwa() {
		return mwa;
	}
	public void setMwa(JSONObject mwa) {
		this.mwa = mwa;
	}*/
	public String mWarden(Warden warden){
		/*System.err.println("第一次："+rows);
		System.err.println("第er次："+page);
		System.err.println("第san次："+sort);
		System.err.println("第si次："+order);
		System.err.println("第五次："+warden.getwName());*/
		//mwa = wardenService.show(first,rows,sort,order ,warden.getwName());
		return "";
	}
	/**
	 * 删除管理员信息
	 * @return
	 */
	//接收ids
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
