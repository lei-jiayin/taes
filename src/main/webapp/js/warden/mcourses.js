/**
 * 课程
 */
$(function() {
	courses_tool = {
		reload : function() {
			$('#mcourses').datagrid('reload');
		},
		redo : function() {
			$('#mcourses').datagrid('unselectAll');
		},
			
		search : function() {
			alert($('input[name="keyword"]').val());
			$('#mcourses').datagrid('load',{
				coursesName : $.trim($('input[name="keyword"]').val()),
			});
		},
		add : function() {
			$('#courses_add').dialog('open');
			$('input[name="coursesNo"]').focus();
		},
		edit : function(){
			var rows = $('#mcourses').datagrid('getSelections');
			console.log(rows);
			if (rows.length>1) {
				$.messager.alert('警告','编辑时只能选择一条进行修改！','waring');
			}else if (rows.length == 0) {
				$.messager.alert('警告','请选择一条记录进行编辑！','waring');
			} else if(rows.length == 1){
				$.ajax({
					url : 'courses_edit.action',
					type : 'post',
					data : {
						coursesId : rows[0].coursesId,
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
							
							$('#courses_edit').form('load',{
								coursesId_edit : data.coursesId,
								coursesNo_edit : data.coursesNo,
								coursesName_edit : data.coursesName,
								credits_edit : data.credits, 
							}).dialog('open');
						}else {
							$.messager.alert('请求失败！','未知错误！请重试','warning');
						}
					}
				
				});
				
				
			}
		},
		
		remove : function() {
			var rows = $('#mcourses').datagrid('getSelections');
			if (rows.length>0) {
				$.messager.confirm('确定操作','确认删除这些数据？',function(flag){
					if (flag) {
						var ids=[];
						for (var i = 0; i < rows.length; i++) {
							ids.push(rows[i].coursesId);
						}
						//console.log(ids.join(','));
						//以ajax方式提交给后台删除所选记录
						$.ajax({
							url : 'courses_delete.action',
							type : 'POST',
							data : {
								ids : ids.join(','),
							},
							dataType : 'text',
							//传递之前
							beforeSend : function() {
								$('#mcourses').datagrid('loading');
							},
							
							success : function(data) {
								if (data) {
									//alert(data);
									$('#mcourses').datagrid('loaded');
									$('#mcourses').datagrid('load');
									$('#mcourses').datagrid('unselectAll');
									$.messager.show({
										title : '提示',
										msg : data + '个课程被删除！',
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
	
	
	
	$('#mcourses').datagrid({
		title : '课程列表',
		url : 'showCourses.action',
		fitColumns : true,
		border : false,
		rownumbers : true,
		columns : [[
			{
				title : '主键',
				field : 'coursesId',
				width : 100,
				sortable : true,
				checkbox : true,
				align : 'center'
			},
			{
				title : '课程编号',
				field : 'coursesNo',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '课程名称',
				field : 'coursesName',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '学分',
				field : 'credits',
				width : 100,
				sortable : true,
				align : 'center'
			},
		]],
		
		pagination : true,
		pageNumber : 1,
		pageSize : 5,
		pageList : [5,10,15,20],
		pagePosition : 'bottom',
		sortName : 'coursesNo',
		sortOrder : 'ASC',
		remoteSort : true,
		toolbar : '#courses_tools'
		
	});
	//添加弹窗
	$('#courses_add').dialog({
		width : 350,
		title : '新增课程',
		iconCls : 'icon-add',
		modal : true,
		closed : true,
		buttons : [{
			text : '添加',
			iconCls : 'icon-add',
			handler : function() {
				if ($('#courses_add').form('validate')) {
					//alert($('#profession').combobox('getValue'));
					$.ajax({
						url : 'courses_add.action',
						type : 'post',
						data : {
							coursesNo : $('input[name="coursesNo"]').val(),
							coursesName : $('input[name="coursesName"]').val(),
							credits : $('input[name="credits"]').val(),
						},
						beforeSend : function() {
							$.messager.progress({
								text : '正在新增中。。。',
							});
						},
						success : function(data,response,status) {
							$.messager.progress('close');
							if (data>0) {
								$.messager.show({
									title : '提示',
									msg : '添加课程信息成功！',
								});
								$('#courses_add').dialog('close').form('reset');
								$('#mcourses').datagrid('reload');
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
				$('#courses_add').dialog('close').form('reset');
			},
		}]
	});
	//编辑弹窗
	$('#courses_edit').dialog({
		width : 350,
		title : '编辑课程',
		iconCls : 'icon-edit',
		modal : true,
		closed : true,
		buttons : [{
			text : '修改',
			iconCls : 'icon-edit',
			handler : function() {
				//alert($('#profession_edit').combobox('getValue'));
				if ($('#courses_edit').form('validate')) {
					$.ajax({
						url : 'courses_update.action',
						type : 'post',
						data : {
							coursesId : $('input[name="coursesId_edit"]').val(),
							coursesNo : $('input[name="coursesNo_edit"]').val(),
							coursesName : $('input[name="coursesName_edit"]').val(),
							credits : $('input[name="credits_edit"]').val()
						},
						beforeSend : function() {
							$.messager.progress({
								text : '正在修改中。。。',
							});
						},
						success : function(data,response,status) {
							$.messager.progress('close');
							if (data>0) {
								$.messager.show({
									title : '提示',
									msg : '修改课程信息成功！',
								});
								$('#courses_edit').dialog('close').form('reset');
								$('#mcourses').datagrid('reload');
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
				$('#courses_edit').dialog('close').form('reset');
			},
		}]
	});
	
	
	
	//课程编号
	$('input[name="coursesNo"],input[name="coursesNo_edit"]').validatebox({
		required : true,
		validType : 'length[4,10]',
		missingMessage : '请输入编号',
		invalidMessage : '编号在4~10位',
	});
	/*$('input[name="coursesNo_edit"]').validatebox({
		required : true,
		validType : 'length[4,10]',
		missingMessage : '请输入编号',
		invalidMessage : '编号在4~10位',
	});*/
	//课程名称验证
	$('input[name="coursesName"],input[name="coursesName_edit"]').validatebox({
		required : true,
		missingMessage : '请输入课程名称',
	});
	//学分验证
	$('input[name="credits"],input[name="credits_edit"]').validatebox({
		required : true,
		validType : 'mone',
		missingMessage : '请输入课程学分',
	});
	
	//查询验证
	$('input[name="keyword"]').validatebox({
		required : true,
		missingMessage : '请输入课程名称关键字',
	});
	

});