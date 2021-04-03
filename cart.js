$(document).ready(function(){

	$('.menu-burger').click( function() {
		$('.menu-burger').toggleClass('fixed');
		$('.menu-burger').toggleClass('above-overlay');
		$('.bar').toggleClass('animate');
    $('body').toggleClass('onMenu'); 
		$('.overlay1').fadeToggle(100, 'linear'); 
		$('.menu-options-list').delay(100).addClass('slideDownIn');	
	});
		$('.menu-burger').keydown(function(e) {
	 if((e.keyCode === 13)||(e.keyCode === 32)) {
		$('.menu-burger').click();
	 }
		});

		$('.menu-option').click(function(){
			$(this).find('>a')[0].click();
			if ($('.menu-burger').hasClass('fixed')) {
				$('.menu-burger').click();
			}
		});

	$('.nav-search').click( function() {
		$('.nav-searchCart').toggleClass('above-overlay');
		$('body').toggleClass('onMenu');
		$('.overlay2').fadeToggle(100, 'linear');
		$('.nav-search').toggleClass('above-overlay');
		$('.nav__icon__svg').toggleClass('svg-onclick');
		$('.menu-options-list-search').delay(100).addClass('slideDownIn');
	});
	
	$('.weight__extender').click(function() {
		$(this).toggleClass('market__dropdownicon-animated');
		if ($(this).hasClass('deactive')){
			$(this).parent().find('>.card__weight--extended').show();
			$(this).removeClass('deactive');
		} else {
			$(this).parent().find('>.card__weight--extended').hide();
			$(this).addClass('deactive');
		}
	});

	$('.increase').click(function(){
		 $(this).parent().find('>.card__qnnt__input').val(parseInt($(this).parent().find('>.card__qnnt__input').val()) + 1);
	});

	$('.card__decrease').click(function(){
		if(parseInt($(this).parent().find('>.card__qnnt__input').val())>1 )
		$(this).parent().find('>.card__qnnt__input').val(parseInt($(this).parent().find('>.card__qnnt__input').val()) - 1);
 });
});

