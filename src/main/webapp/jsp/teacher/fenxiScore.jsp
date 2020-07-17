<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<style>
.dialog-button{
text-align:center;
}
.textbox{
height:22px;    		
padding : 0 2px;
}
</style>
<div id="fenxi_ts">
	<div>
		<a class="easyui-linkbutton" href="#" onclick="fenxi_t.showEcharts()">显示统计图</a>
		<a class="easyui-linkbutton" href="#" onclick="fenxi_t.showParameter()">显示参数</a>
	</div>
	<div>
		选择课程：<input class="textbox" id="fenxi_courses" name="fenxi_courses">
		考试时间：<input class="textbox" id="fenxi_exTime" name="fenxi_exTime">
		<a class="easyui-linkbutton" href="#" iconCls="icon-search" onclick="fenxi_t.search()">显示</a>
	</div>
</div>

<table id="mscore">

</table>

<div id="myecharts" style="width: 700px;height: 300px;">

</div>



<form id="parameter" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<p>试&nbsp;&nbsp;&nbsp;卷：<input class="textbox" id="parameter_paper" name="parameter_paper"></p>
	<p>考试时间：<input class="textbox" id="parameter_exTime" name="parameter_exTime"></p>
	<p>考试人数：<input disabled="disabled" class="textbox" type="text" id="studentNum" name="studentNum"></p>
	<p>满&nbsp;&nbsp;&nbsp;分：<input disabled="disabled" class="textbox" type="text" id="fullScore" name="fullScore"></p>
	<p>最高分：<input disabled="disabled" class="textbox" type="text" id="maxScore" name="maxScore"></p>
	<p>最低分：<input disabled="disabled" class="textbox" type="text" id="minScore" name="minScore"></p>
	<p>平均分：<input disabled="disabled" class="textbox" type="text" id="aveScore" name="aveScore"></p>
	<p>方&nbsp;&nbsp;&nbsp;差：<input disabled="disabled" class="textbox" type="text" id="variance" name="variance"></p>
	<p>难度系数：<input disabled="disabled" class="textbox" type="text" id="dod" name="dod"></p>
</form>


<script type="text/javascript" src="${pageContext.request.contextPath}/js/teacher/fenxiScore.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/echarts.min.js"></script>
