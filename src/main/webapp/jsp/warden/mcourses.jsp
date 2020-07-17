<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/warden/mcourses.js"></script>
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
<table id="mcourses"></table>

<div id="courses_tools" style="padding: 5px;">
		<div style="margin-bottom: 5px;">
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onclick="courses_tool.add()">添加</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-edit" onclick="courses_tool.edit()">修改</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onclick="courses_tool.remove()">删除</a>
			<a id="save" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-reload" onclick="courses_tool.reload()">刷新</a>
			<a id="redo" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-redo" onclick="courses_tool.redo()">取消选择</a>
		</div>
		<div style="padding: 0 0 0 7px;">
			查询课程:<input class="textbox" type="text" name="keyword"/>
			<a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="courses_tool.search()">查询</a>
		</div>
</div>

<form id="courses_add" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<p>课程编号：<input class="textbox" name="coursesNo" id="coursesNo" type="text" style="width: 200px;"></p>
	<p>课程名称：<input class="textbox" name="coursesName" id="coursesName" type="text" style="width: 200px;"></p>
	<p>课程学分：<input class="textbox" name="credits" id="credits" type="text" style="width: 200px;"></p>
	
</form>
<form id="courses_edit" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<input class="textbox" hidden="true" name="coursesId_edit" type="text" style="width: 200px;">
	<p>课程编号：<input class="textbox" name="coursesNo_edit" id="coursesNo" type="text" style="width: 200px;"></p>
	<p>课程名称：<input class="textbox" name="coursesName_edit" id="coursesName" type="text" style="width: 200px;"></p>
	<p>课程学分：<input class="textbox" name="credits_edit" id="credits" type="text" style="width: 200px;"></p>
</form>