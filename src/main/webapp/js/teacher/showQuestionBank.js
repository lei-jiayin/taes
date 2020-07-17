/**
 * 试题js
 */
$(function() {
	questionbank_t = {
			
		reload : function() {
			$('#mquestionbank').datagrid('reload');
		},
		redo : function() {
			$('#mquestionbank').datagrid('unselectAll');
		},
		edit : function() {
			var rows = $('#mquestionbank').datagrid('getSelections');
			console.log(rows);
			if (rows.length>1) {
				$.messager.alert('警告','编辑时只能选择一条进行编辑！','waring');
			}else if (rows.length == 0) {
				$.messager.alert('警告','请选择一条记录进行编辑！','waring');
			} else if(rows.length == 1){
				$('#paperId').combobox({
					valueField : 'paperId',
					textField : 'paperName',
					url : 'question_getpaper.action',
					width : 200,
					panelHeight : 200,
					required : true,
					missingMessage : '请选择试卷',
					editable : true,
				});
				//alert(rows[0].pId);
				$.ajax({
					url : 'question_edit.action',
					type : 'post',
					data : {
						QBankId : rows[0].QBankId,
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
							
							$('#question_edit').form('load',{
								qBankId_edit : data.QBankId,
								qBankNo_edit : data.qBankNo,
								content_edit : data.content,
								fullScore_edit : data.fullScore,
								type_edit : data.type,
								paperId : data.paper.paperId,
							}).dialog('open');
						}else {
							$.messager.alert('请求失败！','未知错误！请重试','warning');
						}
					}
				
				});
				
				
			}
		
		},
		remove : function() {
			var rows = $('#mquestionbank').datagrid('getSelections');
			if (rows.length>0) {
				$.messager.confirm('确定操作','确认删除这些试题？',function(flag){
					if (flag) {
						var ids=[];
						for (var i = 0; i < rows.length; i++) {
							ids.push(rows[i].QBankId);
						}
						//console.log(ids.join(','));
						//以ajax方式提交给后台删除所选记录
						$.ajax({
							url : 'question_delete.action',
							type : 'POST',
							data : {
								ids : ids.join(','),
							},
							dataType : 'text',
							//传递之前
							beforeSend : function() {
								$('#mquestionbank').datagrid('loading');
							},
							success : function(data) {
								if (data) {
									//alert(data);
									$('#mquestionbank').datagrid('loaded');
									$('#mquestionbank').datagrid('load');
									$('#mquestionbank').datagrid('unselectAll');
									$.messager.show({
										title : '提示',
										msg : data + '个试题被删除！',
									});
								}
							}
						});
					}
				});
			}else {
				$.messager.alert('提示','请选择要删除的试题','info');
			}
		
		},
		search : function() {
			$('#mquestionbank').datagrid('load',{
				content : $('input[name="shiti"]').val(),
			})
		}
	};
	
	$('#mquestionbank').datagrid({
		title : '试题列表',
		url : 'showQuestionBank.action',
		fitColumns : true,
		border : false,
		rownumbers : true,
		columns : [[
			{
				title : '主键',
				field : 'QBankId',
				width : 100,
				checkbox : true,
				align : 'center'
			},
			{
				title : '试题编号',
				field : 'qBankNo',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '内容',
				field : 'content',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '分值',
				field : 'fullScore',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '类型',
				field : 'type',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '试卷',
				field : 'paper',
				width : 100,
				align : 'center',
				formatter : function(index ,row ,value) {
					return row.paper.paperName;
				}
			}
		]],
		pagination : true,
		pageNumber : 1,
		pageSize : 5,
		pageList : [5,10,15,20],
		pagePosition : 'bottom',
		sortName : 'qBankNo',
		sortOrder : 'ASC',
		remoteSort : true,
		toolbar : '#questionbank_ts'
	});
	
	//修改弹窗
	$('#question_edit').dialog({
		title : '试题编辑',
		width : 350,
		iconCls : 'icon-edit',
		modal : true,
		closed : true,
		buttons : [{
			text : '修改',
			iconCls : 'icon-edit',
			handler : function() {
				if ($('#question_edit').form('validate')) {
					$.ajax({
						url : 'question_update.action',
						type : 'post',
						data : {
							QBankId : $('input[name="qBankId_edit"]').val(),
							paperId : $('#paperId').combobox('getValue'),
							qBankNo : $('input[name="qBankNo_edit"]').val(),
							content : $('input[name="content_edit"]').val(),
							fullScore : $('input[name="fullScore_edit"]').val(),
							//problemNum : $('input[name="problemNum"]').val(),
							type : $('#type_edit').combobox('getValue'),
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
									msg : '修改试题信息成功！',
								});
								$('#question_edit').dialog('close').form('reset');
								$('#mquestionbank').datagrid('reload');
							}else {
								$.messager.alert('修改失败！','未知错误！请重试','warning');
							}
						}
					});
				}
			}
		},{
			text : '取消',
			iconCls : 'icon-redo',
			handler : function() {
				$('#question_edit').dialog('close').form('reset');
			},
		}]
	});
	$('#type_edit').combobox({
		valueField: 'label',
		textField: 'value',
		width : 200,
		panelHeight : 200,
		required : true,
		missingMessage : '请选择试题类型',
		editable : true,
		data: [{
			label: '客观题',
			value: '客观题'
		},{
			label: '主观题',
			value: '主观题'
		}]
});
	//验证输入框
	$('input[name="shiti"]').validatebox({
		required : true,
		//validType : 'integer',
		missingMessage : '请输入试题',
	});
	$('input[name="qBankNo_edit"]').validatebox({
		required : true,
		validType : 'length[4,6]',
		missingMessage : '请输入试题编号',
	});
	$('input[name="content_edit"]').validatebox({
		required : true,
		//validType : 'integer',
		missingMessage : '请输入试题',
	});
	$('input[name="fullScore_edit"]').validatebox({
		required : true,
		validType : 'integer',
		missingMessage : '请输入试题分值',
	});
	
});

