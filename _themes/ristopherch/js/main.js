var container = document.querySelector('.wrapper');
var msnry = new Masonry( container, {
  // options
  columnWidth: container.querySelector('.grid-sizer'),
  itemSelector: ".post",
  gutter: 0,
  // transitionDuration: 0.4,
});

$( window ).load(function() {
  msnry.layout();
});


$('.wrapper').infinitescroll({
	navSelector  	: ".pagination",
	nextSelector 	: ".pagination .older a:first",
	itemSelector 	: ".post",

	  loading: {
}
},

function( newElements ) {
	var $newElems = $( newElements );
	msnry.appended( $newElems );
	msnry.layout();		
}

);


var s = skrollr.init({
forceHeight: false
});

// var myScroll = new IScroll('#info-wrapper', {
//     mouseWheel: true,
//     scrollbars: true
// });

