<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="renderer" content="webkit">
<title>教师端</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/js/jquery-easyui-1.5.4.2/themes/default/easyui.css"/>
<link rel="stylesheet" href="${pageContext.request.contextPath}/js/jquery-easyui-1.5.4.2/themes/icon.css"/>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-easyui-1.5.4.2/jquery.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-easyui-1.5.4.2/jquery.easyui.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-easyui-1.5.4.2/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/teacher/teacher.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/student.css"/>
</head>
<body>
	<div id="layout" class="easyui-layout" data-options="fit:true">
			<div data-options="region:'north',split:true,noheader:true" style="height: 60px;background-color: #666666;">
				<div class="logo">
					教师端
				</div>
				<div class="logout">
					您好，<s:property value="#session.teacher.teacherName"/>|<a href="teacher_exit.action">退出</a>
				</div>
			</div>
			<div data-options="region:'west',split:true,title:'导航栏'," style="width: 180px;padding: 10px;">
				<ul id="nav">
					
				</ul>
			</div>
			<div data-options="region:'center'" style="overflow: hidden;">
				<div id="tabs">
					<div title="起始页" data-options="closable:true" style="padding: 0 10px;display: block;">
						欢迎
					</div>
				</div>
			</div>
			<div data-options="noheader:true,region:'south',title:'footer'," style="height:35px;text-align: center;line-height: 30px;">
				&copy;2018-04-22
			</div>
	</div>
</body>
</html>