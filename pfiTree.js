function makeTree(ele){
	ele.children().each(function(){
		if($(this).children().length >= 1){
			$(this).addClass('parent-closed');
			makeTree($(this));
			return true;
		}else{
			$(this).addClass('child');
		}
	});
	//this code will 'collapse' the parent node
	$.each(ele.children(),function(){
		var l = $(this).find('ul');
		l.toggle();
	});
	//this code will assign click events to parent elements
	$.each(ele.children(), function(){
		if(ele.hasClass('parent-closed') || ele.hasClass('parent-open')){
			$(this).unbind('click').bind('click', function(e){
				e.preventDefault();
				if($(this).hasClass('parent-closed')){$(this).removeClass('parent-closed').addClass('parent-open')}else{$(this).removeClass('parent-open').addClass('parent-closed')}
				$(this).find('ul').toggle();
				e.stopPropagation();
			});
		}
	});
	//This assigns the navigation to the child elements if the li clicked has a data-app attribute
	$('.child').unbind('click').bind('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		if($(this).data('app')){
			var name = window.navigator.appName;
			if(name == 'Microsoft Internet Explorer'){
				window.navigate($(this).data('app'));
			}
			else{
				window.open($(this).data('app'));
			}
		}
	});
}