/**
 * 试卷管理
 */
$(function() {
	$.extend($.fn.validatebox.defaults.rules, {
		integer:{  
            validator:function(value,param){  
                return /^[+]?[1-9]\d*$/.test(value);  
            },  
            message: '请输入最小为1的整数'  
        },  
	});
	teacher_t = {
		reload : function() {
			$('#mpaper').datagrid('reload');
		},
		redo : function() {
			$('#mpaper').datagrid('unselectAll');
		},
		addQuestions : function() {
			//$('#question_add').dialog('open');
			var rows = $('#mpaper').datagrid('getSelections');
			console.log(rows);
			if (rows.length>1) {
				$.messager.alert('警告','编辑时只能选择一条进行编辑！','waring');
			}else if (rows.length == 0) {
				$.messager.alert('警告','请选择一条记录进行编辑！','waring');
			} else if(rows.length == 1){
				$('#question_add').form('load',{
					paperId : rows[0].paperId,
				}).dialog('open');
			}
		},
		search : function() {
			//alert($('input[name="keyword"]').val());
			/*$('#mpaper').datagrid('load',{
				PName : $.trim($('input[name="keyword"]').val()),
			});*/
		},
		create : function() {
			$('#paper_add').dialog('open');
			$('input[name="paperNo"]').focus();
			//课程下拉框
			$('#courses').combobox({
				valueField : 'coursesId',
				textField : 'coursesName',
				url : 'paper_getCourses.action',
				width : 200,
				panelHeight : 200,
				required : true,
				missingMessage : '请选择课程',
				editable : true,
			});
		},
		edit : function(){
			var rows = $('#mpaper').datagrid('getSelections');
			console.log(rows);
			if (rows.length>1) {
				$.messager.alert('警告','编辑时只能选择一条进行编辑！','waring');
			}else if (rows.length == 0) {
				$.messager.alert('警告','请选择一条记录进行编辑！','waring');
			} else if(rows.length == 1){
				$('#courses_edit').combobox({
					valueField : 'coursesId',
					textField : 'coursesName',
					url : 'paper_getCourses.action',
					width : 200,
					panelHeight : 200,
					required : true,
					missingMessage : '请选择课程',
					editable : true,
				});
				//alert(rows[0].pId);
				$.ajax({
					url : 'paper_edit.action',
					type : 'post',
					data : {
						paperId : rows[0].paperId,
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
							
							$('#paper_edit').form('load',{
								paperId_edit : data.paperId,
								paperNo_edit : data.paperNo,
								paperName_edit : data.paperName,
								totalScore_edit : data.totalScore,
								courses_edit : data.courses.coursesId,
								
							}).dialog('open');
						}else {
							$.messager.alert('请求失败！','未知错误！请重试','warning');
						}
					}
				
				});
				
				
			}
		},
		
		remove : function() {
			var rows = $('#mpaper').datagrid('getSelections');
			if (rows.length>0) {
				$.messager.confirm('确定操作','确认删除这些数据？',function(flag){
					if (flag) {
						var ids=[];
						for (var i = 0; i < rows.length; i++) {
							ids.push(rows[i].paperId);
						}
						//console.log(ids.join(','));
						//以ajax方式提交给后台删除所选记录
						$.ajax({
							url : 'paper_delete.action',
							type : 'POST',
							data : {
								ids : ids.join(','),
							},
							dataType : 'text',
							//传递之前
							beforeSend : function() {
								$('#mpaper').datagrid('loading');
							},
							
							success : function(data) {
								if (data) {
									//alert(data);
									$('#mpaper').datagrid('loaded');
									$('#mpaper').datagrid('load');
									$('#mpaper').datagrid('unselectAll');
									$.messager.show({
										title : '提示',
										msg : data + '张试卷被删除！',
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
	
	
	
	$('#mpaper').datagrid({
		title : '试卷列表',
		url : 'showPaper.action',
		fitColumns : true,
		border : false,
		rownumbers : true,
		columns : [[
			{
				title : '主键',
				field : 'paperId',
				width : 100,
				
				checkbox : true,
				align : 'center'
			},
			{
				title : '试卷编号',
				field : 'paperNo',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '试卷名称',
				field : 'paperName',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '分值',
				field : 'totalScore',
				width : 100,
				//sortable : true,
				align : 'center'
			},
			{
				title : '课程',
				field : 'courses',
				width : 100,
				align : 'center',
				formatter : function(index ,row ,value) {
					return row.courses.coursesName;
				}
			}
		]],
		
		pagination : true,
		pageNumber : 1,
		pageSize : 5,
		pageList : [5,10,15,20],
		pagePosition : 'bottom',
		sortName : 'paperNo',
		sortOrder : 'ASC',
		remoteSort : true,
		toolbar : '#teacher_ts'
		
	});
	//添加弹窗
	$('#paper_add').dialog({
		width : 350,
		title : '添加试卷',
		iconCls : 'icon-add',
		closed : true,
		modal : true,
		buttons : [{
			text : '添加',
			iconCls : 'icon-add',
			handler : function() {
				if ($('#paper_add').form('validate')) {
					//alert($('#college').combobox('getValue'));
					$.ajax({
						url : 'paper_add.action',
						type : 'post',
						data : {
							paperNo : $('input[name="paperNo"]').val(),
							paperName : $('input[name="paperName"]').val(),
							totalScore : $('input[name="totalScore"]').val(),
							//problemNum : $('input[name="problemNum"]').val(),
							coursesId : $('#courses').combobox('getValue'),
						},
						beforeSend : function() {
							/*$.messager.progress({
								text : '正在新增中。。。',
							});*/
						},
						success : function(data,response,status) {
							/*$.messager.progress('close');*/
							if (data>0) {
								$.messager.show({
									title : '提示',
									msg : '新增试卷成功！',
								});
								$('#paper_add').dialog('close').form('reset');
								$('#mpaper').datagrid('reload');
								//$('#psd').style.display="";
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
				$('#paper_add').dialog('close').form('reset');
			},
		}]
	});
	//编辑弹窗
	$('#paper_edit').dialog({
		width : 350,
		title : '编辑试卷',
		iconCls : 'icon-edit',
		modal : true,
		closed : true,
		buttons : [{
			text : '修改',
			iconCls : 'icon-edit',
			handler : function() {
				if ($('#paper_edit').form('validate')) {
					$.ajax({
						url : 'paper_update.action',
						type : 'post',
						data : {
							paperId : $('input[name="paperId_edit"]').val(),
							paperNo : $('input[name="paperNo_edit"]').val(),
							paperName : $('input[name="paperName_edit"]').val(),
							totalScore : $('input[name="totalScore_edit"]').val(),
							//problemNum : $('input[name="problemNum_edit"]').val(),
							coursesId : $('#courses_edit').combobox('getValue'),
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
									msg : '修改试卷信息成功！',
								});
								$('#paper_edit').dialog('close').form('reset');
								$('#mpaper').datagrid('reload');
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
				$('#paper_edit').dialog('close').form('reset');
			},
		}]
	});
	
	//
	$('#question_add').dialog({
		width : 350,
		title : '添加试题',
		iconCls : 'icon-add',
		modal : true,
		closed : true,
		buttons : [{
			text : '添加',
			iconCls : 'icon-add',
			handler : function() {
				if ($('#question_add').form('validate')) {
					$.ajax({
						url : 'question_add.action',
						type : 'post',
						data : {			
							paperId : $('input[name="paperId"]').val(),
							qBankNo : $('input[name="qBankNo"]').val(),
							content : $('input[name="content"]').val(),
							fullScore : $('input[name="fullScore"]').val(),
							//problemNum : $('input[name="problemNum"]').val(),
							type : $('#type').combobox('getValue'),
						},
						beforeSend : function() {
							$.messager.progress({
								text : '正在添加中。。。',
							});
						},
						success : function(data,response,status) {
							$.messager.progress('close');
							if (data>0) {
								$.messager.show({
									title : '提示',
									msg : '添加试题信息成功！',
								});
								$('#question_add').dialog('close').form('reset');
								$('#mpaper').datagrid('reload');
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
				$('#question_add').dialog('close').form('reset');
			},
		}]
	});
	
	//试卷编号
	$('input[name="paperNo"]').validatebox({
		required : true,
		validType : 'length[4,10]',
		missingMessage : '请输入编号',
		invalidMessage : '账号在4~10位',
	});
	//试卷名称验证
	$('input[name="paperName"]').validatebox({
		required : true,
		missingMessage : '请输入试卷名',
	});
	//fullScore验证
	$('input[name="fullScore"]').validatebox({
		required : true,
		validType : 'integer',
		missingMessage : '请输入试题分值',
	});
	//试卷分值验证
	$('input[name="totalScore"]').validatebox({
		required : true,
		validType : 'integer',
		missingMessage : '请输入试卷分值',
	});
	
	//试题编号验证
	$('input[name="qBankNo"]').validatebox({
		required : true,
		//validType : 'integer',
		missingMessage : '请输入试题编号',
	});
	//试题验证
	$('input[name="content"]').validatebox({
		required : true,
		//validType : 'integer',
		missingMessage : '请输入试题标题',
	});
	
	$('#type').combobox({
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

});