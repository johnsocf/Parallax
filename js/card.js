    (function () {
     
	     var $primaryAnchors = $('ul.nav a');
	     var $page = $('html,body')
	     
	     
	     $primaryAnchors.click(function (event) {
	         event.preventDefault(); //ignore the default behavior that would JUMP to the section
	         
	     $page.stop(true); 
		 $page.animate({scrollTop:$($(this).attr('href')).position().top+"px"}, 1500, 'swing');
		 
	     });
	    
     })(); //enclosure *annonymous.  function w. no name.  self-executing anonymous function.
      	
  $(document).ready(function() {
  		
  		var $page1 = $('#page1');
  		var $page2 = $('#page2');
  		var $page3 = $('#page3');
  		var $page3initial = $('#page3initial');
  		var $background = $('#background');
  		var $pagetwoheader = $('#pagetwo-header');

  $(window).on('scroll', function() {	  
	 	var y = $(window).scrollTop(); 
	 	var yOffset = y/2;
	 	var secondOffset = y/3 -(1/3)*$page1.offset().top;
	 	var firstOffset = y/3 -(1/3)*$page2.offset().top;
	 	var reverseOffset = -y/2;
				

		var scale = 1 + y/100 -(1/100)*$page2.offset().top;
		if(scale<1) {
			scale = 1
		}
		
		var nextscale = 1 + (y/100 -(1/100)*$page1.offset().top)*2;
		if(scale<1) {
			scale = 1
		}

	 	if($(window).width()>829) {
	 		if(y>=0 && y<992) 	{
	 			$page1.css('background-position', '30px ' + firstOffset + 'px' );
	 		}
	 		if(y>=100 && y<700) 	{
	 			$pagetwoheader.css({opacity: (0)});

	 		}
	 		if(y>=700 && y<1592) 	{
	 			// $page2.css('transform', 'translateX('+ (y-597)*5 + 'px)');
	 			$pagetwoheader.css({opacity: (y-100)/(1092-300)});


	 			// $page3initial.animate({opacity: y-y});
	 			// $page2.css('transform', 'scale('+ (-y) + 'px)');
	 		}

	 		if(y>=200 && y<1892) 	{
	 			// $page2.css('transform', 'translateX('+ (y-597)*5 + 'px)');
	 			// $page3.css({opacity: (y-200)/(1090-700)});
	 			$page3initial.css({opacity: (y-150)/(890-400)});
	 			$page3initial.css('transform', 'translateX('+ (Math.round(y/3.4)) + 'px)'); 


	 			// $page3initial.animate({opacity: y-y});
	 			// $page2.css('transform', 'scale('+ (-y) + 'px)');
	 		}

	 	$page1.css('background-position', '0px ' + yOffset + 'px' );

	 	$page2.css('background-position', '0px ' + reverseOffset + 'px' );
	 	$background.css('background-position', '0px ' + reverseOffset + 'px' );
	 }
	 
	 else {
	 		if(y>=0 && y<992) 	{
	 			$page1.css('background-position', '30px ' + firstOffset + 'px' );
	 		}
	 		if(y>=100 && y<400) 	{
	 			$pagetwoheader.css({opacity: (0)});

	 		}
	 		if(y>=700 && y<1592) 	{
	 			// $page2.css('transform', 'translateX('+ (y-597)*5 + 'px)');
	 			$pagetwoheader.css({opacity: (y-100)/(1092-300)});


	 			// $page3initial.animate({opacity: y-y});
	 			// $page2.css('transform', 'scale('+ (-y) + 'px)');
	 		}

	 		if(y>=200 && y<1892) 	{
	 			// $page2.css('transform', 'translateX('+ (y-597)*5 + 'px)');
	 			// $page3.css({opacity: (y-200)/(1090-700)});
	 			$page3initial.css({opacity: (y-150)/(890-400)});
	 			$page3initial.css('transform', 'translateX('+ (Math.round(y/6)) + 'px)'); 


	 			// $page3initial.animate({opacity: y-y});
	 			// $page2.css('transform', 'scale('+ (-y) + 'px)');
	 		}

	 	$page1.css('background-position', '0px ' + yOffset + 'px' );

	 	$page2.css('background-position', '0px ' + reverseOffset + 'px' );
	 	$background.css('background-position', '0px ' + reverseOffset + 'px' );
	 }
  });	
  });   