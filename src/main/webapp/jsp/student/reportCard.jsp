<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="/struts-tags" prefix="s" %>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/student/reportCart.js"></script>

    
    

<s:form action="importReport" method="get" namespace="/student" id="export">
请选择考试开始时间导出成绩单：<input  id="exTime" name="exTime">
<input class="easyui-linkbutton" iconCls="icon-print" type="submit" value="生成成绩单">
</s:form>
