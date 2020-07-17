/**
 * 显示考试信息
 */
$(function() {
	$('#showExamination').datagrid({
		title : '考试信息展示',
		url : 'showExamination.action',
		fitColumns : true,
		border : false,
		rownumbers : true,
		columns : [[
			{
				title : '主键',
				field : 'exId',
				width : 100,
				checkbox : true,
				align : 'center'
			},
			{
				title : '编号',
				field : 'exNo',
				width : 100,
				align : 'center'
			},
			{
				title : '名称',
				field : 'exName',
				width : 100,
				align : 'center'
			},
			{
				title : '时间',
				field : 'exTime',
				width : 100,
				sortable : true,
				align : 'center'
			},
			{
				title : '专业',
				field : 'profession2',
				width : 100,
				align : 'center'
			},
			{
				title : '地点',
				field : 'address',
				width : 100,
				align : 'center'
			},
			{
				title : '年级',
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
		toolbar : '#exam_tools'
	});
	
	exam_tool = {
		/*Scourses : function() {
			$('#exam_courses').dialog('open');
			var rows = $('#showExamination').datagrid('getSelections');
			//console.log(rows);
			if (rows.length>1) {
				$.messager.alert('警告','只能选择一场考试查看！','waring');
			}else if (rows.length == 0) {
				$.messager.alert('警告','请选择一场考试进行查看！','waring');
			} else if(rows.length == 1){
				$('#exam_courses').dialog('open');
				//var ids=0;
				//for (var i = 0; i < rows.length; i++) {
					//ids= rows[0].exId;
				//}
				//将课程数据导入表格中
				$.ajax({
					url : 'getCourses.action',
					type : 'POST',
					data : {
						exId :rows[0].startYear,
					},
					//dataType : 'text',
					//传递之前
					beforeSend : function() {
						$('#exam_courses').datagrid('loading');
					},
					
					success : function(data) {
						if (data) {
							//alert(data);
							$('#exam_courses').datagrid('loaded');
							$('#exam_courses').datagrid('load');
							$('#exam_courses').datagrid('unselectAll');
							$.messager.show({
								title : '提示',
								msg : data + '个学院被删除！',
							});
						}
					}
				});
			}
			
		},*/
		Xscore : function() {
			$('#exam_score').dialog('open');
			var rows = $('#showExamination').datagrid('getSelections');
			//console.log(rows);
			if (rows.length>1) {
				$.messager.alert('警告','只能选择一场考试查看！','waring');
			}else if (rows.length == 0) {
				$.messager.alert('警告','请选择一场考试进行查看！','waring');
			} else if(rows.length == 1){
				$('#exam_score').dialog('open');
				//var ids=0;
				//for (var i = 0; i < rows.length; i++) {
					//ids= rows[0].exId;
				//}
				//将分数数据导入表格中
				$.ajax({
					url : 'getScore.action',
					type : 'POST',
					data : {
						exName : rows[0].exName,
						grade : rows[0].grade,
						exTime : row[0].exTime,
					},
					//dataType : 'text',
					//传递之前
					beforeSend : function() {
						$('#exam_score').datagrid('loading');
					},
					
					success : function(data) {
						if (data) {
							//alert(data);
							$('#exam_score').datagrid('loaded');
							$('#exam_score').datagrid('load');
							$('#exam_score').datagrid('unselectAll');
							$.messager.show({
								title : '提示',
								msg : '显示成功',
							});
						}
					}
				});
			}
		}
	};
	
/*	$('#exam_score').datagrid({
		title : '分数列表',
		//url : 'showScore.action',
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
				field : 'courses',
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
		
	});*/

	
	/*$('#exam_courses').dialog({
		title : '课程列表',
		modal : true,
		closed : true,
		buttons : [{
			text : '关闭',
			iconCls : 'icon-close',
			handler : function() {
				$('#exam_courses').dialog('close');
			},
		}]
	});*/
	
});
