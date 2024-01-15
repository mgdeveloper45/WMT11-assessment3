let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')
let favThings = document.querySelector('.favorite-things')
let favs = document.createElement('p')

function favColor() {
    favs.textContent = "Green";
    favThings.appendChild(favs) 
}
function favPlace() {
    favs.textContent = "New Zealand";
    favThings.appendChild(favs) 
}
function favRitual() {
    favs.textContent = "Prayer"
    favThings.appendChild(favs) 
}
color.addEventListener('click', favColor)
place.addEventListener('click', favPlace)
ritual.addEventListener('click', favRitual)