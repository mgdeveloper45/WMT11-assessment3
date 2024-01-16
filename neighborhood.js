let eatery = [
    { hillSide: "https://www.hillsidefarmacy.com/" },
    { suerte: "https://www.suerteatx.com/" },
    { hopsAndGrain: "https://www.hopsandgrain.com/" },
    { quickiePickie: "https://quickiepickieaustin.com/" },
]

function chooseRestaurant() {
    let dine = Math.floor(Math.random() * eatery.length);
    let foodDiv = document.querySelector('.restaurant')
    let randomFood = document.createElement('a')

    randomFood.setAttribute('href',Object.values(eatery[dine]));

    if(dine === 0) randomFood.innerHTML = "Hillside Farmacy";
    else if(dine === 1) randomFood.innerHTML = "Suerte";
    else if(dine === 2) randomFood.innerHTML = "Hops & Grain Brewery";
    else if(dine === 3) randomFood.innerHTML = "Quickie Pickie";

    foodDiv.appendChild(randomFood)
}
let randomChoice = document.querySelector('button')
randomChoice.addEventListener('click', chooseRestaurant)