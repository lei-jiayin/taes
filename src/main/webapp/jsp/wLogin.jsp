<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%--<%@taglib uri="/struts-tags" prefix="s"%>--%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>管理员登录页面</title>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/js/jquery-3.2.1.min.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
<link href="${pageContext.request.contextPath}/css/bootstrap.min.css"
	rel="stylesheet" />
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
<script type="text/javascript">
	/* 开始时刷新验证码 */
	//切换验证码  
	function change() {
		var img1 = document.getElementById("checkImg");
		img1.src = "${pageContext.request.contextPath}/vCode.action?"
				+ new Date().getTime(); //加时间戳防止缓存  
	}
</script>
</head>
<body>
	<form class="form-horizontal" method="post" id="login">
		<div class="form-group">
			<label for="userName" class="col-sm-2 control-label">编号</label>
			<div class="col-sm-6">
				<input type="text" class="form-control" id="userName" name="userName"
					placeholder="no">
			</div>
		</div>
		<div class="form-group">
			<label for="password" class="col-sm-2 control-label">密码</label>
			<div class="col-sm-6">
				<input type="password" class="form-control" id="password"
					name="password" placeholder="Password">
			</div>
		</div>
		<%--<div class="form-group">
			<label for="vcode" class="col-sm-2 control-label">验证码</label>
			<div class="col-sm-6">
				<input type="text" class="form-control" id="vcode" name="vcode"
					placeholder="验证码" maxlength="4" autocomplete="off"><img
					id="checkImg" class="captchaImage"
					src="${pageContext.request.contextPath}/vCode.action"
					onclick="change()" title="点击更换验证码">
			</div>
		</div>--%>
		<div class="form-group">
			<div class="col-sm-offset-2 col-sm-10">
				<button type="button" onclick="login()" class="btn btn-default">登录</button>
				<%--<button type="submit" class="btn btn-default">登录</button>--%>
			</div>
		</div>
	</form>
	<script type="text/javascript">
		function login() {
		    var userName = $("#userName").val();
		    var password = $("#password").val();
		    if (userName != '' && password != ''){
                $.ajax({
					url:'/admin/login',
					dataType:'json',
					type:'post',
					data: $('#login').serialize(),
					asyn:true,
					success:function (data) {
					    console.log(1);
						if (data == '0')
						{
						    console.log("success");
						    // location.href = '/admin/index';
						}else {
						    console.log(data.message);
						    console.log("登录失败");
						}
                    },
					error:function (data) {
					    console.log(data);
                        console.log("登录失败123");
                        console.log(data.message);
                    }
                })
			} else {
		        alert("账号密码不能为空！");
			}

        }
		/*$("#login").form("submit",{
		    url:'/admin/login',
			onSubmit: function () {
		        var userName = $("#userName").val();
		        if (userName === ''){
		            alert("用户名不为空！");
				} 
            },
			error: function (data) {
				if (data.code === '0'){
				    alert(data.message);
				}
            }
		})*/
	</script>
</body>
</html>