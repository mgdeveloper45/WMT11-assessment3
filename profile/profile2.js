let place = document.querySelector('#place')
let color = document.querySelector('#color')
let ritual = document.querySelector('#ritual')
let favThings = document.querySelector('.favorite-things')
let favs = document.createElement('p')

function favColor() {
    alert("Green") 
}
function favPlace() {
    alert("New Zealand") 
    // favs.textContent = "New Zealand";
    // favThings.appendChild(favs) 
}
function favRitual() {
    alert("Prayer") 
    // favs.textContent = "Prayer"
    // favThings.appendChild(favs) 
}
color.addEventListener('click', favColor)
place.addEventListener('click', favPlace)
ritual.addEventListener('click', favRitual)