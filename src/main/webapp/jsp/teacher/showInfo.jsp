<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/teacher/showInfo.js"></script>

<table id="teacherInfo">
</table>


<div id="info_tools" style="padding: 5px;">
		<div style="margin-bottom: 5px;">
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-edit" onclick="obj.edit()">修改密码</a>
			<a id="save" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-reload" onclick="obj.reload()">刷新</a>
			<a id="redo" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-redo" onclick="obj.redo()">取消选择</a>
		</div>
</div>

<form id="password_edit">
	新密码：<input type="password" class="easyui-textbox" name="password" id="password">
</form>