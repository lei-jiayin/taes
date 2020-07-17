/**
 * 导出成绩单
 */
$(function() {
	$('#paperName').combobox({
		valueField : 'paperId',
		textField : 'paperName',
		url : 'question_getpaper.action',
		width : 200,
		panelHeight : 200,
		required : true,
		missingMessage : '请选择试卷',
		editable : true,
	});
	$('#exTime').combobox({
		valueField : 'exId',
		textField : 'exTime',
		url : 'fenxi_getextime.action',
		width : 200,
		panelHeight : 200,
		required : true,
		missingMessage : '请选择试卷',
		editable : true,
	});
	
	
});




//分数导出弹窗
/*$('#exportReport').dialog({
	width : 350,
	height : 400,
	title : '导出框',
	iconCls : 'icon-print',
	closed : true,
	modal : true,
	buttons : [{
		text : '导出',
		iconCls : 'icon-print',
		handler : function() {
			$('#exportScore').form({
				//url : 'student_add.action',
				success : function(data) {
					//alert(data);
					if(data){
		                alert("导入成功！");
		                $('#exportScore').dialog('close').form('reset');
		           
		                // $("#importActivityModal").modal("hide");
		               // pageList(1,$("#myPageNation").bs_pagination('getOption', 'rowsPerPage'));
		            }else{
		                alert("导入失败！请检查文件格式！");
		               // $("#importActivityModal").modal("show");
		                $('#student_add').dialog('close').form('reset');
		            }
				}
			});
			var exTime = $('#export_exTime').combobox('getText');
			var paperId = $('#export_paperName').combobox('getValue');
			if (exTime!=null && exTime!="" && paperId!=null && paperId!="") {
				$('#exportReport').submit();
			}	
		},
	},{
		text : '取消',
		iconCls : 'icon-redo',
		handler : function() {
			$('#student_add').dialog('close').form('reset');
			
		},
	}]
});*/