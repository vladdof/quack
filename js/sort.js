let choose_form = document.querySelector('.choose-form'),
		  input = choose_form.getElementsByTagName('input'),

	 wrap_tabel = document.querySelector('.wrap-tabel'),
	  list_year = wrap_tabel.querySelectorAll('.list-year');

choose_form.addEventListener('change', function(event) {
	let value_target = event.target.value,
		class_target = event.target.className;
	console.log(value_target);
	console.log(class_target);

	if (class_target == 'year-auto') {
		for (let i = 0; i < list_year.length; i++) {
			if (value_target == list_year[i].value) {
				alert("Yes!");
			}
		}	
	} else {
		console.log("No");
	}

});