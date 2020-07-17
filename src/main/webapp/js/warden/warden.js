/**
 * 管理员页面的js
 */
$(function() {
	$('#nav').tree({
		url : 'warden_getNav.action',
		//url : 'warden.json'
		method : 'GET',
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
						href : node.url + '.jsp',
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

