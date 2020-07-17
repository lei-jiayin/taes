/**
 * 教师课程
 */
$(function() {
	$('#teachercourses').datagrid({
		title:'课程负责表',
		url : 'showtCourses.action',
		fitColumns : true,
		rownumbers : true,
		border : false,
		columns : [[
			/*{
				title : '主键',
				field : 'teacherId',
				width : 100,
				//checkbox : true,
				align : 'center'
			},*/
			{
				title : '教师姓名',
				field : 'teacherName',
				width : 100,
				align : 'center',
				formatter : function(index,row,value) {
					return row.teacher.teacherName;
				}
			},
			{
				title : '课程名称',
				field : 'coursesName',
				width : 100,
				align : 'center',
				formatter : function(index,row,value) {
					return row.courses.coursesName;
				}
			},
			{
				title : '负责时间',
				field : 'semester',
				width : 100,
				align : 'center',
			}
		]],
		pagination : true,
		pageNumber : 1,
		pageSize : 1,
		pageList : [1,2,3,4],
		pagePosition : 'bottom',
		sortName : 'semester',
		sortOrder : 'ASC',
		remoteSort : true,
		//toolbar : '#info_tools'
		
	});
});
