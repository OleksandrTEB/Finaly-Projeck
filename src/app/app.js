const buttons = document.querySelectorAll(".select")

let arr_btn = Array.from(buttons)


const plans = document.querySelectorAll(".plan")


let arr_price = Array.from(plans)

let count_btn = arr_btn.length

function reset() {
    buttons.forEach((item) => {
        item.classList.remove("selected")
    })
    plans.forEach((item) => {
        item.classList.remove("red-border")
    })
}

for(let i = 0; i < count_btn; i++) {
    arr_btn[i].addEventListener("click", (e) => {
        reset()

        arr_btn[i].classList.add("selected")


        arr_price[i].classList.add("red-border")

        localStorage.setItem("index", i)
    })
}

document.addEventListener("DOMContentLoaded", () => {
    let i = localStorage.getItem("index")
    arr_btn[i].classList.add("selected")
    arr_price[i].classList.add("red-border")
})


//-----------------------slider--------------------------

const next_btn = document.querySelector(".next")
const prev_btn = document.querySelector(".prev")

const cards = document.querySelectorAll(".card")
const cardsShadow = document.querySelectorAll(".ocena-shadow")
const points = document.querySelectorAll(".point")
const divPoints = document.querySelector(".points")

let arr_cards = Array.from(cards)
let arr_cardsShadow = Array.from(cardsShadow)
let arr_points = Array.from(points)


function resetCards() {
    cards.forEach((item) => {
        item.classList.remove("red-rating-border")
    })
    cardsShadow.forEach((item) => {
        item.classList.remove("rating-shadow")
    })
    points.forEach((item) => {
        item.classList.remove("check-point")
    })
}
let current_card = -1;
let last_card = 3;

function next(){
    current_card++
    if (current_card === 4){
        current_card = 0
    }
    if (current_card === 3){
        last_card = 0;
        arr_cards[last_card].classList.add("hid-card")
    }
    if (current_card === 0){
        last_card = 3;
        arr_cards[last_card].classList.add("hid-card")
    }
    resetCards()
    arr_cards[current_card].classList.remove("hid-card")
    arr_cards[current_card].classList.add("red-rating-border")
    arr_points[current_card].classList.add("check-point")
    arr_cardsShadow[current_card].classList.add("rating-shadow")

}

function prev(){
    current_card--
    if (current_card === 0){
        last_card = 3;
        arr_cards[last_card].classList.add("hid-card")
    }
    if (current_card === -1){
        last_card = 3;
        current_card = 3
        arr_cards[last_card].classList.add("hid-card")
    }
    if (current_card === -2){
        current_card = 3
        last_card = 0;
        arr_cards[last_card].classList.add("hid-card")
    }
    if (current_card === 3){
        last_card = 0;
        arr_cards[last_card].classList.add("hid-card")
    }
    resetCards()
    arr_cards[current_card].classList.remove("hid-card")
    arr_cards[current_card].classList.add("red-rating-border")
    arr_points[current_card].classList.add("check-point")
    arr_cardsShadow[current_card].classList.add("rating-shadow")
}

function clickPoint(e) {
    let active = e.target
    current_card = arr_points.indexOf(active)

    if (current_card === 3){
        last_card = 0;
        arr_cards[last_card].classList.add("hid-card")
    }
    if (current_card === 0){
        last_card = 3;
        arr_cards[last_card].classList.add("hid-card")
    }
    resetCards()
    arr_cards[current_card].classList.remove("hid-card")
    arr_cards[current_card].classList.add("red-rating-border")
    arr_points[current_card].classList.add("check-point")
    arr_cardsShadow[current_card].classList.add("rating-shadow")
}

next_btn.addEventListener("click", next)
prev_btn.addEventListener("click", prev)
divPoints.addEventListener("click", clickPoint)

function init() {
    resetCards()
}
init();