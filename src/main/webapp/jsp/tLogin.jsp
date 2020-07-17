<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>教师登录页</title>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/js/jquery-3.2.1.min.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
<link href="${pageContext.request.contextPath}/css/bootstrap.min.css"
	rel="stylesheet" />
<script type="text/javascript">
	//切换验证码  
	function change() {
		var img1 = document.getElementById("checkImg");
		img1.src = "${pageContext.request.contextPath}/vCode.action?"
				+ new Date().getTime(); //加时间戳防止缓存  
	}
</script>
<style type="text/css">
p {
	text-align: center;
}

body {
	padding-top: 70px;
}

.navbar {
	margin-bottom: -1px;
}
</style>
</head>
<body>
	<p>
		<s:actionerror />
	</p>
	<s:form class="form-horizontal" action="teacher_login" method="post"
		namespace="/teacher">
		<div class="form-group">
			<label for="teacherNo" class="col-sm-2 control-label">编号</label>
			<div class="col-sm-6">
				<input type="text" class="form-control" id="teacherNo"
					name="teacherNo" placeholder="教师编号">
			</div>
		</div>
		<div class="form-group">
			<label for="password" class="col-sm-2 control-label">密码</label>
			<div class="col-sm-6">
				<input type="password" class="form-control" id="password"
					name="password" placeholder="密码">
			</div>
		</div>
		<div class="form-group">
			<label for="vcode" class="col-sm-2 control-label">验证码</label>
			<div class="col-sm-6">
				<input type="text" class="form-control" id="vcode" name="vcode"
					placeholder="验证码" maxlength="4" autocomplete="off"><img
					id="checkImg" class="captchaImage"
					src="${pageContext.request.contextPath}/vCode.action"
					onclick="change()" title="点击更换验证码">
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-offset-2 col-sm-10">
				<button type="submit" class="btn btn-default">登录</button>
			</div>
		</div>
	</s:form>
</body>
</html>