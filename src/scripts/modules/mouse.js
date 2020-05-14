const mouse = document.querySelector('.js-mouse');
const links = Array.from(document.getElementsByTagName('a'));
const sideNav = document.querySelectorAll('.js-nav');
const inputs = Array.from(document.getElementsByTagName('input'));

window.addEventListener('mousemove', cursorLoc);

function cursorLoc(event) {
	let left = event.pageX;
	let top = event.pageY;

	mouse.style.left = `${left}px`;
	mouse.style.top = `${top}px`;
}


links.forEach(link => {
	link.addEventListener('mouseenter', mouseEnter);
	link.addEventListener('mouseleave', mouseLeave);
});


inputs.forEach(input => {
	input.addEventListener('mouseenter', mouseEnter);
	input.addEventListener('mouseleave', mouseLeave);
});


function mouseEnter(e) {
	if (window.innerWidth > 800) {
		mouse.classList.add('active');
	}
}

function mouseLeave(e) {
	mouse.classList.remove('active');
	if (!e.target == sideNav) {
		e.target.style.color = '#fff';
	}
	e.target.classList.remove('active');
}
