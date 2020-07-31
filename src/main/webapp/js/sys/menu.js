/**
 * 菜单选项卡
 * @author
 * @date 2020/7/30 15:04
 */
$(function() {
    menu_obj = {
        reload : function() {
            $('input[name="text_keyword"]').val("");
            $('#table_menu').datagrid('reload',{text: ''});
        },
        redo : function() {
            $('#table_menu').datagrid('unselectAll');
        },
        search : function() {
            // alert($('input[name="keyword"]').val());
            $('#table_menu').datagrid('load',{
                text : $.trim($('input[name="text_keyword"]').val()),
            });
        },
        add : function() {
            $('#menu_add').dialog('open');
            $('input[name="text"]').focus();
        },
        edit : function(){
            var rows = $('#table_menu').datagrid('getSelections');
            // console.log(rows);
            if (rows.length>1) {
                $.messager.alert('警告','编辑时只能选择一条进行修改！','waring');
            }else if (rows.length == 0) {
                $.messager.alert('警告','请选择一条记录进行编辑！','waring');
            } else if(rows.length == 1){
                //alert(rows[0].wid);
                $.ajax({
                    url : '/sys/menu/edit',
                    type : 'post',
                    data : {
                        id : rows[0].id,
                    },
                    beforeSend : function() {
                        $.messager.progress({
                            text : '正在请求中。。。',
                        });
                    },
                    success : function(data,response,status) {
                        $.messager.progress('close');
                        if (data.code == 1) {
                            console.log(data);
                            // $("input[name='permissionId']").combobox("loadData", data.data.perId);
                            $('#menu_edit').form('load',{
                                menu_id_edit : data.data.id,
                                text_edit : data.data.text,
                                url_edit : data.data.url,
                                state : data.data.state,
                                tid : data.data.tid,
                                roleId : data.data.roId ? data.data.roId:[]
                            }).dialog('open');
                        }else {
                            $.messager.alert('请求失败！','未知错误！请重试','warning');
                        }
                    }

                });


            }
        },

        remove : function() {
            var rows = $('#table_menu').datagrid('getSelections');
            if (rows.length>0) {
                $.messager.confirm('确定操作','确认删除这些数据？',function(flag){
                    if (flag) {
                        var ids=[];
                        for (var i = 0; i < rows.length; i++) {
                            ids.push(rows[i].id);
                        }
                        //console.log(ids.join(','));
                        //以ajax方式提交给后台删除所选记录
                        $.ajax({
                            url : '/sys/menu/delete',
                            type : 'POST',
                            data : {
                                ids : ids.join(','),
                            },
                            dataType : 'json',
                            //传递之前
                            beforeSend : function() {
                                $('#table_menu').datagrid('loading');
                            },

                            success : function(data) {
                                $('#table_menu').datagrid('loaded');
                                if (data.code == '1') {
                                    console.log("2");
                                    $('#table_menu').datagrid('reload');
                                    $('#table_menu').datagrid('unselectAll');
                                    $.messager.show({
                                        title : '提示',
                                        msg : '删除成功！'
                                    });
                                }else {
                                    $.messager.show({
                                        title : '提示',
                                        msg : data.message
                                    });
                                }
                            }
                        });
                    }
                });
            }else {
                $.messager.alert('提示','请选择要删除的数据','info');
            }
        }
    };



    $('#table_menu').datagrid({
        title : '管理员列表',
        url : '/sys/menu/list',
        fitColumns : true,
        border : false,
        rownumbers : true,
        columns : [[
            {
                title : '编号',
                field : 'id',
                width : 100,
                checkbox : true,
                align : 'center'
            },
            {
                title : '菜单',
                field : 'text',
                width : 100,
                align : 'center'
            },{
                title : '链接',
                field : 'url',
                width : 100,
                align : 'center'
            },{
                title : '状态',
                field : 'stateName',
                width : 100,
                align : 'center'
            },{
                title : '父菜单',
                field : 'tidText',
                width : 100,
                align : 'center'
            },{
                title: '操作角色',
                field: 'roleName',
                width: 100,
                align: "center"
            }
        ]],

        pagination : true,
        pageNumber : 1,
        pageSize : 5,
        pageList : [5,10,15,20],
        pagePosition : 'bottom',
        sortName : 'tid',
        sortOrder : 'asc',
        remoteSort : true,
        toolbar : '#menu_tb'

    });
    //添加弹窗
    $('#menu_add').dialog({
        width : 350,
        title : '新增管理',
        iconCls : 'icon-add',
        modal : true,
        closed : true,
        buttons : [{
            text : '添加',
            iconCls : 'icon-add',
            handler : function() {
                if ($('#menu_add').form('validate')) {
                    $.ajax({
                        url : '/sys/menu/save',
                        type : 'post',
                        data : {
                            text : $('input[name="text"]').val(),
                            url : $('input[name="url"]').val(),
                            state : $('#state').combobox('getValue').toString(),
                            tid : $('#tid').combobox('getValue').toString(),
                            roleId : $('#roleId').combobox('getValues').toString()
                        },
                        beforeSend : function() {
                            $.messager.progress({
                                text : '正在新增中。。。',
                            });
                        },
                        success : function(data,response,status) {
                            $.messager.progress('close');
                            if (data.code==1) {
                                $.messager.show({
                                    title : '提示',
                                    msg : '添加权限成功！',
                                });
                                $('#menu_add').dialog('close').form('reset');
                                $('#table_menu').datagrid('reload');
                            }else {
                                $.messager.alert('新增失败！','未知错误！请重试','warning');
                            }
                        }
                    });
                }
            },
        },{
            text : '取消',
            iconCls : 'icon-redo',
            handler : function() {
                $('#menu_add').dialog('close').form('reset');
            },
        }]
    });
    //编辑弹窗
    $('#menu_edit').dialog({
        width : 350,
        title : '编辑管理',
        iconCls : 'icon-edit',
        modal : true,
        closed : true,
        buttons : [{
            text : '修改',
            iconCls : 'icon-edit',
            handler : function() {
                // alert($('input[name="roleId"]').combobox('getValues').toString());
                if ($('#menu_edit').form('validate')) {
                    $.ajax({
                        url : '/sys/menu/save',
                        type : 'post',
                        data : {
                            id : $('#menu_id_edit').val(),
                            text : $('input[name="text_edit"]').val(),
                            url : $('input[name="url_edit"]').val(),
                            state : $('#state_edit').combobox('getValue').toString(),
                            tid : $('#tid_edit').combobox('getValue').toString(),
                            roleId : $('#roleId_edit').combobox('getValues').toString()
                        },
                        beforeSend : function() {
                            $.messager.progress({
                                text : '正在修改中。。。',
                            });
                        },
                        success : function(data,response,status) {
                            $.messager.progress('close');
                            if (data.code==1) {
                                $.messager.show({
                                    title : '提示',
                                    msg : '修改管理员成功！',
                                });
                                $('#menu_edit').dialog('close').form('reset');
                                $('#table_menu').datagrid('reload');
                            }else {
                                $.messager.alert('修改失败！','未知错误！请重试','warning');
                            }
                        }

                    });
                }
            },
        },{
            text : '取消',
            iconCls : 'icon-redo',
            handler : function() {
                $('#menu_edit').dialog('close').form('reset');
            },
        }]
    });



    //账号验证
    $('input[name="text"]').validatebox({
        required : true,
        missingMessage : '请输入菜单名称',
    });
    //密码验证
    $('input[name="state"]').validatebox({
        required : true,
        missingMessage : '请选择状态',
    });
    //修改密码验证
    $('input[name="text_edit"]').validatebox({
        required : true,
        missingMessage : '请输入菜单名称',
    });

    //查询验证
    $('input[name="text_keyword"]').validatebox({
        required : true,
        missingMessage : '请输入菜单名'
    });

    $('input[name="roleId"]').validatebox({
        required : true,
        missingMessage : '请选择角色'
    });

    var stateData = [{"state":"closed","stateName":"关闭"},{"state":"open","stateName":"开启"}];
    $("input[name='state']").combobox({
        panelHeight:'auto',
        valueField: 'state',
        textField: 'stateName',
        data: stateData
    });

    $("input[name='tid']").combobox({
        mode: 'remote',
        valueField: 'id',
        textField: 'text',
        panelHeight:'auto',
        loader: function (param,success,error) {
            $.ajax({
                url: '/sys/menu/getTid',
                method: 'get',
                dataType: 'json',
                success: function(data){
                    var items = $.map(data.data, function(item){
                        return {
                            id: item.tid,
                            text: item.text
                        };
                    });
                    success(items);
                },
                error: function(){
                    error.apply(this, arguments);
                }
            });
        }
    });

    $("input[name='roleId']").combobox({
        multiple: true,
        mode: 'remote',
        valueField: 'id',
        textField: 'roleName',
        panelHeight:'auto',
        loader: function (param,success,error) {
            $.ajax({
                url: '/admin/user/getRoles',
                method: 'get',
                dataType: 'json',
                success: function(data){
                    var items = $.map(data.data, function(item){
                        return {
                            id: item.id,
                            roleName: item.roleName
                        };
                    });
                    success(items);
                },
                error: function(){
                    error.apply(this, arguments);
                }
            });
        }
    });
    $(".tabs-inner").click(function(){
        $("#role_edit").combobox({
            multiple: true,
            mode: 'remote',
            valueField: 'id',
            textField: 'roleName',
            panelHeight:'auto',
            loader: function (param,success,error) {
                $.ajax({
                    url: '/admin/user/getRoles',
                    method: 'get',
                    dataType: 'json',
                    success: function(data){
                        var items = $.map(data.data, function(item){
                            return {
                                id: item.id,
                                roleName: item.roleName
                            };
                        });
                        success(items);
                    },
                    error: function(){
                        error.apply(this, arguments);
                    }
                });
            }
        });
        $("#roleId").combobox({
            multiple: true,
            mode: 'remote',
            valueField: 'id',
            textField: 'roleName',
            panelHeight:'auto',
            loader: function (param,success,error) {
                $.ajax({
                    url: '/admin/user/getRoles',
                    method: 'get',
                    dataType: 'json',
                    success: function(data){
                        var items = $.map(data.data, function(item){
                            return {
                                id: item.id,
                                roleName: item.roleName
                            };
                        });
                        success(items);
                    },
                    error: function(){
                        error.apply(this, arguments);
                    }
                });
            }
        });
        $('#table_menu').datagrid('reload');
    })
});