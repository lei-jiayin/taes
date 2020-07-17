<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="/struts-tags" prefix="s" %>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/teacher/reportCart.js"></script>

    
    

<s:form id="exportScore" action="teacher_fenxi_exportScore" namespace="/teacher" theme="simple" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
	<!-- <p><input id="professionalClass" name="prfessionalClass" style="width: 200px;"></p> -->
	请选择试卷和考试时间导出成绩单：
	<p><input id="paperName" name="paperName" style="width: 200px;"></p>
	<p><input id="exTime" name="exTime" style="width:200px;"></p>
	<p><input type="submit"  value="导出文件" class="easyui-linkbutton"></p>
</s:form>
