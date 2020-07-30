/**
 * 系统用户选项卡js
 */
$(function() {
	user_obj = {
		reload : function() {
            $('input[name="userName_keyword"]').val("");
			$('#table_user').datagrid('reload',{userNam: ''});
		},
		redo : function() {
			$('#table_user').datagrid('unselectAll');
		},
		search : function() {
			// alert($('input[name="keyword"]').val());
			$('#table_user').datagrid('load',{
				userName : $.trim($('input[name="userName_keyword"]').val()),
			});
		},
		add : function() {
			$('#user_add').dialog('open');
			$('input[name="userName"]').focus();
		},
		edit : function(){
			var rows = $('#table_user').datagrid('getSelections');
			// console.log(rows);
			if (rows.length>1) {
				$.messager.alert('警告','编辑时只能选择一条进行修改！','waring');
			}else if (rows.length == 0) {
				$.messager.alert('警告','请选择一条记录进行编辑！','waring');
			} else if(rows.length == 1){
				//alert(rows[0].wid);
				$.ajax({
					url : '/admin/user/edit',
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
						if (data) {
							// console.log(data);
							$('#user_edit').form('load',{
                                user_id_edit : data.data.id,
								userName_edit : data.data.userName,
                                roleId : data.data.roleId
							}).dialog('open');
						}else {
							$.messager.alert('请求失败！','未知错误！请重试','warning');
						}
					}
				
				});
				
				
			}
		},
		
		remove : function() {
			var rows = $('#table1').datagrid('getSelections');
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
							url : '/admin/user/delete',
							type : 'POST',
							data : {
								ids : ids.join(','),
							},
							dataType : 'text',
							//传递之前
							beforeSend : function() {
								$('#table_user').datagrid('loading');
							},
							
							success : function(data) {
								if (data) {
									alert(data);
									$('#table_user').datagrid('loaded');
									$('#table_user').datagrid('load');
									$('#table_user').datagrid('unselectAll');
									$.messager.show({
										title : '提示',
										msg : data + '条数据被删除！',
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
	
	
	
	$('#table_user').datagrid({
		title : '管理员列表',
		url : '/admin/user/list',
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
				title : '账号',
				field : 'userName',
				width : 100,
				sortable : true,
				align : 'center'
			},{
				title: '角色',
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
		sortName : 'id',
		sortOrder : 'DESC',
		remoteSort : true,
		toolbar : '#user_tb'
		
	});
	//添加弹窗
	$('#user_add').dialog({
		width : 350,
		title : '新增管理',
		iconCls : 'icon-add',
		modal : true,
		closed : true,
		buttons : [{
			text : '添加',
			iconCls : 'icon-add',
			handler : function() {
				if ($('#user_add').form('validate')) {
					$.ajax({
						url : '/admin/user/save',
						type : 'post',
						data : {
							userName : $('input[name="userName"]').val(),
							password : $('input[name="password"]').val(),
							roleId : $('input[name="roleId"]').val()
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
									msg : '添加管理员成功！',
								});
								$('#user_add').dialog('close').form('reset');
								$('#table_user').datagrid('reload');
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
				$('#user_add').dialog('close').form('reset');
			},
		}]
	});
	//编辑弹窗
	$('#user_edit').dialog({
		width : 350,
		title : '编辑管理',
		iconCls : 'icon-edit',
		modal : true,
		closed : true,
		buttons : [{
			text : '修改',
			iconCls : 'icon-edit',
			handler : function() {
				if ($('#user_edit').form('validate')) {
					$.ajax({
						url : '/admin/user/save',
						type : 'post',
						data : {
							id : $('#user_id_edit').val(),
							userName : $('input[name="userName_edit"]').val(),
							password : $('input[name="password_edit"]').val(),
							roleId : $('#roleId_edit').val()
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
								$('#user_edit').dialog('close').form('reset');
								$('#table_user').datagrid('reload');
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
				$('#user_edit').dialog('close').form('reset');
			},
		}]
	});
	
	
	
	//账号验证
	$('input[name="userName"]').validatebox({
		required : true,
		validType : 'length[2,20]',
		missingMessage : '请输入新账号',
		invalidMessage : '账号在2~20位',
	});
	//密码验证
	$('input[name="password"]').validatebox({
		required : true,
		validType : 'length[3,10]',
		missingMessage : '请输入初始密码',
		invalidMessage : '密码长度为3~10位',
	});
	//修改密码验证
	$('input[name="password_edit"]').validatebox({
		//required : true,
		validType : 'length[3,10]',
		//missingMessage : '请输入新密码',
		invalidMessage : '密码长度为3~10位',
	});
	
	//查询验证
	$('input[name="userName_keyword"]').validatebox({
		required : true,
		missingMessage : '请输入用户账号',
	});

	$('input[name="roleId"]').validatebox({
		required : true,
		missingMessage : '请选择角色'
	});
	$("input[name='roleId']").combobox({
            // url: '/admin/user/getRoles',
            // method: 'get',
            mode: 'remote',
            valueField: 'id',
            textField: 'roleName',
            panelHeight:'auto',
            loader: function (param,success,error) {
                // var q = param.q || '';
                // if (q.length <= 1){return false}
                // console.log(param);
                $.ajax({
                    url: '/admin/user/getRoles',
                    method: 'get',
                    dataType: 'json',
                    /*data: {
                        featureClass: "P",
                        style: "full",
                        maxRows: 20,
                        name_startsWith: q
                    },*/
                    success: function(data){
                        // console.log(data);
                        var items = $.map(data.data, function(item){
                            // console.log(item.id);
                            // console.log(item.roleName);
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
        $("#roleId_edit").combobox({
            // url: '/admin/user/getRoles',
            // method: 'get',
            mode: 'remote',
            valueField: 'id',
            textField: 'roleName',
            panelHeight:'auto',
            loader: function (param,success,error) {
                // var q = param.q || '';
                // if (q.length <= 1){return false}
                // console.log(param);
                $.ajax({
                    url: '/admin/user/getRoles',
                    method: 'get',
                    dataType: 'json',
                    /*data: {
                        featureClass: "P",
                        style: "full",
                        maxRows: 20,
                        name_startsWith: q
                    },*/
                    success: function(data){
                        // console.log(data);
                        var items = $.map(data.data, function(item){
                            // console.log(item.id);
                            // console.log(item.roleName);
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
            // url: '/admin/user/getRoles',
            // method: 'get',
            mode: 'remote',
            valueField: 'id',
            textField: 'roleName',
            panelHeight:'auto',
            loader: function (param,success,error) {
                // var q = param.q || '';
                // if (q.length <= 1){return false}
                // console.log(param);
                $.ajax({
                    url: '/admin/user/getRoles',
                    method: 'get',
                    dataType: 'json',
                    /*data: {
                        featureClass: "P",
                        style: "full",
                        maxRows: 20,
                        name_startsWith: q
                    },*/
                    success: function(data){
                        // console.log(data);
                        var items = $.map(data.data, function(item){
                            // console.log(item.id);
                            // console.log(item.roleName);
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
        $('#table_user').datagrid('reload');
    })
});