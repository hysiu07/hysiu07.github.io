const info = document.querySelector('#dane-programisty');
const btn = document.querySelector('.btn');

fetch(
	'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php'
)
	.then((res) => res.json())
	.then((data) => {
		console.log(data);

		const name = data.imie;
		const lastName = data.nazwisko;
		const occupation = data.zawod;
		const company = data.firma;

		const showUser = () => {
			info.textContent = `IMIĘ: ${name}, NAZWISKO: ${lastName}, ZAWÓD: ${occupation}, FIRMA: ${company}`;
		};

		btn.addEventListener('click', showUser);
	});

$(document).ready(function () {
	$.getJSON(
		'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
		function (data) {
            console.log(data);
			$('#btn').click(function () {
				$('#dane-programisty-jquery').text(
					`IMIĘ: ${data.imie}, NAZWISKO: ${data.nazwisko}, ZAWÓD: ${data.zawod}, FIRMA: ${data.firma}`
				);
			});
		}
	);
});
