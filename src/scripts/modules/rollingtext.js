const text = document.querySelector('.js-text');
let delay = 3000;
let messages = ['hotel', 'kebab-shop', 'ecommerce platform', 'salmon hatchery', 'free diver'];

messages.forEach(function (message, i) {
	setTimeout(function () {
		text.innerText = message;
	}, delay * i);
})

// let messages = ["Here", "are", "some", "messages."];
// let header = document.getElementById("message");

// messages.forEach(function(message, i) {
//   setTimeout(function() {
//     header.innerText = message;
//   }, delay * i);
// });
