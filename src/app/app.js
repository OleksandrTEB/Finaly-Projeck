const bt1 = document.querySelector(".bt1")
const bt2 = document.querySelector(".bt2")
const bt3 = document.querySelector(".bt3")

let arr_btn = [bt1, bt2, bt3]

const p1 = document.querySelector(".p1")
const p2 = document.querySelector(".p2")
const p3 = document.querySelector(".p3")

let arr_price = [p1, p2, p3]

let count_btn = arr_btn.length

for(let i = 0; i < count_btn; i++) {
    arr_btn[i].addEventListener("click", () => {


        bt1.classList.remove("selected")
        bt2.classList.remove("selected")
        bt3.classList.remove("selected")
        arr_btn[i].classList.add("selected")

        p1.classList.remove("red-border")
        p2.classList.remove("red-border")
        p3.classList.remove("red-border")
        arr_price[i].classList.add("red-border")

        localStorage.setItem("index", i)
    })
}

document.addEventListener("DOMContentLoaded", () => {
    let i = localStorage.getItem("index")
    arr_btn[i].classList.add("selected")
    arr_price[i].classList.add("red-border")
})