window.onload = function() {

	let inputName = document.querySelector('.name-auto'),
		inputYear = document.querySelector('.year-auto'),
	   	inputPrice = document.querySelector('.price-auto'),
		inputDes = document.querySelector('.description-auto'),
	   	inputRadio = document.getElementsByName('color'),
		select = document.getElementById('select'),
		btnSend = document.querySelector('.choose-btn'),
		tabel = document.querySelector('.wrap-tabel');

	function createEl() {

		let listAll = document.createElement('div'),
			descr = document.createElement('div'),
		  	descrSpan = document.createElement('span'),
			year = document.createElement('div'),
		  	colorWrap = document.createElement('div'),
			color = document.createElement('div'),
			status = document.createElement('div'),
			price = document.createElement('div'),
			btnWrap = document.createElement('div'),
			btnDel = document.createElement('button');

		   	listAll.classList.add('list-all');
			descr.classList.add('list-description');
			year.classList.add('list-year');
			colorWrap.classList.add('list-color');
			color.classList.add('list-color_w');
			status.classList.add('list-status');
			price.classList.add('list-price');
			btnWrap.classList.add('list-btn');
			btnDel.classList.add('list-btn_del');

			// заполнил название
			descr.innerHTML = inputName.value + '<br>';
			if (inputName.value == '') {
				return alert('Введите название');
			} else {
				listAll.appendChild(descr);
			}

			// заполнил год
			year.textContent = inputYear.value;
			if (inputYear.value == '') {
				return alert('Введите год');
			} else if (inputYear.value.length != 4) {
				return alert('Введите год в формате 2010');
			} else {
				listAll.appendChild(year);
			}

			// заполнили цвет
			let checked = document.querySelector('input:checked');
			if (checked) {
			  let b = checked.value;
			  color.classList.add(`list-color_${b}`);
			} else {
				return alert('Укажите цвет');
			}
			listAll.appendChild(colorWrap);
			colorWrap.appendChild(color);

			// заполнили статус
			if (select.value == 'Статус') {
				return alert('Введите статус');
			} else {
				status.textContent = select.value;
				listAll.appendChild(status);
			}

			// цена авто
			price.innerHTML = inputPrice.value + ' руб.';
			if (inputPrice.value == '') {
				return alert('Введите цену');
			} else {
				listAll.appendChild(price);
			}

			// если есть описание (span element)
			if (inputDes.value != 0) {
				descrSpan.innerHTML = '+ ' + inputDes.value;
				descr.appendChild(descrSpan);
			}

			// btn-del
			btnDel.textContent = 'Удалить';
			listAll.appendChild(btnWrap);
			btnWrap.appendChild(btnDel);

			// создал таблицу
			tabel.appendChild(listAll);

			setTimeout(function() {
				let firstLine = document.querySelectorAll('.first-line input'),
					secondLine = document.querySelector('.description-auto');

				for (let i = 0; i < firstLine.length; i++) {
					firstLine[i].value = '';
				}

				secondLine.value = '';
				if (select.value != 'Статус') {
					select.selectedIndex = 0;
				}

				for ( let i = 0; i < inputRadio.length; i++) {
					inputRadio[i].checked = false;
				}
			}, 10);

			// btn del
			let clickDel = document.querySelectorAll('.list-btn_del');
			for (let i = 0; i < clickDel.length; i++) {
				clickDel[i].onclick = () => {
					let wrapBtn = document.querySelectorAll('.list-btn')[i],
					 	parentWrap = wrapBtn.parentNode;

					parentWrap.style.display = 'none';
				}
			}
	};

	btnSend.addEventListener('click', function() {
		createEl();
	});

	let del = document.querySelectorAll('.list-btn_del');
	for (let i = 0; i < del.length; i++) {
		del[i].onclick = () => {
			let wrapBtn = document.querySelectorAll('.list-btn')[i],
				parentWrap = wrapBtn.parentNode;

			parentWrap.style.display = 'none';
		}
	}
}
