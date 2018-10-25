$(document).ready(function(){
	$('.name-auto').on('click', function(){
	   $('#name-auto').css("top", "-30%")
	});
	$('.year-auto').on('click', function(){
	   $('#year-auto').css("top", "-30%")
	});
	$('.price-auto').on('click', function(){
	   $('#price-auto').css("top", "-30%")
	});
	$('.description-auto').on('click', function(){
	   $('#description-auto').css("top", "-30%")
	});

	$('.name-auto').on('blur', function(){
		$('#name-auto').css("top", "50%")
	});
	$('.year-auto').on('blur', function(){
		$('#year-auto').css("top", "50%")
	});
	$('.price-auto').on('blur', function(){
		$('#price-auto').css("top", "50%")
	});
	$('.description-auto').on('blur', function(){
	   $('#description-auto').css("top", "50%")
	});

});