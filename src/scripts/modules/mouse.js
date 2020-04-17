const mouse = document.querySelector('.js-mouse');
const links = Array.from(document.getElementsByTagName('a'));
const sideNav = document.querySelector('.js-sidenav')

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


function mouseEnter(e) {
	if (window.innerWidth > 800) {
		mouse.classList.add('active');
	}
	e.target.classList.add('active');
}

function mouseLeave(e) {
	mouse.classList.remove('active');
	e.target.style.color = '#fff';
	e.target.classList.remove('active');
}
