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

var myScroll = new IScroll('#info-wrapper', {
    mouseWheel: true,
    scrollbars: true
});