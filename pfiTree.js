/*! ****************************************************************************
	pfiTree
	tree view control, with support for nested lists
	Dual licensed under the MIT or GPL Version 2 licenses.

	@version: 1.0.0
	@date:    2014-07-02
	@depends: jquery.js
*******************************************************************************/
var pfiTree = {
	makeTree:function(ele){
		ele.children().each(function(){
			if($(this).children().length >= 1){
				$(this).addClass('parent-closed');
				return true;
			}else{
				$(this).addClass('child');
			}
		});
		$('.parent-closed > ul').toggle();
		$('.parent-closed, .parent-open').bind('click', function(e){
			var obj = $('.parent-closed, .parent-open').eq($('.parent-closed, .parent-open').index($(this)));
			e.preventDefault();
			if(obj.hasClass('parent-closed'))
			{
				obj.removeClass('parent-closed').addClass('parent-open');
			}else{
				obj.removeClass('parent-open').addClass('parent-closed');
			}
			obj.children().toggle();
			e.stopPropagation();
		});
	}
}