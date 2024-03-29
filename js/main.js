// Affix for navbar)
$(document).ready(function(){
	var na  = $(".navbar-affix");
	var nas = "navbar-affix-scrolled";
	var hdr = $('header').outerHeight();
	var year = $('.copy-year');

	year.textContent = new Date().getFullYear();

	$(window).scroll(function() {
	  if( $(this).scrollTop() > hdr - na.outerHeight()) {
	    $(na).addClass(nas);
	  } else {
	    $(na).removeClass(nas);
	  }	
	});

	// Cache selectors
	var lastId,
	    topMenu = $("#navfix"),
	    topMenuHeight = topMenu.outerHeight(),
	    // All list items
	    menuItems = topMenu.find("ul.hook a"),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr("href"));
	      if (item.length) { return item; }
	    });

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 900);
	  e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href='#"+id+"']").parent().addClass("active");
	   }                   
	});
});