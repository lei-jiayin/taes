<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/teacher/showPaper.js"></script>
<style>
.dialog-button{
text-align:center;
}
.textbox{
height:22px;    		
padding : 0 2px;
}
</style>
<table id="mpaper">
</table>


<div id="teacher_ts" style="padding: 5px;">
		<div style="margin-bottom: 5px;">
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-edit" onclick="teacher_t.create()">添加试卷</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-reload" onclick="teacher_t.edit()">修改试卷</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-redo" onclick="teacher_t.remove()">删除试卷</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-edit" onclick="teacher_t.addQuestions()">添加试题</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-reload" onclick="teacher_t.reload()">刷新</a>
			<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-redo" onclick="teacher_t.redo()">取消选择</a>
		</div>
</div>

<form id="paper_add" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<p>试卷编号：<input type="text" class="textbox" name="paperNo" id="paperNo" style="width: 200px;"></p>
	<p>试卷名称：<input type="text" class="textbox" name="paperName" id="paperName" style="width: 200px;"></p>
	<p>试卷分值：<input type="text" class="textbox" name="totalScore" id="totalScore" style="width: 200px;"></p>
	<p>课程：<input class="textbox" name="courses" id="courses"></p>
</form>


<form id="paper_edit" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<p><input type="text" disabled="true" class="textbox" name="paperId_edit" id="paperId"></p>
	<p>试卷编号：<input type="text" class="textbox" name="paperNo_edit" id="paperNo" style="width: 200px;"></p>
	<p>试卷名称：<input type="text" class="textbox" name="paperName_edit" id="paperName" style="width: 200px;"></p>
	<p>分&nbsp;值：<input type="text" class="textbox" name="totalScore_edit" id="totalScore" style="width: 200px;"></p>
	<p>课程：<input class="textbox" name="courses_edit" id="courses_edit" style="width: 200px;"></p>
</form>

<form id="question_add" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<input type="text" disabled="disabled" class="textbox" id="paperId" name="paperId" style="width: 200px;">
	<p>题号：<input type="text" class="textbox" id="qBankNo" name="qBankNo" style="width: 200px;"></p>
	<p>题目：<input type="text" class="textbox" id="content" name="content" style="width: 200px;"></p>
	<p>分值：<input type="text" class="textbox" id="fullScore" name="fullScore" style="width: 200px;"></p>
	<p>类型：<input class="textbox" id="type" name="type"/></p>
</form>


