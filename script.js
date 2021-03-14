$(document).ready(function(){

	$('.menu-burger').click( function() {
		$('.menu-burger')
		$('.menu-burger').toggleClass('above-overlay');
		$('.bar').toggleClass('animate'); 
		$('.overlay1').fadeToggle(100, 'linear'); 
		$('.menu-options-list').delay(100).addClass('slideDownIn');	
	});


		$('.menu-burger').keydown(function(e) {
	 if((e.keyCode === 13)||(e.keyCode === 32)) {
		$('.menu-burger').click();
	 }
		});
	$('.nav-search').click( function() {
		$('body').toggleClass('onMenu');
		$('.overlay2').fadeToggle(100, 'linear');
		$('.nav-search').toggleClass('above-overlay');
		$('.nav__icon__svg').toggleClass('svg-onclick');
		$('.menu-options-list-search').delay(100).addClass('slideDownIn');
	});
});

