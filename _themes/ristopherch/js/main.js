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

//Infinite Scroll

$('.wrapper').infinitescroll({
	navSelector  	: ".pagination",
	nextSelector 	: ".pagination .older a:first",
	itemSelector 	: ".post",
	loading :
	{
		img: "_themes/ristopherch/img/loading.gif",
	    msgText: ""
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

	skrollr.menu.init(s, {
	    //skrollr will smoothly animate to the new position using `animateTo`.
	    animate: true,

	    //The easing function to use.
	    easing: 'quadratic',

	    //Multiply your data-[offset] values so they match those set in skrollr.init
	    scale: 2,

	    //How long the animation should take in ms.
	    duration: function(currentTop, targetTop) {
	        //By default, the duration is hardcoded at 500ms.
	        return 1500;

	        //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
	        //return Math.abs(currentTop - targetTop) * 10;
	    },
	});
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






