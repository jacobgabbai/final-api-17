﻿localStorage.setItem("opens", 1)

window.addEventListener("beforeunload", () => {
    localStorage.removeItem("opens")
})


const div1 = document.getElementById("a1")
const div2 = document.getElementById("a2")
const div3 = document.getElementById("a3")
const h1 = document.getElementById("hh1")
const n1 = localStorage.getItem("stuName")
h1.textContent = `welcome ${n1}`

const p1 = document.createElement("p")
p1.textContent = "search for a test"
p1.style.fontSize = "30px"
p1.style.position = "relative"
p1.style.textAlign = "center"
p1.style.top = "0%"
p1.style.cursor = "pointer"
p1.addEventListener("click", function () { testsearch() })
div1.appendChild(p1)

const p2 = document.createElement("p")
p2.textContent = "take a test"
p2.style.fontSize = "30px"
p2.style.position = "relative"
p2.style.textAlign = "center"
p2.style.top = "0%"
p2.addEventListener("click", function () { taketest2() })
p2.style.cursor = "pointer"

div2.appendChild(p2)
const p3 = document.createElement("p")
p3.textContent = "test history"
p3.style.fontSize = "30px"
p3.style.position = "relative"
p3.style.textAlign = "center"
p3.style.top = "0%"
p3.style.cursor = "pointer"
p3.addEventListener("click", function () { TestHistory1() })

div3.appendChild(p3)





function TestHistory1() {

    window.open("https://localhost:7151/Student-history.html")
}


function taketest2() {
    const itson = localStorage.getItem("itson")

    if (itson == null) {
        window.open("https://localhost:7151/TakeTest4.html")
    }
    else { alert("take test window is already open") }
   
   
}

function testsearch() {



    window.open("https://localhost:7151/testsearch.html")
}

