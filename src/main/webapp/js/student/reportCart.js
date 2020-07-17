/**
 * 将成绩导出到excel文件中
 */
$(function() {
	report = {
			importReport : function() {
				var exTime = $('#report_exTime').combobox('getText');
				if (exTime != null && exTime !='') {
					$.ajax({
						url : 'importReport.action',
						type : 'post',
						data : {
							exTime : exTime,
						},
						//dateType : 'file',
						success : function(data) {
							if (data) {
								//$.message.alert('提示','成绩单生成成功！','info');
							}else {
								//$.message.alert('错误','未知错误！请重试！','error');
							}
							
						}
						
					});
				}else {
					$.message.alert('提示！','请选择参加考试的时间','info');
				}
			}	
	}
	 
	
	$('#exTime').combobox({
	url : 'student_fenxi_getextime.action',
	valueField : 'exId',
	textField : 'exTime',
	width : 200,
	panelHeight : 200,
	required : true,
	missingMessage : '请选择考试时间！',
	editable : true,
	});

})
	

