$(document).ready(function(){
	
	var hash = window.location.hash;
	$( ".accordion a" ).each(function() {
		if($(this).attr("href") == hash){
			console.log($(this).data("href"));
			$(this).parent().find('.frame_content').attr("src", $(this).data("href"));
		}
	});
		    
	 $('.accordion a').click(function(){
		$('.frame_content').attr("src", "about:blank");
		$(this).parent().find('.frame_content').attr("src", $(this).data("href"));
    });

    
});
