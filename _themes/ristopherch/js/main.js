//Masonry

var container = document.querySelector('.wrapper');
var msnry = new Masonry( container, {
  // options
  columnWidth: container.querySelector('.grid-sizer'),
  itemSelector: ".post",
  gutter: 0,
});

$( window ).load(function() {
  msnry.layout();
});

// Infinite Scroll

$('.wrapper').infinitescroll({
	navSelector  	: ".pagination",
	nextSelector 	: ".pagination .older a:first",
	itemSelector 	: ".post",
	loading :
	{
		img: "_themes/ristopherch/img/loading.gif",
	    msgText: "",
	    finishedMsg: ""
	}
},
	function( newElements ) {
		var $newElems = $( newElements );
		msnry.appended( $newElems );
		msnry.layout();		
	}
);



//Skrollr
if (Modernizr.touch) {   
} else {   
	var s = skrollr.init({
	forceHeight: false
	});
}  



// scroll body to 0px on click
		$('.info-wrapper-down').click(function () {
			$('body,html').animate({
				scrollTop: $(".wrapper").offset().top
     }, 1500);
			return false;
		});


//
		$('.project-wrapper-down').click(function () {
			$('body,html').animate({
				scrollTop: $(".project-wrapper-bg").offset().top
     }, 1500);
			return false;
		});

//
		$('a.to-top').click(function () {
			$('body,html').animate({
				scrollTop: $("body").offset().top
     }, 1500);
			return false;
		});


//Video Intro

if (Modernizr.touch) {  
	$( ".videocontent" ).addClass( "remove" );
} 
else {
}


//iScroll

// var myScroll = new IScroll('#info-wrapper', {
//     mouseWheel: true,
//     scrollbars: true
// });


//ScrollDown



// //Toggling Info Panel


// $( ".nav-main" ).click(function() {
//   $("#info-wrapper").css({"top": "0","left": "0"});
//   $("body").css({"overflow": "hidden"});
// });

// $( ".info-btn" ).click(function() {
//   $("#info-wrapper").css({"top": "-9999px","left": "-9999px"});
//   $("body").css({"overflow": "visible"});
// });






