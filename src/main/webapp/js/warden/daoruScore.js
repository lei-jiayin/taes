/**
 * 分数导入
 */
$(function() {
	$('#mscore').datagrid({
		title : '分数列表',
		url : 'showScore.action',
		fitColumns : true,
		border : false,
		rownumbers : true,
		columns : [[
			{
				title : '主键',
				field : 'scId',
				width : 100,
				//sortable : true,
				checkbox : true,
				align : 'center'
			},
			{
				title : '学号',
				field : 'studentNo',
				width : 100,
				sortable : true,
				//checkbox : true,
				align : 'center',
			},
			{
				title : '课程',
				field : 'coursesName',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '试卷',
				field : 'paperName',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '分数',
				field : 'ascore',
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
				title : '考试名称',
				field : 'exName',
				width : 100,
				sortable : true,
				align : 'center',
			},
		]],
		
		pagination : true,
		pageNumber : 1,
		pageSize : 5,
		pageList : [5,10,15,20],
		pagePosition : 'bottom',
		sortName : 'ascore',
		sortOrder : 'ASC',
		remoteSort : true,
		toolbar : '#score_tools'
		
	});
	
	
	$('#score_add').dialog({
		title : '分数导入',
		width : 350,
		iconCls : 'icon-add',
		modal : true,
		closed : true,
		buttons : [{
			text : '导入',
			iconCls : 'icon-add',
			handler : function() {
				$('#score_add').form({
					//url : 'student_add.action',
					onSubmit : function(param) {
						
					},
					success : function(data) {
						//alert(data);
						if(data){
			                alert("导入成功！");
			                $('#score_add').dialog('close').form('reset');
			                $('#mscore').datagrid('loaded');
							$('#mscore').datagrid('load');
			            }else{
			                alert("导入失败！请检查文件格式！");
			                
			            }
					}
				});
				
				var fileName=$("#upfile").val();
	            var suffix=(fileName.substr(fileName.lastIndexOf(".")+1)).toUpperCase();
	            alert(suffix);
	            if(!(suffix=='XLS'||suffix=='XLSX')){
	                alert("只能上传XLS或者XLSX类型的文件！");
	                $('#score_add').dialog('close').form('reset');
	                return false;
	            }else {
	            	$('#score_add').submit();
				}
			},
		},{
			text : '取消',
			iconCls : 'icon-redo',
			handler : function() {
				$('#score_add').dialog('close').form('reset');
				
			},
		}]
	
	});
	
	$('#score_daoruSD').dialog({
		title : '详细分数添加',
		width : 350,
		iconCls : 'icon-add',
		modal : true,
		closed : true,
		buttons : [{
			text : '导入',
			iconCls : 'icon-add',
			handler : function() {
				if ($('#score_daoruSD').form('validate')) {
					//alert($('#profession').combobox('getValue'));
					$.ajax({
						url : 'score_daoruSD.action',
						type : 'post',
						data : {
							scId : $('input[name="scId_sd"]').val(),
							qBankId : $('#content').combobox('getValue'),
							sdscore : $('input[name="sdscore"]').val(),
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
									msg : '添加详细分数成功！',
								});
								//$('#courses_add').dialog('close').form('reset');
								//$('#mcourses').datagrid('reload');
							}else {
								$.messager.alert('添加失败！','未知错误！请重试','warning');
							}
						}
					});
				}
			},
		},{
			text : '取消',
			iconCls : 'icon-redo',
			handler : function() {
				$('#score_daoruSD').dialog('close').form('reset');
				
			},
		}]
	
	});
	
	//添加分数弹窗
	$('#score_add2').dialog({
		title : '分数添加',
		width : 350,
		iconCls : 'icon-add',
		modal : true,
		closed : true,
		buttons : [{
			text : '添加',
			iconCls : 'icon-add',
			handler : function() {
				 if($('#score_add2').form('validate')){
					 
					 $.ajax({
						 url : 'score_add.action',
						 type : 'post',
						 data:{
							 studentNo : $('input[name="studentNo"]').val(),
							 coursesName : $('#coursesName').combobox('getText'),
					 		 paperName : $('#paperName').combobox('getText'),
					 		 ascore : $('input[name="ascore"]').val(),
					 		 exTime : $('input[name="exTime"]').val(),
					 		 exName : $('input[name="exName"]').val()
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
										msg : '添加分数成功！',
									});
									$('#score_add2').dialog('close').form('reset');
									$('#mscore').datagrid('reload');
								}else {
									$.messager.alert('添加失败！','未知错误！请重试','warning');
								}
							}
					 });
				 }
			},
		},{
			text : '取消',
			iconCls : 'icon-redo',
			handler : function() {
				$('#score_add2').dialog('close').form('reset');
				
			},
		}]
	
	});
	
	//修改弹窗
	$('#score_edit').dialog({
		title : '分数修改',
		width : 350,
		iconCls : 'icon-add',
		modal : true,
		closed : true,
		buttons : [{
			text : '修改',
			iconCls : 'icon-edit',
			handler : function() {
				 if($('#score_edit').form('validate')){
					 
					 $.ajax({
						 url : 'score_edit.action',
						 type : 'post',
						 data:{
							 studentNo : $('input[name="studentNo_edit"]').val(),
							 coursesName : $('#coursesName_edit').combobox('getText'),
					 		 paperName : $('#paperName_edit').combobox('getText'),
					 		 ascore : $('input[name="ascore_edit"]').val(),
					 		 exTime : $('input[name="exTime_edit"]').val(),
					 		 exName : $('input[name="exName_edit"]').val()
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
										msg : '修改分数成功！',
									});
									$('#score_edit').dialog('close').form('reset');
									$('#mscore').datagrid('reload');
								}else {
									$.messager.alert('修改失败！','未知错误！请重试','warning');
									//$('#score_edit').dialog('close').form('reset');
								}
							}
					 });
				 }
			},
		},{
			text : '取消',
			iconCls : 'icon-redo',
			handler : function() {
				$('#score_edit').dialog('close').form('reset');
				
			},
		}]
	
	});
	
	score_tool = {
			reload : function() {
				$('#mscore').datagrid('reload');
			},
			redo : function() {
				$('#mscore').datagrid('unselectAll');
			},
				
			search : function() {
				//alert($('input[name="keyword"]').val());
				$('#mscore').datagrid('load',{
					studentNo : $.trim($('input[name="score"]').val()),
				});
			},
			daoru : function() {
				$('#score_add').dialog('open');
				//$('input[name="pcId"]').focus();
				/*$('#pcId').combobox({
					valueField : 'pcId',
					textField : 'pcName',
					url : 'score_getProfessionalClass.action',
					width : 200,
					panelHeight : 200,
					required : true,
					missingMessage : '请选择班级',
					editable : true,
				});*/
			},
			daoruSD : function() {
				var rows = $('#mscore').datagrid('getSelections');
				console.log(rows);
				if (rows.length>1) {
					$.messager.alert('警告','只能选择一条进行添加！','waring');
				}else if (rows.length == 0) {
					$.messager.alert('警告','请选择一条记录进行编辑！','waring');
				} else if(rows.length == 1){
					alert('试卷名称='+rows[0].paperName)
					$('#content').combobox({
						url : 'score_gettopic.action?paperName='+rows[0].paperName,
						valueField : 'QBankId',
						textField : 'content',
						width : 200,
						panelHeight : 200,
						required : true,
						missingMessage : '请选择试题',
						editable : true,
					});
					
						$('#score_daoruSD').form('load',{
									scId_sd :  rows[0].scId,
								}).dialog('open');
						}

			},
			add : function() {
				$('#score_add2').dialog('open');
				/*$('input[name="professionalClass"]').focus();*/
				$('#coursesName').combobox({
					url : 'score_getcouName.action',
					valueField : 'coursesId',
					textField : 'coursesName',
					width : 200,
					panelHeight : 200,
					required : true,
					missingMessage : '请选择课程',
					editable : true,
					onSelect : function(row) {
						if (row!=null) {
							$('#paperName').combobox({
								url : "score_getpaName.action?coursesId="+row.coursesId,
							});
						}
					}
				});
				$('#paperName').combobox({
					//url : 'getpaName.action',
					valueField : 'paperId',
					textField : 'paperName',
					width : 200,
					panelHeight : 200,
					required : true,
					missingMessage : '请选择试卷',
					editable : true,
				});
			},
			edit : function(){
				var rows = $('#mscore').datagrid('getSelections');
				console.log(rows);
				if (rows.length>1) {
					$.messager.alert('警告','编辑时只能选择一条进行修改！','waring');
				}else if (rows.length == 0) {
					$.messager.alert('警告','请选择一条记录进行编辑！','waring');
				} else if(rows.length == 1){
					$('#coursesName_edit').combobox({
						url : 'getcouName.action',
						valueField : 'coursesId',
						textField : 'coursesName',
						width : 200,
						panelHeight : 200,
						required : true,
						missingMessage : '请选择课程',
						editable : true,
						onSelect : function(row) {
							if (row!=null) {
								$('#paperName').combobox({
									url : "score_getpaName.action?coursesId="+row.coursesId,
								});
							}
						}
					});
					$('#paperName_edit').combobox({
						//url : 'getpaName.action',
						valueField : 'paperId',
						textField : 'paperName',
						width : 200,
						panelHeight : 200,
						required : true,
						missingMessage : '请选择试卷',
						editable : true,
					});
					//alert(rows[0].studentId);
					$.ajax({
						url : 'score_edit.action',
						type : 'post',
						data : {
							scId : rows[0].scId,
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
								
								$('#score_edit').form('load',{	
									studentNo_edit : data.studentNo,
									coursesName_edit : data.courses.coursesName,
									paperName_edit : data.paper.paperName,
									ascore_edit : data.ascore, 
									exTime_edit : data.exTime,
									exName_edit : data.exName,
								}).dialog('open');
							}else {
								$.messager.alert('请求失败！','未知错误！请重试','warning');
							}
						}
					
					});
					
					
				}
			},
			
			remove : function() {
				var rows = $('#mscore').datagrid('getSelections');
				if (rows.length>0) {
					$.messager.confirm('确定操作','确认删除这些数据？',function(flag){
						if (flag) {
							var ids=[];
							for (var i = 0; i < rows.length; i++) {
								ids.push(rows[i].scId);
							}
							//console.log(ids.join(','));
							//以ajax方式提交给后台删除所选记录
							$.ajax({
								url : 'score_delete.action',
								type : 'POST',
								data : {
									ids : ids.join(','),
								},
								dataType : 'text',
								//传递之前
								beforeSend : function() {
									$('#mscore').datagrid('loading');
								},
								
								success : function(data) {
									if (data) {
										//alert(data);
										$('#mscore').datagrid('loaded');
										$('#mscore').datagrid('load');
										$('#mscore').datagrid('unselectAll');
										$.messager.show({
											title : '提示',
											msg : data + '个成绩被删除！',
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
	//学号验证
	$('input[name="studentNo"],input[name="studentNo_edit"]').validatebox({
		required : true,
		validType : 'length[4,10]',
		invalidMessage : '学号在4~10位',
		missingMessage : '请输入学号',
	});
	//分数
	$('input[name="ascore"],input[name="ascore_edit"]').validatebox({
		required : true,
		validType : 'integ',
		//invalidMessage : '学号在4~10位',
		missingMessage : '请输入分数',
	});
	//考试时间
	$('#exTime').datebox({
		editable : false,
	});
	$('input[name="exName"],input[name="exName_edit"]').validatebox({
		required : true,
		//validType : 'length[4,10]',
		//invalidMessage : '学号在4~10位',
		missingMessage : '请输入考试名称',
	});
	//输入细分框
	$('input[name="sdscore"]').validatebox({
		required : true,
		validType : 'integ',
		//invalidMessage : '学号在4~10位',
		missingMessage : '请输入分数',
	});
	
	//查询验证
	$('input[name="score"]').validatebox({
		required : true,
		missingMessage : '请输入学号',
	});
	
});
