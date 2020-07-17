/**
 * 学生
 */
$(function() {
	student_tool = {
		reload : function() {
			$('#mstudent').datagrid('reload');
		},
		redo : function() {
			$('#mstudent').datagrid('unselectAll');
		},
			
		search : function() {
			//alert($('input[name="keyword"]').val());
			$('#mstudent').datagrid('load',{
				studentName : $.trim($('input[name="student"]').val()),
			});
		},
		daoru : function() {
			$('#student_add').dialog('open');
			
		},
		add : function() {
			$('#student_add2').dialog('open');
			$('input[name="studentNo"]').focus();
		},
		edit : function(){
			var rows = $('#mstudent').datagrid('getSelections');
			console.log(rows);
			if (rows.length>1) {
				$.messager.alert('警告','编辑时只能选择一条进行修改！','waring');
			}else if (rows.length == 0) {
				$.messager.alert('警告','请选择一条记录进行编辑！','waring');
			} else if(rows.length == 1){
				$.ajax({
					url : 'student_edit.action',
					type : 'post',
					data : {
						studentId : rows[0].studentId,
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
							
							$('#student_edit').form('load',{
								studentId_edit : data.studentId,
								studentNo_edit : data.studentNo,
								studentName_edit : data.studentName,
								profession_edit : data.profession,
								professionalClass_edit : data.professionalClass, 
								college_edit : data.college,
								
							}).dialog('open');
						}else {
							$.messager.alert('请求失败！','未知错误！请重试','warning');
						}
					}
				
				});
				
				
			}
		},
		
		remove : function() {
			var rows = $('#mstudent').datagrid('getSelections');
			if (rows.length>0) {
				$.messager.confirm('确定操作','确认删除这些数据？',function(flag){
					if (flag) {
						var ids=[];
						for (var i = 0; i < rows.length; i++) {
							ids.push(rows[i].studentId);
						}
						//console.log(ids.join(','));
						//以ajax方式提交给后台删除所选记录
						$.ajax({
							url : 'student_delete.action',
							type : 'POST',
							data : {
								ids : ids.join(','),
							},
							dataType : 'text',
							//传递之前
							beforeSend : function() {
								$('#mstudent').datagrid('loading');
							},
							
							success : function(data) {
								if (data) {
									//alert(data);
									$('#mstudent').datagrid('loaded');
									$('#mstudent').datagrid('load');
									$('#mstudent').datagrid('unselectAll');
									$.messager.show({
										title : '提示',
										msg : data + '个学生被删除！',
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
	
	
	
	$('#mstudent').datagrid({
		title : '学生列表',
		url : 'showStudent.action',
		fitColumns : true,
		border : false,
		rownumbers : true,
		columns : [[
			{
				title : '主键',
				field : 'studentId',
				width : 100,
				sortable : true,
				checkbox : true,
				align : 'center'
			},
			{
				title : '学号',
				field : 'studentNo',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '姓名',
				field : 'studentName',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '班级',
				field : 'professionalClass',
				width : 100,
				//sortable : true,
				align : 'center'
			},
			{
				title : '专业',
				field : 'profession',
				width : 100,
				//sortable : true,
				align : 'center'
			},
			{
				title : '学院',
				field : 'college',
				width : 100,
				align : 'center',
			}
		]],
		
		pagination : true,
		pageNumber : 1,
		pageSize : 5,
		pageList : [5,10,15,20],
		pagePosition : 'bottom',
		sortName : 'studentNo',
		sortOrder : 'ASC',
		remoteSort : true,
		toolbar : '#student_tools'
		
	});
	//导入弹窗
	$('#student_add').dialog({
		width : 350,
		title : '导入学生信息',
		iconCls : 'icon-add',
		modal : true,
		closed : true,
		buttons : [{
			text : '导入',
			iconCls : 'icon-add',
			handler : function() {
				$('#student_add').form({
					//url : 'student_add.action',
					success : function(data) {
						//alert(data);
						if(data){
			                alert("导入成功！");
			                $('#student_add').dialog('close').form('reset');
			                $('#mstudent').datagrid('reload');
			                // $("#importActivityModal").modal("hide");
			               // pageList(1,$("#myPageNation").bs_pagination('getOption', 'rowsPerPage'));
			            }else{
			                alert("导入失败！请检查文件格式！");
			               // $("#importActivityModal").modal("show");
			                $('#student_add').dialog('close').form('reset');
			            }
					}
				});
				
				var fileName=$("#upfile").val();
	            var suffix=(fileName.substr(fileName.lastIndexOf(".")+1)).toUpperCase();
	            alert("houzui="+suffix);
	            if(!(suffix=='XLS'||suffix=='XLSX')){
	                alert("只能上传XLS或者XLSX类型的文件！");
	                $('#student_add').dialog('close').form('reset');
	                return false;
	            }else {
	            	$('#student_add').submit();
				}
	            
				
			},
		},{
			text : '取消',
			iconCls : 'icon-redo',
			handler : function() {
				$('#student_add').dialog('close').form('reset');
				
			},
		}]
	});
	
	//添加弹窗
	$('#student_add2').dialog({
		width : 350,
		title : '添加学生信息',
		iconCls : 'icon-add',
		modal : true,
		closed : true,
		buttons : [{
			text : '添加',
			iconCls : 'icon-add',
			handler : function() {
				if ($('#student_add2').form('validate')) {
					$.ajax({
						url : 'student_add.action',
						type : 'post',
						data : {
							studentNo : $('input[name="studentNo"]').val(),
							studentName : $('input[name="studentName"]').val(),
							profession : $('input[name="profession"]').val(),
							professionalClass :  $('input[name="professionalClass"]').val(),
							college : $('input[name="college"]').val(),
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
									msg : '添加学生信息成功！',
								});
								$('#student_add2').dialog('close').form('reset');
								$('#mstudent').datagrid('reload');
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
				$('#student_add2').dialog('close').form('reset');
				
			},
		}]
	});
	
	
	//编辑弹窗
	$('#student_edit').dialog({
		width : 350,
		title : '编辑学生',
		iconCls : 'icon-edit',
		modal : true,
		closed : true,
		buttons : [{
			text : '修改',
			iconCls : 'icon-edit',
			handler : function() {
				if ($('#student_edit').form('validate')) {
					$.ajax({
						url : 'student_update.action',
						type : 'post',
						data : {
							studentId : $('input[name="studentId_edit"]').val(),
							studentNo : $('input[name="studentNo_edit"]').val(),
							studentName : $('input[name="studentName_edit"]').val(),
							profession : $('input[name="profession_edit"]').val(),
							professionalClass :  $('input[name="professionalClass_edit"]').val(),
							college : $('input[name="college_edit"]').val(),
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
									msg : '修改学生信息成功！',
								});
								$('#student_edit').dialog('close').form('reset');
								$('#mstudent').datagrid('reload');
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
				$('#student_edit').dialog('close').form('reset');
			},
		}]
	});
	//学生编号
	$('input[name="studentNo"],input[name="studentNo_edit"]').validatebox({
		required : true,
		validType : 'length[4,10]',
		missingMessage : '请输入学号',
		invalidMessage : '账号在4~10位',
	});
	//学生名称验证
	$('input[name="studentName"],input[name="studentName_edit"]').validatebox({
		required : true,
		missingMessage : '请输入学生姓名',
	});
	//专业验证
	$('input[name="profession"],input[name="profession_edit"]').validatebox({
		required : true,
		missingMessage : '请输入学生专业',
	});
	//班级
	$('input[name="professionalClass"],input[name="professionalClass_edit"]').validatebox({
		required : true,
		missingMessage : '请输入班级',
	});
	//学院
	$('input[name="college"],input[name="college_edit"]').validatebox({
		required : true,
		missingMessage : '请输入学院',
	});
	
	//查询验证
	$('input[name="student"]').validatebox({
		required : true,
		missingMessage : '请输入学生名称关键字',
	});
		
});