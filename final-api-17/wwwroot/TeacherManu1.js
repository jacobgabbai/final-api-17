//function g() { window.open("https://localhost:7253/updatetest.html") }

window.addEventListener("load", h1)
document.getElementById("h2").addEventListener("click", function () {looktest() })
document.getElementById("h3").addEventListener("click", function () { AddTest() })
document.getElementById("h4").addEventListener("click", function () { mmmmm() })
//document.getElementById("h5").addEventListener("click", function () { UpQ() })
document.getElementById("h6").addEventListener("click", function () { Statistic() })

function h1() {

    const name = localStorage.getItem("TeacherName")
    const h11 = `walcom ${name} choose an option`
    
    const ul=document.createElement("ul")
    const divm=document.getElementById("div2")
    const h12 = document.createElement("h1")
    h12.style.textAlign = "center"
    h12.style.textDecoration = "underline"
    h12.style.fontSize="40px"
    h12.textContent= h11
    ul.appendChild(h12)
    divm.appendChild(ul)

}


function mmmmm() {



    const open = localStorage.getItem("open")
    if (open == 1) { alert("window is open please close other windows") }
    else {
        window.open("https://localhost:7151/updatetest.html")
    }
}
function AddTest() {

    //window.open("https://localhost:7151/add-test-3.html")
    const open = localStorage.getItem("open")

    if (open == 1) { alert("window is open please close other windows") }
    else {
        window.open("https://localhost:7151/Add-Test.html")
    }

}

//function UpQ() {


//    window.open("https://localhost:7151/QuestionSearch11.html")
//}


function looktest() {
    const open = localStorage.getItem("open")

    if (open == 1) { alert("window is open please close other windows") }
    else {
        window.open("https://localhost:7151/Test-Search.html")
    }
    
}
function Statistic() {

    const open = localStorage.getItem("open")

    if (open == 1) { alert("window is open please close other windows") }
    else {

        window.open("https://localhost:7151/Stat1.html")
    }


}