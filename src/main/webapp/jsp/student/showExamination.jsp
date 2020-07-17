<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/student/importExamination.js"></script>
<table id="showExamination"> </table>

<div id="exam_tools" style="padding: 5px;">
	<!-- <div>
		<a href="#" class="easuui-linkbutton" plain="true" onclick="exam_tool.Xscore()">显示该场考试的分数</a>
		
	</div> -->
	<div style="padding: 5px;">
		查询考试：<input type="text" class="easyui-textbox" id="keyword" name="keyword">
		<a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="exam_tool.search()">查询</a>
	</div>
</div>


<table id="exam_score">
	
</table>