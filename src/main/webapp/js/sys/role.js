/**
 * 角色选项卡
 * @author
 * @date 2020/7/29 15:04
 */
$(function() {
    role_obj = {
        reload : function() {
            $('input[name="roleName_keyword"]').val("");
            $('#table_role').datagrid('reload',{roleName: ''});
        },
        redo : function() {
            $('#table_role').datagrid('unselectAll');
        },
        search : function() {
            // alert($('input[name="keyword"]').val());
            $('#table_role').datagrid('load',{
                roleName : $.trim($('input[name="roleName_keyword"]').val()),
            });
        },
        add : function() {
            $('#role_add').dialog('open');
            $('input[name="roleName"]').focus();
        },
        edit : function(){
            var rows = $('#table_role').datagrid('getSelections');
            // console.log(rows);
            if (rows.length>1) {
                $.messager.alert('警告','编辑时只能选择一条进行修改！','waring');
            }else if (rows.length == 0) {
                $.messager.alert('警告','请选择一条记录进行编辑！','waring');
            } else if(rows.length == 1){
                //alert(rows[0].wid);
                $.ajax({
                    url : '/admin/role/edit',
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
                            // console.log(data);
                            // $("input[name='permissionId']").combobox("loadData", data.data.perId);
                            $('#role_edit').form('load',{
                                role_id_edit : data.data.id,
                                roleName_edit : data.data.roleName,
                                description_edit : data.data.description,
                                permissionId : data.data.perId
                            }).dialog('open');
                        }else {
                            $.messager.alert('请求失败！','未知错误！请重试','warning');
                        }
                    }

                });


            }
        },

        remove : function() {
            var rows = $('#table_role').datagrid('getSelections');
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
                            url : '/admin/role/delete',
                            type : 'POST',
                            data : {
                                ids : ids.join(','),
                            },
                            dataType : 'json',
                            //传递之前
                            beforeSend : function() {
                                $('#table_role').datagrid('loading');
                            },

                            success : function(data) {
                                $('#table_role').datagrid('loaded');
                                if (data.code == '1') {
                                    console.log("2");
                                    $('#table_role').datagrid('reload');
                                    $('#table_role').datagrid('unselectAll');
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



    $('#table_role').datagrid({
        title : '管理员列表',
        url : '/admin/role/list',
        fitColumns : true,
        border : false,
        rownumbers : true,
        columns : [[
            {
                title : '编号',
                field : 'id',
                width : 100,
                sortable : true,
                checkbox : true,
                align : 'center'
            },
            {
                title : '角色',
                field : 'roleName',
                width : 100,
                sortable : true,
                align : 'center'
            },{
                title : '描述',
                field : 'description',
                width : 100,
                sortable : true,
                align : 'center'
            },{
                title: '权限',
                field: 'permissionName',
                width: 100,
                align: "center"
            }
        ]],

        pagination : true,
        pageNumber : 1,
        pageSize : 5,
        pageList : [5,10,15,20],
        pagePosition : 'bottom',
        sortName : 'id',
        sortOrder : 'DESC',
        remoteSort : true,
        toolbar : '#role_tb'

    });
    //添加弹窗
    $('#role_add').dialog({
        width : 350,
        title : '新增管理',
        iconCls : 'icon-add',
        modal : true,
        closed : true,
        buttons : [{
            text : '添加',
            iconCls : 'icon-add',
            handler : function() {
                if ($('#role_add').form('validate')) {
                    $.ajax({
                        url : '/admin/role/save',
                        type : 'post',
                        data : {
                            roleName : $('input[name="roleName"]').val(),
                            description : $('input[name="description"]').val(),
                            permissionId : $('#permissionId').combobox('getValues').toString()
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
                                $('#role_add').dialog('close').form('reset');
                                $('#table_role').datagrid('reload');
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
                $('#role_add').dialog('close').form('reset');
            },
        }]
    });
    //编辑弹窗
    $('#role_edit').dialog({
        width : 350,
        title : '编辑管理',
        iconCls : 'icon-edit',
        modal : true,
        closed : true,
        buttons : [{
            text : '修改',
            iconCls : 'icon-edit',
            handler : function() {
                if ($('#role_edit').form('validate')) {
                    $.ajax({
                        url : '/admin/role/save',
                        type : 'post',
                        data : {
                            id : $('#role_id_edit').val(),
                            roleName : $('input[name="roleName_edit"]').val(),
                            description : $('input[name="description_edit"]').val(),
                            permissionId : $('#permissionId_edit').combobox('getValues').toString()
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
                                $('#role_edit').dialog('close').form('reset');
                                $('#table_role').datagrid('reload');
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
                $('#role_edit').dialog('close').form('reset');
            },
        }]
    });



    //账号验证
    $('input[name="roleName"]').validatebox({
        required : true,
        validType : 'length[2,20]',
        missingMessage : '请输入新账号',
        invalidMessage : '账号在2~20位',
    });
    //密码验证
    $('input[name="description"]').validatebox({
        required : true,
        missingMessage : '请输入角色描述',
    });
    //修改密码验证
    $('input[name="description_edit"]').validatebox({
        required : true,
        missingMessage : '请输入角色描述'
    });

    //查询验证
    $('input[name="roleName_keyword"]').validatebox({
        required : true,
        missingMessage : '请输入角色名'
    });

    $('input[name="roleId"]').validatebox({
        required : true,
        missingMessage : '请选择角色'
    });

    $("input[name='permissionId']").combobox({
        multiple: true,
        mode: 'remote',
        valueField: 'id',
        textField: 'permissionName',
        panelHeight:'auto',
        loader: function (param,success,error) {
            $.ajax({
                url: '/admin/role/getPermissions',
                method: 'get',
                dataType: 'json',
                success: function(data){
                    var items = $.map(data.data, function(item){
                        return {
                            id: item.id,
                            permissionName: item.permissionName
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
        $("#permissionId_edit").combobox({
            multiple: true,
            mode: 'remote',
            valueField: 'id',
            textField: 'permissionName',
            panelHeight:'auto',
            loader: function (param,success,error) {
                $.ajax({
                    url: '/admin/role/getPermissions',
                    method: 'get',
                    dataType: 'json',
                    success: function(data){
                        var items = $.map(data.data, function(item){
                            return {
                                id: item.id,
                                permissionName: item.permissionName
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
        $("#permissionId").combobox({
            multiple: true,
            mode: 'remote',
            valueField: 'id',
            textField: 'permissionName',
            panelHeight:'auto',
            loader: function (param,success,error) {
                $.ajax({
                    url: '/admin/role/getPermissions',
                    method: 'get',
                    dataType: 'json',
                    success: function(data){
                        var items = $.map(data.data, function(item){
                            return {
                                id: item.id,
                                permissionName: item.permissionName
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
        $('#table_role').datagrid('reload');
    })
});