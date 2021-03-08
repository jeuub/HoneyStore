$(document).ready(function(){

	$('.menu-burger').click( function() {
		$('.bar').toggleClass('animate'); 
		$('.overlay').fadeToggle(100, 'linear'); 
		$('.menu-options-list').delay(100).addClass('slideDownIn');	
	});


		$('.menu-burger').keydown(function(e) {
	 if((e.keyCode === 13)||(e.keyCode === 32)) {
		$('.menu-burger').click();
	 }
		});
});

