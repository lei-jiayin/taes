/**
 * 教师端：分数分析
 */
$(function() {
	fenxi_t = {
			
		exportScore : function() {
			$('#exportScore').dialog('open');
			$('#export_paperName').combobox({
				valueField : 'paperId',
				textField : 'paperName',
				url : 'question_getpaper.action',
				width : 200,
				panelHeight : 200,
				required : true,
				missingMessage : '请选择试卷',
				editable : true,
			});
			$('#export_exTime').combobox({
				valueField : 'exId',
				textField : 'exTime',
				url : 'fenxi_getextime.action',
				width : 200,
				panelHeight : 200,
				required : true,
				missingMessage : '请选择考试时间',
				editable : true,
			});
		},
		search : function() {
			//alert($('#fenxi_courses').combobox('getText'));
			$('#mscore').datagrid('load',{
				coursesName :$('#fenxi_courses').combobox('getText'),
				exTime : $('#fenxi_exTime').combobox('getText'),
			});
		},
		showEcharts : function() {
			var myecharts = echarts.init(document.getElementById('myecharts'));
			var option = {
	 				title : {
	 					text : '考试分数分析图',
	 					subtext : $('#fenxi_courses').combobox('getText')+'成绩分析图'
	 				},	
	 				tooltip : {  
	                     show : true,
	                     trigger : 'axis',
	                 },  
	                 legend: {  
	                     data: []
	                 },
	                 toolbox : {
	                     show : true,
	                     feature : {
	                         mark : {
	                             show : true
	                         },
	                         dataView : {
	                             show : true,
	                             readOnly : false
	                         },
	                         magicType : {
	                             show : true,
	                             type : [ 'line', 'bar' ]
	                         },
	                         restore : {
	                             show : true
	                         },
	                         saveAsImage : {
	                             show : true
	                         }
	                     }
	                 },  
	                 calculable : true,
	                 xAxis: [{  
	                     type: 'category', 
	                     data : [],
	                     axisLabel:{  
	                         interval: 0,
	                         rotate:40 ,
	                     },
	                     grid: {  
                        	 left: '10%',  
                        	 bottom:'35%'  
	                     },
	                 }],  
	                 yAxis: [{  
	                     type : 'value',
	                     axisLabel:{
		     					formatter:'{value}分'
		     				}
	                     }],  
	                 series: []	
			};
			
			$.ajax({
				url : 'teacher_getScore.action',
				type : 'get',
				dataType : 'json',
				async : false,//异步
				data : {
					coursesName : $('#fenxi_courses').combobox('getText'),
					exTime : $('#fenxi_exTime').combobox('getText'),
				},
				success : function (result) {
					$('#myecharts').dialog('open');
					//alert(result);
					if(result){
						option.xAxis[0].data = result.categoryList;
						var seriesData = [];
						//for(var i =0;i<5;i++){
							//option.series[i] = result.seriesList[i];
							seriesData.push({
					             'name': result.seriesList[0].name,
					             'type':'line',
					             'data': result.seriesList[0].data,
					             markPoint : {
					                    data : [ {
					                        type : 'max',
					                        name : '最大值'
					                    }, {
					                        type : 'min',
					                        name : '最小值'
					                    } ]
					                },
					                markLine : {
					                    data : [ {
					                        type : 'average',
					                        name : '平均值'
					                    } ]
					                }
					             });  
							
							
							option.series = seriesData;
						//}
						option.legend.data = result.legendList;
						myecharts.setOption(option, true);
						
					}else {
						alert('未找到有效数据，请重试！！！');
						$('#myecharts').dialog('close');
					}   
			     },
			     error : function() {
			    	 
			    }
			}); 
			
		},
		/**
		 * 显示考试参数
		 */
		showParameter : function() {	
			//var rows = $('#mscore').datagrid('getSelections');
			//console.log(rows);
			//if (rows.length>1) {
			//	$.messager.alert('警告','只能选择一条分数进行显示！','waring');
			//}else if (rows.length == 0) {
			//	$.messager.alert('警告','请选择一条分数进行查看！','waring');
			//} else if(rows.length == 1){
				$('#parameter').dialog('open');
				$('#parameter_paper').combobox({
					valueField : 'paperId',
					textField : 'paperName',
					url : 'question_getpaper.action',
					width : 200,
					panelHeight : 200,
					required : true,
					missingMessage : '请选择试卷',
					editable : true,
				});
				$('#parameter_exTime').combobox({
					valueField : 'exId',
					textField : 'exTime',
					url : 'fenxi_getextime.action',
					width : 200,
					panelHeight : 200,
					required : true,
					missingMessage : '请选择试卷',
					editable : true,
				});
		}
	};
	
	$('#mscore').datagrid({
		title : '分数列表',
		url : 'teacher_showScore.action',
		fitColumns : true,
		border : false,
		rownumbers : true,
		pagination : true,
		pageNumber : 1,
		pageSize : 5,
		pageList : [5,10,15,20],
		pagePosition : 'bottom',
		sortName : 'studentNo',
		sortOrder : 'ASC',
		remoteSort : true,
		toolbar : '#fenxi_ts',
		columns : [[
			{
				title : '主键',
				field : 'scId',
				checkbox : true,
				align : 'center'
			},
			{
				title : '学号',
				field : 'studentNo',
				width : 100,
				sortable : true,
			},
			{
				title : '分数',
				field : 'ascore',
				width : 100,
				sortable : true,
			},
			{
				title : '试卷',
				field : 'paperName',
				width : 100,
			},
			{
				title : '考试时间',
				field : 'exTime',
				width : 100,
			},
			{
				title : '考试名称',
				field : 'exName',
				width : 100,
			}
		]],
		onLoadSuccess: function (data) {
	            if (data.total == 0) {
	                //添加一个新数据行，第一列的值为你需要的提示信息，然后将其他列合并到第一列来，注意修改colspan参数为你columns配置的总列数
	                $(this).datagrid('appendRow', { studentNo: '<div style="text-align:center;color:red">没有相关记录！</div>' }).datagrid('mergeCells', { index: 0, field: 'studentNo', colspan: 5 })
	                //隐藏分页导航条，这个需要熟悉datagrid的html结构，直接用jquery操作DOM对象，easyui datagrid没有提供相关方法隐藏导航条
	                $(this).closest('div.datagrid-wrap').find('div.datagrid-pager').hide();
	            }
	            //如果通过调用reload方法重新加载数据有数据时显示出分页导航容器
	            else $(this).closest('div.datagrid-wrap').find('div.datagrid-pager').show();
	        }
	});
	$('#fenxi_courses').combobox({
		valueField : 'coursesId',
		textField : 'coursesName',
		url : 'paper_getCourses.action',
		width : 200,
		panelHeight : 200,
		required : true,
		missingMessage : '请选择课程',
		editable : true,
	});
	$('#fenxi_exTime').combobox({
		url : 'fenxi_getextime.action',
		valueField : 'exId',
		textField : 'exTime',
		width : 200,
		panelHeight : 200,
		required : true,
		missingMessage : '请选择考试时间',
		editable : true,
		/*onSelect : function(row) {
			if (row!=null) {
				$('#exName').combobox({
					url : "fenxi_getexName.action?exId="+row.exId,
				});
			}
		}*/
	});
	/*$('#exName').combobox({
		url : 'fenxi_getextime.action',
		valueField : 'exId',
		textField : 'exName',
		width : 200,
		panelHeight : 200,
		required : true,
		missingMessage : '请选择考试名称',
		editable : true,
	});*/
	$('#myecharts').dialog({
		width : 600,
		height : 600,
		title : '图表显示',
		iconCls : 'icon-add',
		closed : true,
		//modal : true,
		buttons : [{
			text : '确定',
			iconCls : 'icon-add',
			handler : function() {
				$('#myecharts').dialog('close');
			},
		},{
			text : '取消',
			iconCls : 'icon-redo',
			handler : function() {
				$('#myecharts').dialog('close');
			},
		}]
	});
	//参数弹窗
	$('#parameter').dialog({
		width : 350,
		height : 400,
		title : '参数框',
		iconCls : 'icon-add',
		closed : true,
		//modal : true,
		buttons : [{
			text : '确定',
			iconCls : 'icon-add',
			handler : function() {
				$.ajax({
					url : 'teacher_getparameter.action',
					type : 'post',
					data : {
						paperId : $('#parameter_paper').combobox('getValue'),
						exTime : $('#parameter_exTime').combobox('getText'),
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
							
							$('#parameter').form('load',{

								studentNum : data.studentNum,
								fullScore : data.fullScore,
								maxScore : data.maxScore,
								minScore : data.minScore,
								aveScore : data.aveScore,
								variance : data.variance,
								dod : data.dod,
								
							}).dialog('open');
						}else {
							$.messager.alert('请求失败！','未知错误！请重试','warning');
						}
					}
				
				});
			},
		},{
			text : '取消',
			iconCls : 'icon-redo',
			handler : function() {
				$('#parameter').dialog('close').form('reset');
			},
		}]
	});
	
	
	
	
});


