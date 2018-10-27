$(document).ready(function(){
	$('.name-auto').on({
		click: function(){
	   		$('#name-auto').css({"top":"-30%","display":"block"})
	   	},
	   	blur: function(){
	   		$('#name-auto').css({"top":"50%","display":"none"})
	   	}
	});
	$('.year-auto').on({
		click: function(){
	   		$('#year-auto').css({"top":"-30%","display":"block"})
	   	},
	   	blur: function() {
	   		$('#year-auto').css({"top":"50%","display":"none"})
	   	}
	});
	$('.price-auto').on({
		click: function(){
	   		$('#price-auto').css({"top":"-30%","display":"block"})
	   	},
	   	blur: function(){
	   		$('#price-auto').css({"top":"50%","display":"none"})
	   	}
	});
	$('.description-auto').on({
		click: function(){
	   		$('#description-auto').css({"top":"-30%","display":"block"})
	   	},
	   	blur: function(){
	   		$('#description-auto').css({"top":"50%","display":"none"})
	   	}
	});
});