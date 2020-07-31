<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<script type="text/javascript" src="${pageContext.request.contextPath}/js/warden/mstudent.js"></script>
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
<table id="mstudent"></table>

<div id="student_tools" style="padding: 5px;">
		<div style="margin-bottom: 5px;">
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onclick="student_tool.daoru()">导入学生信息</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onclick="student_tool.add()">添加学生信息</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-edit" onclick="student_tool.edit()">修改</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onclick="student_tool.remove()">删除</a>
			<a id="save" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-reload" onclick="student_tool.reload()">刷新</a>
			<a id="redo" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-redo" onclick="student_tool.redo()">取消选择</a>
		</div>
		<div style="padding: 0 0 0 7px;">
			查询学生:<input class="textbox" type="text" name="student"/>
			<a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="student_tool.search()">查询</a>
		</div>
</div>
<form id="student_edit" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<input class="textbox" disabled="disabled" name="studentId_edit" type="text" style="width: 200px;">
	<p>学号：<input class="textbox" name="studentNo_edit" id="studentNo" type="text" style="width: 200px;"></p>
	<p>姓名：<input class="textbox" name="studentName_edit" id="studentName" type="text" style="width: 200px;"></p>
	<p>班级：<input class="textbox" name="professionalClass_edit" id="professionalClass" type="text" style="width: 200px;"></p>
	<p>专业：<input class="textbox" name="profession_edit" id="profession" type="text" style="width: 200px;"></p>
	<p>学院：<input type="text" class="textbox" id="college_edit" name="college_edit" style="width: 200px;"></p>
</form>


<s:form action="fileUp" namespace="/warden" enctype="multipart/form-data" method="post" id="student_add" theme="simple" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
		<!-- 选择班级：<input type="text" class="easyui-textbox" id="pcId" name="pcId" style="width: 200px;"> -->
		选择上传的文件：<s:file type="file" name="upfile" id="upfile"></s:file>
		<%-- <s:submit value="上传"></s:submit> --%>
</s:form>

<form id="student_add2" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<p>学号：<input class="textbox" name="studentNo" id="studentNo" type="text" style="width: 200px;"></p>
	<p>姓名：<input class="textbox" name="studentName" id="studentName" type="text" style="width: 200px;"></p>
	<p>班级：<input class="textbox" name="professionalClass" id="professionalClass" type="text" style="width: 200px;"></p>
	<p>专业：<input class="textbox" name="profession" id="profession" type="text" style="width: 200px;"></p>
	<p>学院：<input type="text" class="textbox" id="college_edit" name="college" style="width: 200px;"></p>
</form>

