/**
 * 详细分数管理
 */
$(function() {
	sd_tool = {
			edit : function() {
				var rows = $('#mscoreDetails').datagrid('getSelections');
				
				if (rows.length>1) {
					$.messager.alert('警告','修改时只能选择一条进行修改！','waring');
				}else if (rows.length == 0) {
					$.messager.alert('警告','请选择一条记录进行修改！','waring');
				} else if(rows.length == 1){
					console.log(rows);
					$('#scId_edit').combobox({
						valueField : 'scId',
						textField : 'studentNo',
						url : 'sd_getStudentNo.action',
						width : 200,
						panelHeight : 200,
						required : true,
						missingMessage : '请选择学号',
						editable : true,
					});
					alert('试题名='+rows[0].score.paperName);
					$('#content_edit').combobox({
						valueField : 'QBankId',
						textField : 'content',
						url : 'sd_getcontent.action?paperName='+rows[0].score.paperName,
						width : 200,
						panelHeight : 200,
						required : true,
						missingMessage : '请选择试题',
						editable : true,
					});
					//alert(rows[0].studentId);
					$.ajax({
						url : 'sd_edit.action',
						type : 'post',
						data : {
							sdId : rows[0].sdId,
						},
						beforeSend : function() {
							/*$.messager.progress({
								text : '正在请求中。。。',
							});*/
						},
						success : function(data,response,status) {
							/*$.messager.progress('close');*/
							if (data) {
								console.log(data);
								
								$('#sd_edit').form('load',{
									sdId_edit : data.sdId,
									scId_edit : data.score.scId,
									content_edit : data.questionBank.qBankId,
									sdscore_edit : data.sdscore, 
								}).dialog('open');
							}else {
								$.messager.alert('请求失败！','未知错误！请重试','warning');
							}
						}
					
					});
					
					
				}
			},
			
			remove : function() {
				var rows = $('#mscoreDetails').datagrid('getSelections');
				if (rows.length>0) {
					$.messager.confirm('确定操作','确认删除这些数据？',function(flag){
						if (flag) {
							var ids=[];
							for (var i = 0; i < rows.length; i++) {
								ids.push(rows[i].sdId);
							}
							//console.log(ids.join(','));
							//以ajax方式提交给后台删除所选记录
							$.ajax({
								url : 'sd_delete.action',
								type : 'POST',
								data : {
									ids : ids.join(','),
								},
								dataType : 'text',
								//传递之前
								beforeSend : function() {
									$('#mscoreDetails').datagrid('loading');
								},
								
								success : function(data) {
									if (data) {
										//alert(data);
										$('#mscoreDetails').datagrid('loaded');
										$('#mscoreDetails').datagrid('load');
										$('#mscoreDetails').datagrid('unselectAll');
										$.messager.show({
											title : '提示',
											msg : data + '个分数被删除！',
										});
									}
								}
							});
						}
					});
				}else {
					$.messager.alert('提示','请选择要删除的数据','info');
				}
			
			},
			reload : function() {
				$('#mscoreDetails').datagrid('reload');
			},
			redo : function() {
				$('#mscoreDetails').datagrid('unselectAll');
			},
			search : function() {
				$('#mscoreDetails').datagrid('load',{
					scId : $('#keyword').combobox('getValue'),
				});
			},
	};
	$('#keyword').combobox({
		valueField : 'scId',
		textField : 'studentNo',
		url : 'sd_getStudentNo.action',
		width : 200,
		panelHeight : 200,
		required : true,
		missingMessage : '请选择学号',
		editable : true,
	});
	$('#mscoreDetails').datagrid({

		title : '详细分数列表',
		url : 'showDetails.action',
		fitColumns : true,
		border : false,
		rownumbers : true,
		columns : [[
			{
				title : '主键',
				field : 'sdId',
				width : 100,
				//sortable : true,
				checkbox : true,
				align : 'center'
			},
			{
				title : '学号',
				field : 'score',
				width : 100,
				sortable : true,
				//checkbox : true,
				align : 'center',
				formatter : function(index ,row ,value) {
					return row.score.studentNo;
				}
			},
			{
				title : '题目',
				field : 'questionBank',
				width : 100,
				sortable : true,
				align : 'center',
				formatter : function(index ,row ,value) {
					return row.questionBank.content;
				}
			},
			{
				title : '分数',
				field : 'sdscore',
				width : 100,
				sortable : true,
				align : 'center'
			}
		]],
		
		pagination : true,
		pageNumber : 1,
		pageSize : 5,
		pageList : [5,10,15,20],
		pagePosition : 'bottom',
		sortName : 'sdId',
		sortOrder : 'ASC',
		remoteSort : true,
		toolbar : '#sd_tools'
	});
	
	$('#sd_edit').dialog({
		title : '详细分数修改',
		width : 350,
		iconCls : 'icon-edit',
		modal : true,
		closed : true,
		buttons : [{
			text : '修改',
			iconCls : 'icon-edit',
			handler : function() {
				if ($('#sd_edit').form('validate')) {
					//alert($('#scId').combobox('getValue'));
					$.ajax({
						url : 'sd_update.action',
						type : 'post',
						data : {
							sdId : $('input[name="sdId_edit"]').val(),
							scId : $('#scId').combobox('getValue'),
							QBankId : $('#content').combobox('getValue'),
							sdscore : $('input[name="sdscore_edit"]').val(),
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
									msg : '修改详细分数成功！',
								});
								$('#sd_edit').dialog('close').form('reset');
								$('#mscoreDetails').datagrid('reload');
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
				$('#sd_edit').dialog('close').form('reset');
				
			},
		}]
	
	});
	
	//查询验证
	$('input[name="scId_edit"]').validatebox({
		required : true,
		missingMessage : '请输入学号',
	});
	
	
	
});