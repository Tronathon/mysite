const hero = document.querySelector('.js-logo')
const textEl = Array.from(hero.querySelectorAll('span'));

function shadow(e) {
	const { offsetWidth: width, offsetHeight: height } = hero;
	const movement = 100

	let { offsetX: x, offsetY: y } = e;

	if (this !== e.target) {
		x = x + e.target.offsetLeft
		y = y + e.target.offsetTop
	}

	const xMovement = (x / width * movement) - (movement / 2);
	const yMovement = (y / width * movement) - (movement / 2);

	textEl.forEach(text => {
		text.style.textShadow = `
		${xMovement}px ${yMovement}px 0 rgba(44, 173, 186, 1),
		${xMovement * -1}px ${yMovement}px 0 rgba(255, 173, 186, 1)`
	});
}

function removeShadow(e) {
	textEl.forEach(text => {
		text.style.textShadow = `none`;
	});
}

hero.addEventListener('mousemove', shadow);

hero.addEventListener('mouseleave', removeShadow);
