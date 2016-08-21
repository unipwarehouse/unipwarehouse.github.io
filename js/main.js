// Affix for navbar)
$(document).ready(function(){
	var na  = $(".navbar-affix");
	var nas = "navbar-affix-scrolled";
	var hdr = $('header').outerHeight();

	$(window).scroll(function() {
	  if( $(this).scrollTop() > hdr - na.outerHeight()) {
	    $(na).addClass(nas);
	  } else {
	    $(na).removeClass(nas);
	  }	
	});
});