const text = document.querySelector('.js-text');
let delay = 3000;
let messages = ['hotel', 'kebab-shop', 'ecommerce platform', 'salmon hatchery', 'free diver'];

if (text) {
	messages.forEach(function (message, i) {
		setTimeout(function () {
			text.innerText = message;
		}, delay * i);
	})
}
