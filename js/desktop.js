$(document).ready(function(){
	
	$('.tooltip').tooltipster({
        contentAsHTML: true,
        arrow:false,
        theme: 'tooltipster-red',
        hideOnClick:true
    });
    
    $('.saga_saver a').click(function(){
		$("#frame_content").attr("src", $(this).data("href"));
		$('.frame').show();	
		$(".an_clock").addClass("link");
		$('.nav-icon').addClass("link");
		$('.social').addClass("link");
    });
    
    $('.display').click(function(e){
	    e.preventDefault();
		$("#frame_content").attr("src", "about:blank");
		$('.frame').hide();	
		$(".an_clock").removeClass("link");	
		$('.nav-icon').removeClass("link");	
		$('.social').removeClass("link");
    });
    
    function setHeight() {
        var width = $(window).width();
        viewportHeight = $(window).innerHeight();
        windowHeight = viewportHeight;
        $('.container').css('height', windowHeight);  
    }
    setHeight();  
    $(window).resize(function() {
        setHeight();
    });
			
	function randomIntFromInterval(min,max) {
	    return Math.floor(Math.random()*(max-min+1)+min);
	}

	var classes = ['right', 'top', '', ''];
	
	$( ".saga_saver a" ).each(function() {		
	    $(this).addClass(classes[Math.floor(Math.random()*classes.length)]);
	    $(this).addClass(classes[Math.floor(Math.random()*classes.length)]);
		var elWidth= $('.container').width() - $(this).width();
		var elHeight = $('.container').height() - $(this).height();
		var nameLink = $(this).attr("id");
		var idLink = nameLink.substring(3, 5);
		if ($(this).hasClass("right")){
			var css = $('<style>@keyframes moveX'+idLink+'{0% {right:0px;} 100% {right:'+elWidth+'px;}}</style>').appendTo('head');
		}
		else{
			var css = $('<style>@keyframes moveX'+idLink+'{0% {left:0px;} 100% {left:'+elWidth+'px;}}</style>').appendTo('head');
		}
		if ($(this).hasClass("top")){
			var css = $('<style>@keyframes moveY'+idLink+'{0% {top:0px;} 100% {top:'+elHeight+'px;}}</style>').appendTo('head');
		}
		else{
			var css = $('<style>@keyframes moveY'+idLink+'{0% {bottom:0px;} 100% {bottom:'+elHeight+'px;}}</style>').appendTo('head');
		}	
		var css = $('<style>#'+nameLink+'{animation-duration:'+randomIntFromInterval(25,45)+'s'+','+randomIntFromInterval(30,50)+'s'+';}</style>').appendTo('head');
			 	
	});
    
});
