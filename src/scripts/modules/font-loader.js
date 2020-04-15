/**
 * Async font loading via FontFaceObserver
 */

import Cookies from 'js-cookie';
import FontFaceObserver from 'fontfaceobserver';

const cookieName = 'fonts-loaded';
const cookieClass = 'fonts-loaded';

const typefaces = {
	ReitamRegular: [
		{ weight: 400, style: 'normal' },
	],
	Roboto: [
		{ weight: 400, style: 'normal' },
	],
	Libre: [
		{ weight: 400, style: 'normal' },
	],
};

export default function init() {
	if (Cookies.get(cookieName)) {
		return false;
	}

	loadFonts().then(function handleFontsLoaded() {
		document.documentElement.classList.add(cookieClass);
		Cookies.set(cookieName, '1', { expires: 7, secure: true });
	});
}

function loadFonts() {
	const fonts = [];

	Object.keys(typefaces).forEach(family => {
		typefaces[family].map(variant => {
			const loader = new FontFaceObserver(family, variant);
			fonts.push(loader.load(null, 5000));
		});
	});

	console.log(fonts);

	return Promise.all(fonts);
}
