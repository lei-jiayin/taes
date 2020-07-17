<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/teacher/showQuestionBank.js"></script>
<style>
.dialog-button{
text-align:center;
}
.textbox{
height:22px;    		
padding : 0 2px;
}
</style>
<table id="mquestionbank">
</table>


<div id="questionbank_ts" style="padding: 5px;">
		<div style="margin-bottom: 5px;">
			<!-- <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-edit" onclick="questionbank_t.add()">添加</a> -->
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-reload" onclick="questionbank_t.edit()">修改</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-redo" onclick="questionbank_t.remove()">删除</a>
			<!-- <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-edit" onclick="questionbank_t.addQuestions()">添加试题</a> -->
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-reload" onclick="questionbank_t.reload()">刷新</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-redo" onclick="questionbank_t.redo()">取消选择</a>
		</div>
		<div style="padding: 0 0 0 7px;">
			查询试题:<input class="textbox" type="text" name="shiti"/>
			<a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="questionbank_t.search()">查询</a>
		</div>
</div>

<form id="question_edit" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<input type="text" disabled="disabled" class="textbox" id="qBankId" name="qBankId_edit" style="width: 200px;">
	<p>题号：<input type="text" class="textbox" id="qBankNo" name="qBankNo_edit" style="width: 200px;"></p>
	<p>题目：<input type="text" class="textbox" id="content" name="content_edit" style="width: 200px;"></p>
	<p>分值：<input type="text" class="textbox" id="fullScore" name="fullScore_edit" style="width: 200px;"></p>
	<p>类型：<input class="textbox" id="type_edit" name="type_edit"/></p>
	<p>试卷：<input class="textbox" id="paperId" name="paperId"></p>
</form>


    