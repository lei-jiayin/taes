<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/7/30
  Time: 14:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<script type="text/javascript" src="${pageContext.request.contextPath}/js/sys/menu.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/valitype.js"></script>

<link rel="stylesheet" href="${pageContext.request.contextPath}/css/warden/mwarden.css"/>

<style>
    .textbox{
        height:22px;
        padding : 0 2px;
    }
</style>
<table id="table_menu">

</table>

<div id="menu_tb" style="padding: 5px;">
    <div style="margin-bottom: 5px;">
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-add" onclick="menu_obj.add()">添加</a>
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-edit" onclick="menu_obj.edit()">修改</a>
        <a href="#" class="easyui-linkbutton" plain="true" iconCls="icon-remove" onclick="menu_obj.remove()">删除</a>
        <a id="save" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-reload" onclick="menu_obj.reload()">刷新</a>
        <a id="redo" href="#" class="easyui-linkbutton" plain="true" iconCls="icon-redo" onclick="menu_obj.redo()">取消选择</a>
    </div>
    <div style="padding: 0 0 0 7px;">
        查询菜单:<input class="textbox" type="text" name="text_keyword"/>
        <a href="#" class="easyui-linkbutton" iconCls="icon-search" onclick="menu_obj.search()">查询</a>
    </div>
</div>

<form id="menu_add" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
    <p>菜单：<input class="textbox" name="text" id="text" type="text" style="width: 200px;"></p>
    <p>链接：<input class="textbox" name="url" id="url" type="text" style="width: 200px;"></p>
    <p>状态：<input class="easyui-combobox" name="state" id="state" type="text" style="width: 200px;"></p>
    <p>父菜单：<input class="easyui-combobox" name="tid" id="tid" style="width:250px"/></p>
    <p>操作角色：<input class="easyui-combobox" name="roleId" id="roleId" style="width:250px"/></p>
    <%--<p>操作角色：<input class="easyui-combobox" name="menu_roleId" id="menu_roleId" style="width:250px"/></p>--%>
</form>


<form id="menu_edit" style="margin: 0;padding: 5px 0 0 25px;color: #333;">
    <input class="textbox" name="menu_id_edit" id="menu_id_edit" type="hidden">
    <p>菜单：<input class="textbox" name="text_edit" id="text_edit" type="text" style="width: 200px;"></p>
    <p>链接：<input class="textbox" name="url_edit" id="url_edit" type="text" style="width: 200px;"></p>
    <p>状态：<input class="easyui-combobox" name="state" id="state_edit" type="text" style="width: 200px;"></p>
    <p>父菜单：<input class="easyui-combobox" name="tid" id="tid_edit" style="width:250px"/></p>
    <p>操作角色：<input class="easyui-combobox" name="roleId" id="roleId_edit" style="width:250px"/></p>
    <%--<p>操作角色：<input class="easyui-combobox" name="menu_roleId" id="menu_roleId_edit" style="width:250px"/></p>--%>
</form>







