<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="/struts-tags" prefix="s"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/warden/daoruScore.js"></script>
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
<table id="mscore">

</table>
<s:form action="scoreUp" namespace="/warden" enctype="multipart/form-data" method="post" id="score_add" name="score_add" style="margin: 0;padding: 5px 0 0 25px;color: #333;" theme="simple">
		<!-- <p>选择班级：<input type="text" class="textbox" id="pcId" name="pcId" style="width: 200px;"></p> -->
		<p>上传文件：<s:file name="upfile" id="upfile"></s:file></p>
		<%-- <s:submit value="上传"></s:submit> --%>
</s:form>

<div id="score_tools" style="padding: 5px;">
		<div style="margin-bottom: 5px;">
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onclick="score_tool.daoru()">导入分数</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onclick="score_tool.daoruSD()">添加详细分数</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onclick="score_tool.add()">添加分数</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onclick="score_tool.remove()">删除</a>
			<a id="save" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-reload" onclick="score_tool.reload()">刷新</a>
			<a id="redo" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-redo" onclick="score_tool.redo()">取消选择</a>
		</div>
		<div style="padding: 0 0 0 7px;">
			查询分数:<input class="textbox" type="text" name="score"/>
			<a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="score_tool.search()">查询</a>
		</div>
</div>

<form id="score_add2" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<p>学号：<input type="text" class="textbox" id="studentNo" name="studentNo" style="width: 200px;"></p>
	<p>课程：<input class="textbox" id="coursesName" name="coursesName" style="width: 200px;"></p>
	<p>试卷：<input class="textbox" id="paperName" name="paperName" style="width: 200px;"></p>
	<p>分数：<input type="text" class="textbox" id="ascore" name="ascore" style="width: 200px;"></p>
	<p>时间：<input type="text" style="width: 200px;" class="textbox" id="exTime" name="exTime" style="width: 200px;"></p>
	<p>考试：<input type="text" class="textbox" id="exName" name="exName" style="width: 200px;"></p>
</form>

<form id="score_edit" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<p>学号：<input type="text" class="textbox" id="studentNo" name="studentNo_edit" style="width: 200px;"></p>
	<p>课程：<input class="textbox" id="coursesName_edit" name="coursesName_edit" style="width: 200px;"></p>
	<p>试卷：<input class="textbox" id="paperName_edit" name="paperName_edit" style="width: 200px;"></p>
	<p>分数：<input type="text" class="textbox" id="ascore" name="ascore_edit" style="width: 200px;"></p>
	<p>时间：<input type="text" class="textbox" id="exTime" name="exTime_edit" style="width: 200px;"></p>
	<p>考试：<input type="text" class="textbox" id="exName" name="exName_edit" style="width: 200px;"></p>
</form>

<form id="score_daoruSD" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<p>分数Id：<input type="text" disabled="disabled" class="textbox" id="scId" name="scId_sd" ></p>
	<p>题目：<input class="textbox" id="content" name="content" style="width: 200px;"></p>
	<p>分数：<input type="text" class="textbox" id="sdscore" name="sdscore" style="width: 200px;"></p>
</form>



