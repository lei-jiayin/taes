/**
 * 管理员选项卡js
 */
$(function() {
	obj = {
		reload : function() {
			$('#table1').datagrid('reload');
		},
		redo : function() {
			$('#table1').datagrid('unselectAll');
		},
			
		search : function() {
			// alert($('input[name="keyword"]').val());
			$('#table1').datagrid('load',{
				wname : $.trim($('input[name="keyword"]').val()),
			});
		},
		add : function() {
			$('#warden_add').dialog('open');
			$('input[name="wno"]').focus();
		},
		edit : function(){
			var rows = $('#table1').datagrid('getSelections');
			console.log(rows);
			if (rows.length>1) {
				$.messager.alert('警告','编辑时只能选择一条进行修改！','waring');
			}else if (rows.length == 0) {
				$.messager.alert('警告','请选择一条记录进行编辑！','waring');
			} else if(rows.length == 1){
				//alert(rows[0].wid);
				$.ajax({
					url : '/admin/warden/edit',
					type : 'post',
					data : {
						wid : rows[0].wid,
					},
					beforeSend : function() {
						$.messager.progress({
							text : '正在请求中。。。',
						});
					},
					success : function(data,response,status) {
						$.messager.progress('close');
						if (data) {
							console.log(data);
							
							$('#warden_edit').form('load',{
                                wid_edit : data.data.wid,
								wno_edit : data.data.wno,
								wname_edit : data.data.wname,
								tel_edit : data.data.tel,
								
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
							ids.push(rows[i].wid);
						}
						//console.log(ids.join(','));
						//以ajax方式提交给后台删除所选记录
						$.ajax({
							url : 'delete.action',
							type : 'POST',
							data : {
								ids : ids.join(','),
							},
							dataType : 'text',
							//传递之前
							beforeSend : function() {
								$('#table1').datagrid('loading');
							},
							
							success : function(data) {
								if (data) {
									alert(data);
									$('#table1').datagrid('loaded');
									$('#table1').datagrid('load');
									$('#table1').datagrid('unselectAll');
									$.messager.show({
										title : '提示',
										msg : data + '个管理被删除！',
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
	
	
	
	$('#table1').datagrid({
		title : '管理员列表',
		url : '/admin/warden/mwarden',
		fitColumns : true,
		border : false,
		rownumbers : true,
		columns : [[
			{
				title : '编号',
				field : 'wid',
				width : 100,
				sortable : true,
				checkbox : true,
				align : 'center'
			},
			{
				title : '账号',
				field : 'wno',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '姓名',
				field : 'wname',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '电话',
				field : 'tel',
				width : 100,
				align : 'center'
			}
		]],
		
		pagination : true,
		pageNumber : 1,
		pageSize : 5,
		pageList : [5,10,15,20],
		pagePosition : 'bottom',
		sortName : 'wid',
		sortOrder : 'ASC',
		remoteSort : true,
		toolbar : '#tb'
		
	});
	//添加弹窗
	$('#warden_add').dialog({
		width : 350,
		title : '新增管理',
		iconCls : 'icon-add',
		modal : true,
		closed : true,
		buttons : [{
			text : '添加',
			iconCls : 'icon-add',
			handler : function() {
				if ($('#warden_add').form('validate')) {
					$.ajax({
						url : '/admin/warden/save',
						type : 'post',
						data : {
							wno : $('input[name="wno"]').val(),
							wname : $('input[name="wname"]').val(),
							tel : $('input[name="tel"]').val(),
							wpassword : $('input[name="wpassword"]').val(),
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
								$('#warden_add').dialog('close').form('reset');
								$('#table1').datagrid('reload');
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
				$('#warden_add').dialog('close').form('reset');
			},
		}]
	});
	//编辑弹窗
	$('#warden_edit').dialog({
		width : 350,
		title : '编辑管理',
		iconCls : 'icon-edit',
		modal : true,
		closed : true,
		buttons : [{
			text : '修改',
			iconCls : 'icon-edit',
			handler : function() {
				if ($('#warden_edit').form('validate')) {
					$.ajax({
						url : '/admin/warden/save',
						type : 'post',
						data : {
							wid : $('input[name="wid_edit"]').val(),
							wno : $('input[name="wno_edit"]').val(),
							wname : $('input[name="wname_edit"]').val(),
							tel : $('input[name="tel_edit"]').val(),
							wpassword : $('input[name="wpassword_edit"]').val(),
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
								$('#warden_edit').dialog('close').form('reset');
								$('#table1').datagrid('reload');
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
				$('#warden_edit').dialog('close').form('reset');
			},
		}]
	});
	
	
	
	//账号验证
	$('input[name="wno"]').validatebox({
		required : true,
		validType : 'length[2,20]',
		missingMessage : '请输入新账号',
		invalidMessage : '账号在2~20位',
	});
	//姓名验证
	$('input[name="wname"],input[name="wName"]').validatebox({
		required : true,
		missingMessage : '请输入姓名',
	});
	//电话验证
	$('input[name="tel"],input[name="tel_edit"]').validatebox({
		required : true,
		validType : 'mobileAndTel',
		missingMessage : '请输入电话号码',
		//invalidMessage : '电话为8~11位号码',
	});
	//密码验证
	$('input[name="wpassword"]').validatebox({
		required : true,
		validType : 'length[3,10]',
		missingMessage : '请输入初始密码',
		invalidMessage : '密码长度为3~10位',
	});
	//修改密码验证
	$('input[name="wpassword_edit"]').validatebox({
		//required : true,
		validType : 'length[3,10]',
		//missingMessage : '请输入新密码',
		invalidMessage : '密码长度为3~10位',
	});
	
	//查询验证
	$('input[name="keyword"]').validatebox({
		required : true,
		missingMessage : '请输入姓名关键字',
	});
	
	
	
	
	
	
});