$(function(){
	
	
	
	$(document).on('expand', '.ui-collapsible', function(event) {
		 $(this).children('.ui-collapsible-content').hide().slideDown(700);
		 event.stopPropagation();
	 });

	 $(document).on('collapse', '.ui-collapsible', function(event) {
			 $(this).children('.ui-collapsible-content').slideUp(700);
			 event.stopPropagation();
	 });
 
})