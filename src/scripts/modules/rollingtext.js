const text = document.querySelector('.js-text');
let delay = 3000;
let messages = ['hotel', 'kebab shop', 'ecommerce platform', 'salmon hatchery', 'free diver', 'scrabble champion', 'cafe'];

if (text) {
	let count = 0;
	setInterval(e => {
		let randomNumber = Math.floor(Math.random() * 11);
		count = (count + randomNumber) % messages.length;
		let newMessage = messages[count];
		text.innerHTML = newMessage;
	}, 2000);
}
