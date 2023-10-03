window.addEventListener("load", function () { load() })
let t = true
let s = true
let r = true
let l = true
let checkme = 0

function load() {
    localStorage.clear()
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    div1.className = "dd"
    div1.id = "div1"
    div1.style.float = "left"
    div1.textContent = "student "
    div1.style.backgroundColor = "azure"
    div1.style.fontSize = "30px"
    div1.style.padding = "5px"
    div1.style.margin = "5px"
    div1.style.marginTop = "25px"
    div1.style.cursor = "pointer"
    div1.style.marginLeft = "70px"

    div1.addEventListener("click", function () { s ? stu() : clear1(); s = !s })
    div3.className = "dd"
    div3.id = "div3"
    div3.style.float = "left"
    div3.textContent = "/ "
    div3.style.backgroundColor = "azure"
    div3.style.fontSize = "50px"
    div3.style.padding = "5px"
    div3.style.margin = "5px"
    div3.style.marginTop = "8px"
    div2.className = "dd"
    div2.id = "div2"
    div2.textContent = " teacher"
    div2.style.float = "left"

    div2.style.backgroundColor = "azure"
    div2.style.fontSize = "30px"
    div2.style.padding = "5px"
    div2.style.margin = "5px"
    div2.style.marginTop = "25px"
    div2.style.cursor = "pointer"
    div2.addEventListener("click", function () { t ? tea() : clear1(); t = !t })


    const divm = document.getElementById("m1")
    divm.style.border = "dotted"
    divm.appendChild(div1)
    divm.appendChild(div3)
    divm.appendChild(div2)

}
const divm = document.getElementById("m2")

const divn = document.getElementById("m3")


function stu() {
    checkme = 1
    divm.replaceChildren()
    divm.style.border = "dotted"
    divm.style.height = "150px"
    const h1 = document.createElement("h3")
    h1.style.marginLeft = "150px"
    h1.style.fontSize = "30px"
    h1.style.marginTop = "10px"
    h1.textContent = "student"
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    div1.className = "dd"
    div1.id = "div4"
    div1.style.float = "left"
    div1.textContent = "login "
    div1.style.backgroundColor = "azure"
    div1.style.fontSize = "30px"
    div1.style.padding = "5px"
    div1.style.margin = "5px"
    div1.style.marginTop = "-0px"
    div1.style.marginLeft = "100px"
    div1.style.cursor = "pointer"
    div1.addEventListener("click", function () { l ? logs() : clear2(); l = !l })
    div3.className = "dd"
    div3.id = "div5"
    div3.style.float = "left"
    div3.textContent = "/ "
    div3.style.backgroundColor = "azure"
    div3.style.fontSize = "50px"
    div3.style.padding = "5px"
    div3.style.margin = "5px"
    div3.style.marginTop = "-15px"
    div2.className = "dd"
    div2.id = "div6"
    div2.textContent = " register"
    div2.style.float = "left"

    div2.style.backgroundColor = "azure"
    div2.style.fontSize = "30px"
    div2.style.padding = "5px"
    div2.style.margin = "5px"
    div2.style.marginTop = "-0px"
    div2.style.cursor = "pointer"
    div2.addEventListener("click", function () { r ? regis() : clear2(); r = !r })


    divm.appendChild(h1)
    divm.appendChild(div1)
    divm.appendChild(div3)
    divm.appendChild(div2)


    if (t == false) {
        t = true
    }


}
function clear1() {

    divm.replaceChildren()
    divm.style.border = ""
    divn.replaceChildren()
    divn.style.border = ""

}


function tea() {
    checkme = 2
    divm.replaceChildren()
    divm.style.border = "dotted"
    divm.style.height = "150px"
    const h1 = document.createElement("h3")
    h1.style.marginLeft = "150px"
    h1.style.fontSize = "30px"
    h1.style.marginTop = "10px"
    h1.textContent = "teacher"
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    div1.className = "dd"
    div1.id = "div4"
    div1.style.float = "left"
    div1.textContent = "login "
    div1.style.backgroundColor = "azure"
    div1.style.fontSize = "30px"
    div1.style.padding = "5px"
    div1.style.margin = "5px"
    div1.style.marginTop = "-0px"
    div1.style.marginLeft = "100px"
    div1.style.cursor = "pointer"
    div1.addEventListener("click", function () { l ? logs() : clear2(); l = !l })
    div3.className = "dd"
    div3.id = "div5"
    div3.style.float = "left"
    div3.textContent = "/ "
    div3.style.backgroundColor = "azure"
    div3.style.fontSize = "50px"
    div3.style.padding = "5px"
    div3.style.margin = "5px"
    div3.style.marginTop = "-15px"
    div2.className = "dd"
    div2.id = "div6"
    div2.textContent = " register"
    div2.style.float = "left"

    div2.style.backgroundColor = "azure"
    div2.style.fontSize = "30px"
    div2.style.padding = "5px"
    div2.style.margin = "5px"
    div2.style.marginTop = "-0px"
    div2.style.cursor = "pointer"
    div2.addEventListener("click", function () { r ? regis() : clear2(); r = !r })



    divm.appendChild(h1)
    divm.appendChild(div1)
    divm.appendChild(div3)
    divm.appendChild(div2)


    if (s == false) { s = true }


}



function logs() {


    divn.replaceChildren()
    divn.style.border = "dotted"
    divn.style.height = "200px"
    const h1 = document.createElement("h2")
    h1.style.textAlign = "center"
    h1.textContent = "login"
    const br = document.createElement("br")
    const form1 = document.createElement("form")
   
    const ul = document.createElement("ul")
    const input1 = document.createElement("input")
    input1.type = "text"
    input1.value = ""
    input1.id = "inp1"
    input1.style.margin = "auto"
    input1.style.marginLeft = "20%"
    input1.placeholder = "enter your name"
    const input2 = document.createElement("input")
    input2.type = "email"
    input2.value = ""
    input2.id = "inp2"
    input2.style.margin = "auto"
    input2.style.marginLeft = "20%"
    input2.placeholder = "enter your mail"
    const btn = document.createElement("button")
    btn.addEventListener("click", function () { StuLog(checkme) })

    btn.id = "btn1"
    btn.style.backgroundColor="azure"
    btn.innerHTML = "submit"
    btn.style.margin = "auto"
    btn.style.marginLeft = "70%"

    const p = document.createElement("p")
    p.textContent = ""
    ul.appendChild(input1)
    ul.appendChild(br.cloneNode())
    ul.appendChild(br.cloneNode())
  
    ul.appendChild(input2)
  
    ul.appendChild(br.cloneNode())
    ul.appendChild(br.cloneNode())
    divn.appendChild(h1)
    divn.appendChild(ul)
    divn.appendChild(btn)
    let yy = 0


    if (r == false) {
        r = true
    }

   


}





function regis() {
    divn.replaceChildren()
    divn.style.border = "dotted"
    divn.style.position = "relative"
    divn.style.height = "300px"
    const h1 = document.createElement("h2")
    h1.textContent = "register"
    h1.style.textAlign = "center"

    const br = document.createElement("br")
 
    const input1 = document.createElement("input")
    input1.type = "text"
    input1.value = ""
    input1.id = "inp11"
    input1.placeholder = "enter your name"
    input1.style.margin = "auto"
    input1.style.marginLeft = "30%"
    const input2 = document.createElement("input")
    input2.type = "email"
    input2.value = ""
    input2.id = "inp22"
    input2.placeholder = "enter your mail"
    input2.style.margin = "auto"
    input2.style.marginLeft = "30%"
    const input3 = document.createElement("input")
    input3.type = "tel"
    input3.value = ""
    input3.id = "inp33"
    input3.pattern = "[0-9]{7}"
    input3.placeholder = "enter your phone"
    input3.style.width = "116px"

    const leb = document.createElement("label")
    leb.setAttribute("for", "inp331")
    const select = document.createElement("select")
    select.id = "select1"
    select.style.margin = "auto"
    select.style.marginLeft = "30%"
    const option2 = document.createElement("option")
    option2.value = "050"
    option2.innerHTML = "050"
    const option3 = document.createElement("option")
    option3.value = "052"
    option3.innerHTML = "052"
    const option4 = document.createElement("option")
    option4.value = "053"
    option4.innerHTML = "053"
    const option5 = document.createElement("option")
    option5.value = "054"
    option5.innerHTML = "054"
    const option6 = document.createElement("option")
    option6.value = "055"
    option6.innerHTML = "055"
    select.appendChild(option2)
    select.appendChild(option3)
    select.appendChild(option4)
    select.appendChild(option5)
    select.appendChild(option6)


    const input4 = document.createElement("input")
    input4.type = "text"
    input4.value = ""
    input4.id = "inp44"
    input4.placeholder = "enter your Id"
    input4.style.margin = "auto"
    input4.style.marginLeft = "30%"
    const input5 = document.createElement("input")
    input5.type = "text"
    input5.value = ""
    input5.id = "inp55"
    input5.style.margin = "auto"
    input5.style.marginLeft = "30%"
    input5.placeholder = "enter your Code"
    const btn = document.createElement("button")
    btn.addEventListener("click", function () { valid() })
    btn.type = "submit"
    btn.innerHTML = "Submit"
    btn.style.margin = "auto"
    btn.style.marginLeft = "70%"
    const p = document.createElement("spacer")
    p.textContent = " "


    divn.appendChild(h1)
    divn.appendChild(input1)
    divn.appendChild(br.cloneNode())
    divn.appendChild(br.cloneNode())
    divn.appendChild(input4)
    divn.appendChild(br.cloneNode())
    divn.appendChild(br.cloneNode())
    divn.appendChild(input2)
    divn.appendChild(br.cloneNode())
    divn.appendChild(br.cloneNode())
    divn.appendChild(select)
    divn.appendChild(p)
    divn.appendChild(input3)
    divn.appendChild(br.cloneNode())
    divn.appendChild(br.cloneNode())
    divn.appendChild(input5)
    divn.appendChild(br.cloneNode())
    divn.appendChild(br.cloneNode())
    divn.appendChild(btn)

    if (l == false) {
        l = true
    }

}

function clear2() {

    divn.replaceChildren()
    divn.style.border = ""


}




async function valid() {

    const name = document.getElementById("inp11").value
    if (name.length <= 20 && name.length > 0) {

        const id = document.getElementById("inp44").value
        const check = /^\d+$/
        const b = check.test(id)
        if (b && id.length == 10) {

            const email = document.getElementById("inp22").value
            regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
            const checke = regex.test(email)
            if (checke) {

                const phone1 = document.getElementById("inp33").value
                const check1 = /^\d+$/
                const tr = check1.test(phone1)
                if (tr && phone1.length == 7) {
                    const sel = document.getElementById("select1").value
                    const fullphone = `${sel}${phone1}`


                    const code = document.getElementById("inp55").value

                    if (checkme == 2) {
                        if (code == "123456") {


                            const js = { teacherName: `${name}`, email: `${email}`, teacherId: `${id}`, phoneN: `${fullphone}` }
                            const y = "api/TeacherControler"
                            const rep = await fetch(y, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(js) })
                            const repjson = await rep.json()
                            if (rep.status == 200) {
                                if (repjson.teacherName != "nono") { alert(" info load succesfuly you can sign in") }

                                else { alert("your data is already showen in the system please sign in") }
                            }

                        }
                        else { alert("please enter the correcrt code") }


                    }



                    if (checkme == 1)
                    {

                        if (code == "654321")
                        {

                            const js = { stuName: `${name}`, stuId: `${id}`, email: `${email}`, tel: `${fullphone}` }
                            const y = "api/StudentControler"
                            const rep = await fetch(y, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(js) })
                            const repjson = await rep.json()
                            if (rep.status == 200) {
                                if (repjson.stuName != "nono") { alert(" info load succesfuly you can sign in") }

                                else { alert("your data is already showen in the system please sign in") }
                            }







                        }

                        else {
                            alert("please enter the correcrt code")
                            return

                        }


                    }
                }

                else {
                    alert("please enter phone correctly")
                    return

                }


            }


            else {

                alert("please enter email correctly ")
                return
            }


        }
        else {
            alert("please enter id corctly")

            return

        }


    }

    else {

        alert("please enter a name shorter then 20 chars")
        return
    }

}


async function StuLog(checkme) {
    let ccc = localStorage.getItem("opent")
    let sss = localStorage.getItem("opens")
    localStorage.clear()
    if (ccc != null) {
        localStorage.setItem("opent", ccc)
    }
    if (sss != null) {
        localStorage.setItem("opens", sss)
    }
    if (checkme == 1) {
        const in1 = document.getElementById("inp1").value
        const in2 = document.getElementById("inp2").value
        const sp = in2.split("@")


        const rep = await fetch(`api/StudentControler/${sp[0]}%40${sp[1]}`)
        const v = await rep.json()
        if (rep.status == 200 && v.stuName == in1) {

            localStorage.setItem("stuName", v.stuName)
            localStorage.setItem("stuId", v.stuId)
         let sss1  =localStorage.getItem("opens")
            if (sss1 == null) {
                window.open("https://localhost:7151/Stm1.html")
            }
            else {  alert("window is open please close befor you open another one") 
 }
  }
        else if (rep.status == 200 && v.stuName != in1) {
            alert("detels dont match")


        }

        else if (rep.status != 200) { alert(`error ${rep.status}`) }
    }
    if (checkme == 2) {
        let b = 0
        const a = await fetch("api/TeacherControler")

        const a1 = await a.json()
        if (a.status == 200) {
            var z = document.getElementById("inp1").value

            var z1 = document.getElementById("inp2").value

            let d = 0
            for (let i = 0; i < a1.length; i++) {


                var l = a1[i]
                if (z == l.teacherName && z1 == l.email) {
                    bq = l.id
                    d = 1
                    localStorage.setItem("TeacherIdRef", `${bq}`)
                    localStorage.setItem("TeacherName", `${l.teacherName}`)
                   let ccc1= localStorage.getItem("opent")
                    if (ccc == null) {
                        window.open("https://localhost:7151/TeacherManuF.html")
                    }
                    else {alert("window is open please close befor you open another one") }
                    break





                }

            }
            if (d == 0) {

                alert("please enter the correct info ")
            }
        }

        else { alert = `errore ${a1.status}` }
    }

}