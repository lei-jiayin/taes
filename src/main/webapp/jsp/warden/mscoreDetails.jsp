<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/warden/mscoreDetails.js"></script>
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

<table id="mscoreDetails">

</table>

<div id="sd_tools" style="padding: 5px;">
		<div style="margin-bottom: 5px;">
			<!-- <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onclick="sd_tool.add()">添加详细分数</a> -->
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-edit" onclick="sd_tool.edit()">修改详细分数</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onclick="sd_tool.remove()">删除</a>
			<a id="save" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-reload" onclick="sd_tool.reload()">刷新</a>
			<a id="redo" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-redo" onclick="sd_tool.redo()">取消选择</a>
		</div>
		<div style="padding: 0 0 0 7px;">
			查询分数:<input class="textbox" type="text" id="keyword" name="keyword"/>
			<a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="sd_tool.search()">查询</a>
		</div>
</div>

<form id="sd_edit" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<p><input type="text" disabled="disabled" class="textbox" id="sdId_edit" name="sdId_edit"></p>
	<p>学号：<input class="textbox" id="scId_edit" name="scId_edit"></p>
	<p>题目：<input class="textbox" id="content_edit" name="content_edit"></p>
	<p>分数：<input type="text" class="textbox" id="sdscore" name="sdscore_edit"></p>
</form>