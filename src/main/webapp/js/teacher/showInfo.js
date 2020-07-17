/**
 * showInfo
 */
$(function() {
	obj = {
		reload : function() {
			$('#teacherInfo').datagrid('reload');
		},
		redo : function() {
			$('#teacherInfo').datagrid('unselectAll');
		},
		edit : function(){
			var rows = $('#teacherInfo').datagrid('getSelections');
			//console.log(rows);
			if (rows.length>1) {
				$.messager.alert('警告','编辑时只能选择一条进行修改！','waring');
			}else if (rows.length == 0) {
				$.messager.alert('警告','请选择一条记录进行编辑！','waring');
			} else if(rows.length == 1){
				$('#password_edit').dialog('open');
				$('input[name="password"]').focus();
			}
		},
	};
	
	
	
	$('#teacherInfo').datagrid({
		title : '用户信息',
		url : 'showInfo.action',
		fitColumns : true,
		border : false,
		rownumbers : true,
		columns : [[
			{
				title : '主键',
				field : 'teacherId',
				width : 100,
				checkbox : true,
				align : 'center'
			},
			{
				title : '教师号',
				field : 'teacherNo',
				width : 100,
				align : 'center'
			},
			{
				title : '姓名',
				field : 'teacherName',
				width : 100,
				align : 'center'
			},
			{
				title : '专业',
				field : 'profession3',
				width : 100,
				align : 'center',
			},
			{
				title : '学院',
				field : 'college3',
				width : 100,
				align : 'center',
			}
		]],
		pagination : true,
		pageNumber : 1,
		pageSize : 1,
		pageList : [1,2,3,4],
		pagePosition : 'bottom',
		sortName : 'teacherNo',
		sortOrder : 'ASC',
		remoteSort : true,
		toolbar : '#info_tools'
		
	});
	//编辑弹窗
	$('#password_edit').dialog({
		width : 350,
		title : '密码修改',
		iconCls : 'icon-edit',
		modal : true,
		closed : true,
		buttons : [{
			text : '修改',
			iconCls : 'icon-edit',
			handler : function() {
				if ($('#password_edit').form('validate')) {
					$.ajax({
						url : 'updatePassword.action',
						type : 'post',
						data : {
							password : $('input[name="password"]').val(),
						},
						beforeSend : function() {
							$.messager.progress({
								text : '正在修改中。。。',
							});
						},
						success : function(data,response,status) {
							$.messager.progress('close');
							if (data) {
								$.messager.show({
									title : '提示',
									msg : '修改密码成功！',
								});
								$('#password_edit').dialog('close').form('reset');
								$('#showInfo').datagrid('reload');
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
				$('#password_edit').dialog('close').form('reset');
			},
		}]
	});
	
	
	//密码验证
	$('input[name="password"]').validatebox({
		required : true,
		validType : 'length[3,10]',
		missingMessage : '请输入新密码',
		invalidMessage : '密码长度为3~10位',
	});

});