/**
 * 成绩分析
 */
$(function() {
	$('#showScore').datagrid({
		title : '成绩列表',
		url : 'daoruScore.action',
		fitColumns : true,
		border : false,
		rownumbers : true,
		columns : [ [ {
			title : '主键',
			field : 'scId',
			width : 100,
			// sortable : true,
			checkbox : true,
			align : 'center'
		}, {
			title : '学号',
			field : 'studentNo',
			width : 100,
			sortable : true,
			// checkbox : true,
			align : 'center',
		}, {
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
		}, {
			title : '考试时间',
			field : 'exTime',
			width : 100,
			sortable : true,
			align : 'center'
		}, {
			title : '考试名称',
			field : 'exName',
			width : 100,
			sortable : true,
			align : 'center',
		}, ] ],

		pagination : true,
		pageNumber : 1,
		pageSize : 5,
		pageList : [ 5, 10, 15, 20 ],
		pagePosition : 'bottom',
		sortName : 'ascore',
		sortOrder : 'ASC',
		remoteSort : true,
		toolbar : '#fenxi_tools',
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

	fenxi_tool = {

		reload : function() {
			$('#showScore').datagrid('reload');
		},
		redo : function() {
			$('#showScore').datagrid('unselectAll');
		},

		search : function() {
			//alert($('input[name="keyword"]').val());
			$('#showScore').datagrid('load', {
				coursesName : $('#student_courses').combobox('getText'),
				exTime : $('#student_exTime').combobox('getText'),
			});
		},

		remove : function() {
		},

		showEcharts : function() {
			// $("#panel").slideToggle(999);
			//if($('#student_exTime').combobox('getText')!=null){}
			// 指定图标的配置和数据
			var option = {
	 				title : {
	 					text : '考试分数分析图',
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

			// 初始化echarts 实例
			var myChart = echarts.init(document.getElementById('panel'));
			// 使用制定的配置项和数据显示图表
			myChart.showLoading();
			var exTime = $('#student_exTime').combobox('getText');
			if (exTime!=null && exTime != '') {
				$.ajax({
					type : "post",
					async : false,
					url : "student_getscore.action",
					data : {
						// coursesName :
						// $('#student_courses').combobox('getText'),
						exTime : $('#student_exTime').combobox('getText'),
					},
					dataType : "json",
					success : function(result) {
						//alert(result);
						if (result) {
							$('#panel').panel('open');
							myChart.hideLoading();
							option.xAxis[0].data = result.categoryList;
							var seriesData = [];
							// for(var i =0;i<5;i++){
							// option.series[i] = result.seriesList[i];
							seriesData.push({
								'name' : result.seriesList[0].name,
								'type' : 'line',
								'data' : result.seriesList[0].data,
								markPoint : {
									data : [ {
										type : 'max',
										name : '最大值'
									}, {
										type : 'min',
										name : '最小值'
									} ]
								}
							});

							option.series = seriesData;
							// }
							option.legend.data = result.legendList;
							myChart.setOption(option, true);

						}else {
							alert('数据为空！');
						}
					}

				});
			}else {
				$.messager.alert('提示','请选择考试时间','info');
			}
				
		},
		showparament : function() {
			var rows = $('#showScore').datagrid('getSelections');
			if (rows.length>1) {
				$.messager.alert('提示','只能选择一条分数信息进行查看！','info');
			}else if (rows.length == 0) {
				$.messager.alert('提示','请选择一条分数信息进行查看！','info');
			} else if(rows.length == 1){
				$.ajax({
					url : 'student_fenxi_getparament.action',
					data : {
						//scId : rows[0].scId,
						paperName : rows[0].paperName,
						exTime : rows[0].exTime,
					},
					dataType : 'json',
					success : function(data) {
						if (data !=null) {
							$('#parameter').dialog('open').form('load',{
								studentNum : data.studentNum,
								fullScore : data.fullScore,
								maxScore : data.maxScore,
								minScore : data.minScore,
								aveScore : data.aveScore,
								variance : data.variance,
								dod : data.dod,
						});
					}else {
						alert('该考试尚未录入详细数据！！！');
					}
						
					},
					error : function() {
						
					}
					
					
				});
			}
		}
	}
	
	$('#student_courses').combobox({
		url : 'student_fenxi_getcourses.action',
		valueField : 'coursesId',
		textField : 'coursesName',
		width : 200,
		panelHeight : 200,
		required : true,
		missingMessage : '请选择课程名称',
		editable : true,
	});
	
	$('#student_exTime').combobox({
		url : 'student_fenxi_getextime.action',
		valueField : 'exId',
		textField : 'exTime',
		width : 200,
		panelHeight : 200,
		required : true,
		missingMessage : '请选择考试时间',
		editable : true,
	});
	
	$('#panel').dialog({
		width : 500,
		height : 500,
		title : '图表显示',
		iconCls : 'icon-add',
		closed : true,
		//modal : true,
		buttons : [{
			text : '确定',
			iconCls : 'icon-add',
			handler : function() {
				$('#panel').dialog('close');
			},
		},{
			text : '取消',
			iconCls : 'icon-redo',
			handler : function() {
				$('#panel').dialog('close');
			},
		}]
	});
	
	$('#parameter').dialog({
		width : 350,
		//height : 400,
		title : '参数框',
		iconCls : 'icon-add',
		closed : true,
		//modal : true,
		buttons : [{
			text : '确定',
			iconCls : 'icon-add',
			handler : function() {
				$('#parameter').dialog('close').form('reset');
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
