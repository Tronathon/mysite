import Cookies from 'js-cookie';

const node = document.querySelector('.js-landing');
const spanElFirst = document.querySelector('.js-flicker-1');
const spanElSecond = document.querySelector('.js-flicker-2');
const soloEl = document.querySelector('.js-done');
const cookieName = 'landing-animation';

if (node) {
	document.addEventListener('DOMContentLoaded', function () {

		if (!Cookies.get(cookieName)) {
			spanElFirst.classList.add('text-flicker-1');
			spanElSecond.classList.add('text-flicker-1');

			soloEl.addEventListener('animationend', function () {
				node.classList.add('active');
			})

			Cookies.set(cookieName, true);

		} else {
			node.style.display = 'none';
		}

	}, false);
}

