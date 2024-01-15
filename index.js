console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("The form has been submitted succesfully")
	// console.log('form submit');
}
let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

function mouseOver() {
	alert("You are doing an amazing job")
}
let image = document.querySelector('#security-image')
image.addEventListener('mouseover',mouseOver)