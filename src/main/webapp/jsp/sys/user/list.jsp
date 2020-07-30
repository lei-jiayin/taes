<%--
  Created by IntelliJ IDEA.
  User: xiongwei
  Date: 2020/7/22
  Time: 23:28
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/sys/user.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/valitype.js"></script>

<link rel="stylesheet" href="${pageContext.request.contextPath}/css/warden/mwarden.css"/>

<style>
    .dialog-button{
        text-align:center;
    }
    .textbox{
        height:22px;
        padding : 0 2px;
    }
</style>
<table id="table_user">

</table>

<div id="user_tb" style="padding: 5px;">
    <div style="margin-bottom: 5px;">
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onclick="user_obj.add()">添加</a>
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-edit" onclick="user_obj.edit()">修改</a>
        <%--<a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onclick="obj.remove()">删除</a>--%>
        <a id="save" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-reload" onclick="user_obj.reload()">刷新</a>
        <a id="redo" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-redo" onclick="user_obj.redo()">取消选择</a>
    </div>
    <div style="padding: 0 0 0 7px;">
        查询系统用户:<input class="textbox" type="text" name="userName_keyword"/>
        <a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="user_obj.search()">查询</a>
    </div>
</div>

<form id="user_add" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
    <p>账号：<input class="textbox" name="userName" id="userName" type="text" style="width: 200px;"></p>
    <p>密码：<input class="textbox" name="password" id="password" type="password" style="width: 200px;"></p>
    <p>角色：<input class="easyui-combobox" name="roleId" id="roleId" style="width:250px"/></p>
</form>


<form id="user_edit" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
    <input class="textbox" name="user_id_edit" id="user_id_edit" type="hidden">
    <p>账号：<input class="textbox" name="userName_edit" disabled="disabled" id="wno" type="text" style="width: 200px;"></p>
    <p>密码：<input class="textbox" name="password_edit" id="wpassword" type="password" style="width: 200px;"></p>
    <p>角色：<input name="roleId" id="roleId_edit" style="width:250px"/></p>
</form>






