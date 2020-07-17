/**
 * 考试信息
 */
$(function() {
	examination_tool = {
		reload : function() {
			$('#mexamination').datagrid('reload');
		},
		redo : function() {
			$('#mexamination').datagrid('unselectAll');
		},
			
		search : function() {
			//alert($('input[name="keyword"]').val());
			$('#mexamination').datagrid('load',{
				exName : $.trim($('input[name="examinationName"]').val()),
			});
		},
		add : function() {
			$('#examination_add').dialog('open');
			$('input[name="exNo"]').focus();
		},
		edit : function(){
			var rows = $('#mexamination').datagrid('getSelections');
			console.log(rows);
			if (rows.length>1) {
				$.messager.alert('警告','编辑时只能选择一条进行修改！','waring');
			}else if (rows.length == 0) {
				$.messager.alert('警告','请选择一条记录进行编辑！','waring');
			} else if(rows.length == 1){
				//alert(rows[0].examinationId);
				$.ajax({
					url : 'examination_edit.action',
					type : 'post',
					data : {
						exId : rows[0].exId,
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
							
							$('#examination_edit').form('load',{
								exId_edit : data.exId,
								exNo_edit : data.exNo,
								exName_edit : data.exName,
								exTime_edit : data.exTime, 
								address_edit : data.address, 
								profession2_edit : data.profession2,
								grade_edit : data.grade,
								
							}).dialog('open');
						}else {
							$.messager.alert('请求失败！','未知错误！请重试','warning');
						}
					}
				
				});
				
				
			}
		},
		
		remove : function() {
			var rows = $('#mexamination').datagrid('getSelections');
			if (rows.length>0) {
				$.messager.confirm('确定操作','确认删除这些数据？',function(flag){
					if (flag) {
						var ids=[];
						for (var i = 0; i < rows.length; i++) {
							ids.push(rows[i].exId);
						}
						//console.log(ids.join(','));
						//以ajax方式提交给后台删除所选记录
						$.ajax({
							url : 'examination_delete.action',
							type : 'POST',
							data : {
								ids : ids.join(','),
							},
							dataType : 'text',
							//传递之前
							beforeSend : function() {
								$('#mexamination').datagrid('loading');
							},
							
							success : function(data) {
								if (data) {
									//alert(data);
									$('#mexamination').datagrid('loaded');
									$('#mexamination').datagrid('load');
									$('#mexamination').datagrid('unselectAll');
									$.messager.show({
										title : '提示',
										msg : data + '个考试被删除！',
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
	
	
	
	$('#mexamination').datagrid({
		title : '考试列表',
		url : 'showExamination.action',
		fitColumns : true,
		border : false,
		rownumbers : true,
		columns : [[
			{
				title : '主键',
				field : 'exId',
				width : 100,
				sortable : true,
				checkbox : true,
				align : 'center'
			},
			{
				title : '考试编号',
				field : 'exNo',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '考试名称',
				field : 'exName',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '考试时间',
				field : 'exTime',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '考试地点',
				field : 'address',
				width : 100,
				align : 'center'
			},
			{
				title : '考试专业',
				field : 'profession2',
				width : 100,
				align : 'center',
			},
			{
				title : '考试年级',
				field : 'grade',
				width : 100,
				align : 'center',
			}
		]],
		
		pagination : true,
		pageNumber : 1,
		pageSize : 5,
		pageList : [5,10,15,20],
		pagePosition : 'bottom',
		sortName : 'exNo',
		sortOrder : 'ASC',
		remoteSort : true,
		toolbar : '#examination_tools'
		
	});
	//添加弹窗
	$('#examination_add').dialog({
		width : 350,
		title : '新增考试',
		iconCls : 'icon-add',
		modal : true,
		closed : true,
		buttons : [{
			text : '添加',
			iconCls : 'icon-add',
			handler : function() {
				if ($('#examination_add').form('validate')) {
					//alert($('#profession').combobox('getValue'));
					$.ajax({
						url : 'examination_add.action',
						type : 'post',
						data : {
							exNo : $('input[name="exNo"]').val(),
							exName : $('input[name="exName"]').val(),
							exTime : $('input[name="exTime"]').val(),
							address : $('input[name="address"]').val(),
							profession2 : $('input[name="profession2"]').val(),
							grade : $('input[name="grade"]').val(),
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
									msg : '添加考试信息成功！',
								});
								$('#examination_add').dialog('close').form('reset');
								$('#mexamination').datagrid('reload');
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
				$('#examination_add').dialog('close').form('reset');
			},
		}]
	});
	//编辑弹窗
	$('#examination_edit').dialog({
		width : 350,
		title : '编辑考试',
		iconCls : 'icon-edit',
		modal : true,
		closed : true,
		buttons : [{
			text : '修改',
			iconCls : 'icon-edit',
			handler : function() {
				//alert($('#professionalClass_edit').combobox('getValue'));
				if ($('#examination_edit').form('validate')) {
					$.ajax({
						url : 'examination_update.action',
						type : 'post',
						data : {
							exId : $('input[name="exId_edit"]').val(),
							exNo : $('input[name="exNo_edit"]').val(),
							exName : $('input[name="exName_edit"]').val(),
							exTime : $('input[name="exTime_edit"]').val(),
							address : $('input[name="address_edit"]').val(),
							profession2 : $('input[name="profession2_edit"]').val(),
							grade : $('input[name="grade_edit"]').val(),
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
									msg : '修改考试信息成功！',
								});
								$('#examination_edit').dialog('close').form('reset');
								$('#mexamination').datagrid('reload');
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
				$('#examination_edit').dialog('close').form('reset');
			},
		}]
	});
	
	
	
	//考试编号
	$('input[name="exNo"],input[name="exNo_edit"]').validatebox({
		required : true,
		validType : 'length[4,10]',
		missingMessage : '请输入编号',
		invalidMessage : '编号在4~10位',
	});
	//考试名称验证
	$('input[name="exName"],input[name="exName_edit"]').validatebox({
		required : true,
		missingMessage : '请输入考试名称',
	});
	//考试时间
	$('#exTime,#exTime_edit').datebox({
		editable : false,
	});
	/*$('input[name="exTime"],input[name="exTime_edit"]').validatebox({
		required : true,
		missingMessage : '请输入考试名称',
	});*/
	//考试地点
	$('input[name="address"],input[name="address_edit"]').validatebox({
		required : true,
		missingMessage : '请输入考试地点',
	});
	//考试专业
	$('input[name="profession2"],input[name="profession2_edit"]').validatebox({
		required : true,
		missingMessage : '请输入考试专业',
	});
	//考试年级
	$('input[name="grade"],input[name="grade_edit"]').validatebox({
		required : true,
		missingMessage : '请输入考试班级',
	});
	
	//查询验证
	$('input[name="examinationName"]').validatebox({
		required : true,
		missingMessage : '请输入考试名称关键字',
	});
	

});