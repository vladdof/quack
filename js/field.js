$(document).ready(function(){
	$('.name-auto').on('click', function(){
	   $('#name-auto').css({"top":"-30%","display":"block"})
	});
	$('.year-auto').on('click', function(){
	   $('#year-auto').css({"top":"-30%","display":"block"})
	});
	$('.price-auto').on('click', function(){
	   $('#price-auto').css({"top":"-30%","display":"block"})
	});
	$('.description-auto').on('click', function(){
	   $('#description-auto').css({"top":"-30%","display":"block"})
	});

	$('.name-auto').on('blur', function(){
		$('#name-auto').css({"top":"50%","display":"none"})
	});
	$('.year-auto').on('blur', function(){
		$('#year-auto').css({"top":"50%","display":"none"})
	});
	$('.price-auto').on('blur', function(){
		$('#price-auto').css({"top":"50%","display":"none"})
	});
	$('.description-auto').on('blur', function(){
	   $('#description-auto').css({"top":"50%","display":"none"})
	});

});