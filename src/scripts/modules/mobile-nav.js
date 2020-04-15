const mobile = document.querySelector('.js-mobile-nav');
const sideNav = document.querySelector('.js-sidenav');

mobile.addEventListener('click', toggle);

function toggle() {
	sideNav.classList.toggle('is-active');
}

