<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/warden/mexamination.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/valitype.js"></script>
<style>
.dialog-button{
text-align:center;
}
.textbox{
height:22px;    		
padding : 0 2px;
}
</style>
<table id="mexamination"></table>

<div id="examination_tools" style="padding: 5px;">
		<div style="margin-bottom: 5px;">
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onclick="examination_tool.add()">添加</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-edit" onclick="examination_tool.edit()">修改</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onclick="examination_tool.remove()">删除</a>
			<a id="save" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-reload" onclick="examination_tool.reload()">刷新</a>
			<a id="redo" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-redo" onclick="examination_tool.redo()">取消选择</a>
		</div>
		<div style="padding: 0 0 0 7px;">
			查询考试:<input class="textbox" type="text" name="examinationName"/>
			<a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="examination_tool.search()">查询</a>
		</div>
</div>

<form id="examination_add" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<p>考试编号：<input class="textbox" name="exNo" id="exNo" type="text" style="width: 200px;"></p>
	<p>考试名称：<input class="textbox" name="exName" id="exName" type="text" style="width: 200px;"></p>
	<p>考试时间：<input class="textbox" name="exTime" id="exTime" type="text" style="width: 200px;"></p>
	<p>考试地点：<input class="textbox" name="address" id="address" type="text" style="width: 200px;"></p>
	<p>考试专业：<input class="textbox" name="profession2" id="profession2" type="text" style="width: 200px;"></p>
	<p>考试年级：<input class="textbox" name="grade" id="grade" type="text" style="width: 200px;"></p>
</form>
<form id="examination_edit" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<input class="textbox" disabled="true" name="exId_edit" type="text" style="width: 200px;">
	<p>考试编号：<input class="textbox" name="exNo_edit" id="exNo" type="text" style="width: 200px;"></p>
	<p>考试名称：<input class="textbox" name="exName_edit" id="exName" type="text" style="width: 200px;"></p>
	<p>考试时间：<input type="text" class="textbox" name="exTime_edit" id="exTime_edit" style="width: 200px;"></p>
	<p>考试地点：<input class="textbox" name="address_edit" id="address" type="text" style="width: 200px;"></p>
	<p>考试专业：<input class="textbox" name="profession2_edit" id="profession2" type="text" style="width: 200px;"></p>
	<p>考试年级：<input class="textbox" name="grade_edit" id="grade" type="text" style="width: 200px;"></p>
</form>