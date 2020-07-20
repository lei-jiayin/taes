<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/warden/mwarden.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/valitype.js"></script>

<link rel="stylesheet" href="${pageContext.request.contextPath}/css/warden/mwarden.css"/>

<style>
.dialog-button{
text-align:center;
}
.textbox{
height:22px;    		
padding : 0 2px;
}
</style>
<table id="table1">
	
</table>

<div id="tb" style="padding: 5px;">
		<div style="margin-bottom: 5px;">
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onclick="obj.add()">添加</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-edit" onclick="obj.edit()">修改</a>
			<%--<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onclick="obj.remove()">删除</a>--%>
			<a id="save" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-reload" onclick="obj.reload()">刷新</a>
			<a id="redo" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-redo" onclick="obj.redo()">取消选择</a>
		</div>
		<div style="padding: 0 0 0 7px;">
			查询管理员:<input class="textbox" type="text" name="keyword"/>
			<a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="obj.search()">查询</a>
		</div>
</div>

<form id="warden_add" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<p>账号：<input class="textbox" name="wno" id="wno" type="text" style="width: 200px;"></p>
	<p>名称：<input class="textbox" name="wname" id="wname" type="text" style="width: 200px;"></p>
	<p>电话：<input class="textbox" name="tel" id="tel" type="text" style="width: 200px;"></p>
	<p>密码：<input class="textbox" name="wpassword" id="wpassword" type="password" style="width: 200px;"></p>
</form>


<form id="warden_edit" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<input class="textbox" name="wid" type="hidden">
	<p>账号：<input class="textbox" name="wno_edit" disabled="disabled" id="wNo" type="text" style="width: 200px;"></p>
	<p>名称：<input class="textbox" name="wname_edit" id="wName" type="text" style="width: 200px;"></p>
	<p>电话：<input class="textbox" name="tel_edit" id="tel" type="text" style="width: 200px;"></p>
	<p>密码：<input class="textbox" name="wpassword_edit" id="wPassword" type="password" style="width: 200px;"></p>
</form>





