<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<script type="text/javascript">

</script>
<style>
.dialog-button{
text-align:center;
}
.textbox{
height:22px;    		
padding : 0 2px;
}
</style>

<table id="showScore">
 	
</table>
<div id="fenxi_tools" style="padding: 5px;">
		<div style="margin-bottom: 5px;">
			<a href="#" class="easyui-linkbutton" plain="true" onclick="fenxi_tool.showEcharts()">显示分数统计图</a>
			<a href="#" class="easyui-linkbutton" plain="true" onclick="fenxi_tool.showparament()">显示考试分数分析</a>
			<a id="save" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-reload" onclick="fenxi_tool.reload()">刷新</a>
			<a id="redo" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-redo" onclick="fenxi_tool.redo()">取消选择</a>
		</div>
		<div style="padding: 0 0 0 7px;">
			选择课程:<input name="student_courses" id="student_courses"/>
			考试:<input name="student_exTime" id="student_exTime"> 
			<a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="fenxi_tool.search()">查询</a>
		</div>
</div>
 
 <!-- 图表分析显示 -->
<div id="panel" style="width: 700px;height: 500px;">

</div>

<form id="parameter" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<p>考试人数：<input disabled="disabled" class="textbox" type="text" id="studentNum" name="studentNum"></p>
	<p>满&nbsp;&nbsp;&nbsp;分：<input disabled="disabled" class="textbox" type="text" id="fullScore" name="fullScore"></p>
	<p>最高分：<input disabled="disabled" class="textbox" type="text" id="maxScore" name="maxScore"></p>
	<p>最低分：<input disabled="disabled" class="textbox" type="text" id="minScore" name="minScore"></p>
	<p>平均分：<input disabled="disabled" class="textbox" type="text" id="aveScore" name="aveScore"></p>
	<p>方&nbsp;&nbsp;&nbsp;差：<input disabled="disabled" class="textbox" type="text" id="variance" name="variance"></p>
	<p>难度系数：<input disabled="disabled" class="textbox" type="text" id="dod" name="dod"></p>
</form>

<script type="text/javascript" src="${pageContext.request.contextPath}/js/student/fenxiScore.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/echarts.min.js"></script>
