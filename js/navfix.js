var na  = $(".navbar-affix");
					nas = "navbar-affix-scrolled";
					hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr - na.height()) {
    na.addClass(nas);
  } else {
    na.removeClass(nas);
  }	
});