<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/7/29
  Time: 10:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/sys/role.js"></script>
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
<table id="table_role">

</table>

<div id="role_tb" style="padding: 5px;">
    <div style="margin-bottom: 5px;">
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onclick="role_obj.add()">添加</a>
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-edit" onclick="role_obj.edit()">修改</a>
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onclick="role_obj.remove()">删除</a>
        <a id="save" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-reload" onclick="role_obj.reload()">刷新</a>
        <a id="redo" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-redo" onclick="role_obj.redo()">取消选择</a>
    </div>
    <div style="padding: 0 0 0 7px;">
        查询角色:<input class="textbox" type="text" name="roleName_keyword"/>
        <a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="role_obj.search()">查询</a>
    </div>
</div>

<form id="role_add" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
    <input class="textbox" name="id" id="id" type="hidden">
    <p>角色名称：<input class="textbox" name="roleName" id="roleName" type="text" style="width: 200px;"></p>
    <p>描述：<input class="textbox" name="description" id="description" type="text" style="width: 200px;"></p>
    <p>权限：<input class="easyui-combobox" name="permissionId" id="permissionId" style="width:250px"/></p>
</form>


<form id="role_edit" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
    <input class="textbox" name="id_edit" id="id_edit" type="hidden">
    <p>角色名称：<input class="textbox" name="roleName_edit" id="wno" type="text" style="width: 200px;"></p>
    <p>描述：<input class="textbox" name="description_edit" id="wpassword" type="text" style="width: 200px;"></p>
    <p>权限：<input class="easyui-combobox" name="permissionId" id="permissionId_edit" style="width:250px"/></p>
</form>







