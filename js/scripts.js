$(document).ready(function(){
	
	setInterval(function() {
	  function r(el, deg) {
	    el.setAttribute('transform', 'rotate('+ deg +' 50 50)')
	  }
	  var d = new Date()
	  r(sec, 6*d.getSeconds())  
	  r(min, 6*d.getMinutes())
	}, 1000);
});

$(document).ready(function(){
	$('.nav-icon').click(function(){
		$(this).toggleClass('open');
		$('.an_clock').toggleClass('open');
		$('.social').toggleClass('open');	
		$(this).toggleClass("link");
		$(".an_clock").toggleClass("link");
		$(".social").toggleClass("link");
		
	});
});

$(document).ready(function() {
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
});
