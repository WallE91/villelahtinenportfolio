//Animating into the clicked nav link href-position in the page

$(function() {
	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 500 );
		}
	});
});


//Changing active nav link at the same time when scrolling down the page into the right href-position

 $(window).on('scroll', function(event){
   var scrollPos = $(document).scrollTop();
   $("nav li a").each(function () {
	 var currLink = $(this);
	 var refElement = $(currLink.attr("href"));

	 if (refElement.position().top-70 <= scrollPos && refElement.position().top-50 + refElement.height() > scrollPos) {
	   currLink.parent().addClass("active").siblings().removeClass("active"); 
	   return;
	 }
	 else{
	   currLink.parent().removeClass("active");
	 }
   })
 })


// Hide the collapsed nav menu when clicking any link including a nav link, this works only on mobile screens. 
 
$(document).ready(function() {
  $(".navbar-collapse").collapse('hide');
  $("body").click(function(event) {
	$(".navbar-collapse").collapse('hide');
  });
});



// Chart settings for skillset percentages

$(document).ready(function() {
  $('.circle').circliful({
	  showPercent: 1,
	  foregroundBorderWidth: 15,
      backgroundBorderWidth: 7,
	  backgroundColor: '#000',
	  foregroundColor: '#c400a5',
	  fontColor: '#000',
	  percentageTextSize: 16,
	  animation: 0,
	  targetTextSize: 24,
	  textColor: '#000',
	  text: '',
	  textAdditionalCss: 'font-weight:600;',
  });
});










