var sale = 5,
	days = Number(document.querySelector('#day').value),
	dinnerFortwo = new Option("2", "900"), //option 2 visitior
	lanchFortwo = new Option("2", "500"), //option 2 visitior
	persons = Number(document.querySelector('#persons').value),
	lanch = Number(document.querySelector('#lanch').value),
	dinner = Number(document.querySelector('#dinner').value),
	dropdownParam = document.querySelectorAll('select'), //visitior+food
	radioParam = document.querySelectorAll('input'), //transfer+checktime
	transferEarly = 0,
	transferLate = 0,
	checktimeEarly = 0,
	checktimeLate = 0;

window.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.radio').forEach(function (radio) {
		(Number(radio.value) === 0) ? radio.checked = 'true': false;

	})
});

sum();

dropdownParam.forEach(function (param) {
	param.addEventListener('change', function () {
		switch (this.name) {
			case 'persons':
				persons = Number(this.value);
				var numberPerson = this.options[this.selectedIndex].text;
				console.log(persons);
				if (this.selectedIndex === 1) {
					document.querySelector('#lanch').appendChild(lanchFortwo);
					document.querySelector('#dinner').appendChild(dinnerFortwo);
				} else {
					document.querySelector('#lanch').selectedIndex = -1;
					document.querySelector('#dinner').selectedIndex = -1;
					lanch = 0;
					dinner = 0;
					lanchFortwo.parentNode.removeChild(lanchFortwo);
					dinnerFortwo.parentNode.removeChild(dinnerFortwo);
				}
				break;
			case 'select-lanch':
				lanch = Number(this.value);
				break;
			case 'select-dinner':
				dinner = Number(this.value);
				break;
			case 'day':
				days = Number(this.value);
				break;
			default:
				return false;
		}
		sum();
	});
});
radioParam.forEach(function (param) {
	param.addEventListener('change', function () {
		switch (this.name) {
			case 'radio-early':
				transferEarly = Number(this.value);
				break;
			case 'radio-late':
				transferLate = Number(this.value);
				break;
			case 'radio-checktime-early':
				checktimeEarly = Number(this.value);
				break;
			case 'radio-checktime-late':
				checktimeLate = Number(this.value);
				break;
			default:
				return false;
		}

		if (transferEarly === 700 && transferLate === 1000) {

			document.querySelector('input[name="radio-early"]').checked = 'true';
			document.querySelector('input[name="radio-late"]').checked = 'true';
			transferLate = 0;
			transferEarly = 0;
		}

		if (transferEarly === 700) {
			document.querySelector('input[name="radio-late"]').checked = 'true';
			transferLate = 0;
		}
		if (transferLate === 1000) {
			document.querySelector('input[name="radio-early"]').checked = 'true';
			transferEarly = 0;
		}
		sum();
	});
});

function sum() {
	var result = checktimeLate * persons + checktimeEarly * persons + persons * days + lanch + dinner + transferEarly + transferLate,
		resultSale = result - result * (sale / 100);
	document.querySelector("#pay_price").innerHTML = persons + ' &#8381';
	document.querySelector(".price-lanch").textContent = lanch + ' рублей';
	document.querySelector(".price-dinner").textContent = dinner + ' рублей';
	document.querySelector("#days").textContent = days;
	document.querySelector("#pay_sale").innerHTML = result + ' &#8381';
	document.querySelector("#condition_sale").innerHTML = '-' + sale + '%' + '=' + resultSale + ' &#8381' + ' **';
};

function transferCheck() {
	if (transferEarly === 700) {
		document.querySelector('input[name="radio-late"]').checked = 'true';
		console.log(transferLate);
		transferLate = 0;
		console.log(transferLate);
	}
	if (transferLate === 1000) {
		document.querySelector('input[name="radio-early"]').checked = 'true';
		console.log(transferEarly);
		transferEarly = 0;
		console.log(transferEarly);
	}
}

//
//console.log(persons);
//	console.log(lanch);
//	console.log(dinner);
//	console.log(transferEarly);
//	console.log(transferLate);
//	console.log(checktimeEarly);
//	console.log(checktimeLate);
