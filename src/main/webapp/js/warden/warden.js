/**
 * 管理员页面的js
 */
$(function() {
	$('#nav').tree({
		url : '/sys/menu/getNav',
		//url : 'warden.json'
		method : 'post',
		lines : true,
		onClick : function(node) {
			if (node.url) {
				if ($('#tabs').tabs('exists',node.text)) {
					$('#tabs').tabs('select',node.text);
				}
				else {
					$('#tabs').tabs('add',{
						title : node.text,
						fit : true,
						border : false,
						closable : true,
						href : node.url,
						// href : node.url + '.jsp',
					})
				}
			}
		}
	});
	
	$('#tabs').tabs({
		border : false,
		fit : true,
	});
	
	
	
});

