// Affix for navbar)
$(document).ready(function(){
	var na  = $(".navbar-affix");
			nas = "navbar-affix-scrolled";
			hdr = $('header').height();

	$(window).scroll(function() {
	  if( $(this).scrollTop() > hdr - na.outerHeight()) {
	    na.addClass(nas);
	  } else {
	    na.removeClass(nas);
	  }	
	});
});