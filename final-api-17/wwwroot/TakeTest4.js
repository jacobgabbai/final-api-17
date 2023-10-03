const rr = ""
let di = ""
let qj = []
let aj11 = []
let aa1 = 0
let countsubmit = []

ht = document.createElement("h3")
ht.style.fontSize = "30px"
ht.style.margin = "70px"
let hour = 0
let mid = 0
let min = 0
let secunde = 0
let timeout = 0
let checktimer = 0


let bb1 = 0
window.addEventListener("beforeunload", function () { finishtest() })
let kk1 = 0
localStorage.setItem("counter", kk1)
localStorage.setItem("itson", 1)
let aj = []
const div1 = document.getElementById("divs")
const divm = document.getElementById("divs1")
const divs2 = document.getElementById("divs2")
const divb = document.getElementById("divb")
const div5 = document.getElementById("divs5")

function up(b) {
    aa1 = aa1 + 1
    divm.replaceChildren()
    const cc = localStorage.getItem("answercount")
    const cc1 = b.length - aa1
    const p2 = document.createElement("p")
    p2.style.fontWeight = "bold"
    const p3 = document.createElement("p")
    p3.style.fontWeight = "bold"
    p3.textContent = `${aa1} questions has been answerd you have ${cc1} questions left`

    p2.textContent = `you have a total of ${b.length} questions`
    divm.appendChild(p2)
    divm.appendChild(p3)



}
const div11 = 0

async function find() {
    aj = []
    qj = []
    const ajson = []

    // const teacher = localStorage.getItem("TeacherIdRef")
    let teacher = 0
    const testname = document.getElementById("in1").value



    const y1 = `api/Test/${testname},${teacher}`

    const y2 = ` https://localhost:7257/${y1}`

    if (testname != "") {
        const res = await fetch(y1)


        const rr = await res.json()

        const r1 = rr.id
        di = rr.testName
        const ti=rr.totalTime.split(":")
        mid = ti[0]
        min=ti[1]
        //if (hour > 1) {
        //    mid = Math.floor(hour)
        //    min = (hour - mid) * 60
        //}
        //if (hour < 1) {
        //    mid = 0;
        //    min = 60 * hour
        //    min = Math.floor(min)
        //    if (min < 1) {
        //        min = 0
        //    }
        //}
        secunde = 0

        ht.innerHTML = ""
        if (rr.testName == "empty") {
            alert("no test where found")
            return
        }


        if (res.status != 200 && res.status != 204) { "problem with finding test" }

        if (res.status == 200) {
            const stuname = localStorage.getItem("stuName")
            const stuId = localStorage.getItem("stuId")
            localStorage.clear()
            localStorage.setItem("stuName", stuname)
            localStorage.setItem("stuId", stuId)
            const stn = localStorage.getItem("stuName")
            //  api/TestExControler?sname=${stn}&tname=${rr.testName}
            const yy1 = `api/TestExControler?sname=${stn}&tname=${rr.testName}`
            const rescheck = await fetch(yy1)
            const resjson1 = await rescheck.json()
            if (rescheck.status != 200) {
                alert(` Error ${rescheck.status}`)
                return
            }
            if (resjson1 == 0) {
                const resq = await fetch(`api/Question/${r1}`)
                if (resq.status != 200) { alert(`error${res.status}`) }
                if (resq.status == 200) {
                    const qid = []
                    let qjr1 = []
                    const qjson = await resq.json()
                    for (let i = 0; i < qjson.length; i++) {
                        qid.push(qjson[i].id)
                        qjr1.push(qjson[i])


                    }
                    if (rr.random == 1) {
                        for (let z = 0; z < (qjson.length - 1); z++) {
                            var qjr = qjr1[Math.floor(Math.random() * (qjr1.length - z))];

                            qj.push(qjr)

                            qjr1 = qjr1.filter((qjr1) => qjr1 != qjr)
                            let fgg = qjr1
                            let hghgh = 1
                        }
                        qj.push(qjr1[0])
                    }
                    else {
                        for (let i = 0; i < qjson.length; i++) {
                            qid.push(qjson[i].id)
                            qj.push(qjson[i])



                        }
                    }

                    for (let ii = 0; ii < qid.length; ii++) {
                        let g = qj
                        const resa = await fetch(`api/Answer/${qj[ii].id}`)
                        const yy = await resa.json()
                        const aj1 = []
                        for (let z = 0; z < yy.length; z++) {
                            ajson.push(yy[z])
                            aj1.push(yy[z])
                        }
                        aj.push(aj1)
                        aj11.push(aj1)
                    }
                }



                taketest(rr, qj, aj)
            }
            else {
                const h = document.createElement("h1")

                divm.replaceChildren()
                divs2.replaceChildren()
                /* divb.replaceChildren()*/
                div5.replaceChildren()
                div1.replaceChildren()
                h.textContent = "test already been done"
                div1.appendChild(h)
                return

            }
        }

    }

}


let fin = 0
function timer() {


    if (fin == 0) {

        let zero = ""
        let zeromin = ""
        if (secunde < 10 && checktimer == 1) {
            zero = 0
        }

        if (min < 10 && min > 1 && checktimer == 1) {
            zeromin = 0
        }


        ht.innerHTML = `Time Left ${mid}:${zeromin}${min}:${zero}${secunde}`


        if (checktimer == 0) {
            secunde = 60
        }

        secunde--
        checktimer = 1
        if (secunde == 0) {
            if (min != 0) {
                secunde = 59; min = min - 1
            }
        }
        if (min == 0) {


            if (mid != 0) { min = 59; mid = mid - 1; }

        }

        if (mid == 0 && secunde == 0 && min == 0) {
            ht.innerHTML = `Time Left ${mid}:${zeromin}${min}:${zero}${secunde}`
            timeout = 1
            fin = 1
            alert("You Have Run Out Of Time")
            subTest(aj11, qj)
            return
        }
    }
}







function taketest(a, b, c) {

    const stuname = localStorage.getItem("stuName")
    const stuId = localStorage.getItem("stuId")
    localStorage.clear()
    kk1 = 0
    localStorage.setItem("counter", kk1)
    localStorage.setItem("itson", 1)
    localStorage.setItem("stuName", stuname)
    localStorage.setItem("stuId", stuId)


    /* const divb = document.getElementById("divb")*/

    divb.style.border = ""
    divb.style.border = "dotted"
    for (let z = 0; z < b.length; z++) {
        let answercount = 0
        localStorage.setItem(`answercount${z}`, answercount)




    }


    let kk = localStorage.getItem("counter")
    const date = a.testDate.split("-")
    const t = a.startTime.split(":")
    let tt = date[1] - 1
    let tt2 = parseInt(t[0])
    let tt3 = parseInt(t[1])
    let tt1 = parseInt(t[1]) + 50
    if (tt1 > 59) {
        tt2 = tt2 + 1
        tt3 = tt1 - 60
    }
    else { tt3 = tt1 }
    let ts = `${tt3}`
    let ts1 = `${tt2}`
    const mydate = new Date(date[0], tt, date[2], t[0], t[1])
    const mydate1 = new Date(date[0], tt, date[2], ts1, ts)
    //const hour = mydate.getHours()
    //const minuts = mydate.getMinutes()

    const d = new Date()
    if (mydate <= d && d <= mydate1) {

        alert("you can start the test")

        var countDownDate = new Date(mydate).getTime();


        setInterval(timer, 1000)


        const divs = document.getElementById("divs")
        divs.replaceChildren()
        const h1 = document.createElement("h1")
        h1.textContent = `start test ${a.testName}`
        h1.style.marginLeft = "35%"
        const h2 = document.createElement("h2")
        h2.textContent = `you have hours`
        h2.style.marginLeft = "35%"
        divs.appendChild(h1)
        divs.appendChild(ht)


        /*const divs2 = document.getElementById("divs2")*/
        divs2.replaceChildren()
        const br = document.createElement("br")
        /* divs2.id = "divs2"*/
        const p = document.createElement("p")

        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const p3 = document.createElement("p")
        p3.style.fontWeight = "bold"
        const cc = localStorage.getItem("answercount")
        const cc1 = b.length - parseInt(cc)
        if (cc != null) {
            p3.textContent = `${cc} questions has been answerd you have ${cc1} questions left`
        }
        if (cc == null) {
            p3.textContent = `${aa1} questions has been answerd you have ${c.length} questions left`
        }
        p2.textContent = `you have a total of ${b.length} questions`
        p2.style.fontWeight = "bold"
        p1.textContent = "question 1"
        p1.style.fontSize = "25px"
        p1.style.marginLeft = "70px"
        p1.style.fontWeight = "bold"
        divm.replaceChildren()
        divm.appendChild(p2)
        divm.appendChild(br)
        divm.appendChild(p3)
        divs.appendChild(br)
        divs2.appendChild(p1)
        divs.appendChild(br)
        let ps = b[0].questions


        let ps1 = ps.split("/?/")
        // p.textContent = ps
        p.textContent = b[0].questions
        const out = document.createElement("output")
        const divo = document.createElement("div")
        divo.style.display = "flex"
        divo.style.height = "100px"

        let gg = b[0].picture
        if (gg != "") {
            divs2.style.height = "220px"
            divo.innerHTML = `<img src="${gg}"/>`

            out.appendChild(divo)
            divs2.appendChild(out)
        }




        divs2.appendChild(p)
        // divs.appendChild(divs2)
        /*const div5 = document.getElementById("divs5")*/
        div5.replaceChildren()
        //const form1 = document.createElement("form")
        //form1.setAttribute("method", "post");
        //form1.setAttribute("action", "submit")

        for (let k = 0; k < c[0].length; k++) {
            const int6 = document.createElement("input")
            int6.type = "radio"
            int6.name = "l"
            int6.id = `idr${k}`
            int6.value = `${c[0][k].answer1}+${c[0][k].rightWorng}`

            const leb = document.createElement("label")



            leb.innerHTML = `${c[0][k].answer1}`


            const divs1 = document.createElement("div")
            divs1.id = `divs${k}`
            const divme = document.getElementById(`divs${k}`)
            const inme = document.getElementById(`idr${k}`)
            divs1.appendChild(int6)
            divs1.appendChild(leb)
            divs2.appendChild(divs1)
            //  divs2.appendChild(div5)
        }
        //const int7 = document.createElement("input")
        //int7.type = "radio"
        //int7.name="l"
        //const leb1 = document.createElement("label")

        //leb1.innerHTML = `${c[0][1].answer1}`

        /* int6.value = `${b[0].questions}`*/

        //divs1.appendChild(leb)
        //divs1.appendChild(int6)



        //divs1.appendChild(br)
        //divs1.appendChild(br)
        //divs2.appendChild(leb1)
        //divs2.appendChild(int7)

        //divs.appendChild(divs1)
        //divs.appendChild(divs2)
        // divs.appendChild(divs1)
        divs2.appendChild(br)
        divs2.appendChild(br)

        const btn1 = document.createElement("button")
        btn1.id = "btn11"
        btn1.innerHTML = "back"
        btn1.style.backgroundColor = "azure"
        //btn1.style.marginLeft = "2px
        btn1.style.margin = "10px"

        const btn2 = document.createElement("button")
        btn2.id = "btn22"
        btn2.innerHTML = "next"
        btn2.style.backgroundColor = "azure"
        //btn2.style.marginLeft="180px"
        btn2.style.margin = "10px"
        btn2.addEventListener("click", function () { next1(kk, c, b) })
        btn1.addEventListener("click", function () { back1(c, b) })
        const btns = document.createElement("button")
        btns.id = "btnsi"
        btns.style.margin = "10px"

        btns.innerHTML = "Submit Question"
        btns.style.backgroundColor = "azure"
        const ul1 = document.createElement("ul")
        ul1.id = "ul1"
        const ul2 = document.createElement("ul")
        ul2.id = "ul2"
        const btnt = document.createElement("button")
        btnt.innerHTML = "submit test"
        btnt.id = "btnt"
        btnt.style.backgroundColor = "azure"
        btnt.style.marginLeft = "200px"
        //ul2.appendChild(btnt)
        //ul1.appendChild(btns)
        //div5.appendChild(br)
        //div5.appendChild(br)
        //div5.appendChild(ul1)

        div5.appendChild(btn1)
        div5.appendChild(btns)

        div5.appendChild(btn2)
        div5.appendChild(br)
        div5.appendChild(br)
        div5.appendChild(btnt)
        //div5.appendChild(br)
        //div5.appendChild(br)
        /* div5.appendChild(ul2)*/

        const yt = document.getElementById("btnsi").addEventListener("click", function () { submit(c, b) })
        const ytt = document.getElementById("btnt").addEventListener("click", function () { subTest(c, b) })






    }


    else {

        alert(`${a.testName} test is not now it is on the ${a.testDate} start at ${a.startTime}`)
        divb.style.border = ""
        divs.replaceChildren()
        divs2.replaceChildren()
        divm.replaceChildren()
        const div5 = document.getElementById("divs5")
        div5.replaceChildren()
        const stuname = localStorage.getItem("stuName")
        const stuId = localStorage.getItem("stuId")
        localStorage.clear()
        localStorage.setItem("stuName", stuname)
        localStorage.setItem("stuId", stuId)
        localStorage.setItem("itson", 1)


    }
}




function next1(kkk, c, b) {
    const div1 = document.getElementById("divs")
    const div2 = document.getElementById("divs2")

    let h = ''
    let kk = parseInt(localStorage.getItem("counter"))
    let op = b.length
    if (b.length > kk + 1) {
        //for (let o = 0; o < c[kk].length; o++) {
        //    const radioButtons = document.querySelectorAll('input[name="l"]')
        //    h = document.getElementById(`idr${o}`).value
        //    if (radioButtons[o].checked) {
        //        for (let oo = kk; oo < c[kk].length; oo++) {
        //            localStorage.removeItem(`chooseanswer${kk + 1}${oo + 1}`)
        //        }
        //        localStorage.setItem(`chooseanswer${kk + 1}${o + 1}`, h)
        //    }

        //    const g = h.split("+")
        //    if (g[1] == 1) {
        //        localStorage.removeItem(`rightanswer${kk + 1}${o + 1}`)
        //        localStorage.setItem(`rightanswer${kk + 1}${o + 1}`, h)

        //    }
        //}

        //const div5 = document.getElementById("divs5")
        //div5.replaceChildren()
        //if (kk + 1 < qj.length) {
        //    for (let k = 0; k < c[kk + 1].length; k++) {
        //        const int6 = document.createElement("input")
        //        int6.type = "radio"
        //        int6.name = "l"
        //        int6.id = `idr${k}`
        //        int6.value = `${c[kk + 1][k].answer1}+${c[kk + 1][k].rightWorng}`

        //        const leb = document.createElement("label")



        //        leb.innerHTML = `${c[kk + 1][k].answer1}`


        //        const divs1 = document.createElement("div")
        //        divs1.id = `divs${k}`
        //        const divme = document.getElementById(`divs${k}`)
        //        const inme = document.getElementById(`idr${k}`)
        //        divs1.appendChild(int6)
        //        divs1.appendChild(leb)
        //        div2.appendChild(divs1)
        //        //  divs.appendChild(div5)
        //    }


        //}
        let ci = ''
        const ra = localStorage.getItem(`answercount${kk + 1}`)
        if (ra == "1") {

            for (let i = 0; i < b.length; i++) {

                for (let ii = 0; ii < c[kk].length; ii++) {

                    const rq = localStorage.getItem(`chooseanswer${i}${ii}`)

                    if (rq != null) {
                        ci = ii

                        document.getElementById(`idr${ii}`).checked = true
                    }
                }


            }


        }
        div2.replaceChildren()
        /*divm.replaceChildren()*/

        const p2 = document.createElement("p")
        const p3 = document.createElement("p")
        //const cc = localStorage.getItem("answercount")
        //const cc1 = b.length - parseInt(cc)
        //p3.textContent = `${cc} questions has been answerd you have ${cc1} questions left`
        //p2.textContent = `you have a total of ${b.length} questions`
        //const br = document.createElement("br")
        let countersub = 0
        let cn = ''
        for (let zz = 0; zz < b.length; zz++) {

            cn = localStorage.getItem(`answercount${zz}`)
            if (cn == "1") { countersub = countersub + 1 }
        }
        //const cc = localStorage.getItem("answercount")
        const cc1 = b.length - countersub
        //p3.textContent = `${countersub} questions has been answerd you have ${cc1} questions left`
        p3.textContent = `${bb1} questions has been answerd you have ${cc1} questions left`

        p2.textContent = `you have a total of ${b.length} questions`


        //divm.appendChild(p2)
        ////  div2.appendChild(br)
        //divm.appendChild(p3)
        const p1 = document.createElement("p")
        p1.textContent = `question ${kk + 2}`
        p1.style.fontWeight = "bold"
        p1.style.fontSize = "25px"
        p1.style.marginLeft = "70px"

        div2.appendChild(p1)

        /*div2.appendChild(br)*/
        const p = document.createElement("p")
        const out = document.createElement("output")
        const divo = document.createElement("div")
        divo.style.display = "flex"
        divo.style.height = "80px"

        let gg = b[kk + 1].picture
        if (gg != "") {

            div2.style.height = "200px"
            divo.innerHTML = `<img src="${gg}"/>`

            out.appendChild(divo)
            div2.appendChild(out)
        }
        p.textContent = b[kk + 1].questions
        div2.appendChild(p)
        let count = parseInt(localStorage.getItem("counter"))
        count = count + 1
        localStorage.setItem("counter", count)

        if (kk + 1 < qj.length) {
            for (let k = 0; k < c[kk + 1].length; k++) {
                const int6 = document.createElement("input")
                int6.type = "radio"
                int6.name = "l"
                int6.id = `idr${k}`
                int6.value = `${c[kk + 1][k].answer1}+${c[kk + 1][k].rightWorng}`

                const leb = document.createElement("label")



                leb.innerHTML = `${c[kk + 1][k].answer1}`
                const ra = localStorage.getItem(`answercount${kk + 1}`)

                if (k == ci && ra == 1) {
                    int6.checked = true
                }

                const divs1 = document.createElement("div")
                divs1.id = `divs${k}`
                const divme = document.getElementById(`divs${k}`)
                const inme = document.getElementById(`idr${k}`)
                divs1.appendChild(int6)
                divs1.appendChild(leb)
                div2.appendChild(divs1)
                //  divs.appendChild(div5)
            }


        }
    }

}


function back1(c, b) {
    let h = ''
    let kk = parseInt(localStorage.getItem("counter"))
    if (0 < kk) {
        kk = kk - 1
        //for (let o = 0; o < c[kk].length; o++) {
        //    const radioButtons = document.querySelectorAll('input[name="l"]')
        //    h = document.getElementById(`idr${o}`).value
        //    if (radioButtons[o].checked) {
        //        for (let oo = kk; oo < c[kk].length; oo++) {
        //            localStorage.removeItem(`chooseanswer${kk + 1}${oo + 1}`)
        //        }
        //        localStorage.setItem(`chooseanswer${kk + 1}${o + 1}`, h)
        //    }

        //    const g = h.split("+")
        //    if (g[1] == 1) {
        //        localStorage.removeItem(`rightanswer${kk + 1}${o + 1}`)
        //        localStorage.setItem(`rightanswer${kk + 1}${o + 1}`, h)

        //    }
        //}

        //const div2 = document.getElementById("divs2")
        //div2.replaceChildren()

        //for (let k = 0; k < c[kk].length; k++) {
        //    const int6 = document.createElement("input")
        //    int6.type = "radio"
        //    int6.name = "l"
        //    int6.id = `idr${k}`
        //    int6.value = `${c[kk][k].answer1}+${c[kk][k].rightWorng}`

        //    const leb = document.createElement("label")



        //    leb.innerHTML = `${c[kk][k].answer1}`


        //    const divs1 = document.createElement("div")
        //    divs1.id = `divs${k}`
        //    const divme = document.getElementById(`divs${k}`)
        //    const inme = document.getElementById(`idr${k}`)
        //    divs1.appendChild(int6)
        //    divs1.appendChild(leb)
        //    div2.appendChild(divs1)
        //    //  divs.appendChild(div5)
        //}
        const ra = localStorage.getItem(`answercount${kk}`)
        let rq = ''
        let ci = ""
        if (ra == "1") {



            for (let ii = 0; ii < c[kk].length; ii++) {

                rq = localStorage.getItem(`chooseanswer${kk}${ii}`)

                if (rq != null) {
                    ci = ii
                    document.getElementById(`idr${ii}`).checked = true
                    break
                }
            }





        }


        const div1 = document.getElementById("divs")
        const div2 = document.getElementById("divs2")
        /* divm.replaceChildren()*/
        div2.replaceChildren()
        const p2 = document.createElement("p")
        const p3 = document.createElement("p")
        let countersub = 0
        let countersub1 = 0
        let cn = ''
        for (let zz = 0; zz < b.length; zz++) {

            cn = localStorage.getItem(`answercount${zz}`)
            if (cn == "1") {
                countersub1 = countersub1 + 1


            }
        }
        //const cc = localStorage.getItem("answercount")
        const cc1 = b.length - countersub1
        //  p3.textContent = `${countersub1} questions has been answerd you have ${cc1} questions left`
        p3.textContent = `${bb1} questions has been answerd you have ${cc1} questions left`

        p2.textContent = `you have a total of ${b.length} questions`
        // const br = document.createElement("br")
        //divm.appendChild(p2)
        ////  div2.appendChild(br)
        //divm.appendChild(p3)

        const p1 = document.createElement("p")
        p1.textContent = `question ${kk + 1}`
        p1.style.fontWeight = "bold"
        p1.style.fontSize = "25px"
        p1.style.marginLeft = "70px"
        div2.appendChild(p1)
        const out = document.createElement("output")
        const divo = document.createElement("div")
        divo.style.display = "flex"
        divo.style.height = "80px"

        let gg = b[kk].picture
        if (gg != "") {
            div2.style.height = "200px"
            divo.innerHTML = `<img src="${gg}"/>`

            out.appendChild(divo)
            div2.appendChild(out)
        }

        const br = document.createElement("br")
        /*div2.appendChild(br)*/
        const p = document.createElement("p")
        p.textContent = b[kk].questions
        div2.appendChild(p)
        for (let k = 0; k < c[kk].length; k++) {

            const int6 = document.createElement("input")
            int6.type = "radio"
            int6.name = "l"
            int6.id = `idr${k}`
            int6.value = `${c[kk][k].answer1}+${c[kk][k].rightWorng}`

            const leb = document.createElement("label")

            const ra = localStorage.getItem(`answercount${kk}`)


            leb.innerHTML = `${c[kk][k].answer1}`
            if (k == ci && ra == 1) {
                int6.checked = true
            }

            const divs1 = document.createElement("div")
            divs1.id = `divs${k}`
            const divme = document.getElementById(`divs${k}`)
            const inme = document.getElementById(`idr${k}`)
            divs1.appendChild(int6)
            divs1.appendChild(leb)
            div2.appendChild(divs1)
            //  divs.appendChild(div5)
        }

        let count = parseInt(localStorage.getItem("counter"))
        count = count - 1
        localStorage.setItem("counter", count)






    }

}


function submit(c, b) {

    const kk = localStorage.getItem("counter")
    const ift = countsubmit.find((el) => el == kk)

    const radioButtons = document.querySelectorAll('input[name="l"]')
    let counta = 0
    for (let o1 = 0; o1 < c[kk].length; o1++) {
        if (radioButtons[o1].checked) {
            counta = counta + 1
            break
        }
    }
    if (counta == 0) {
        alert("no question has been choosen")
        return
    }
    const cn = localStorage.getItem(`answercount${kk}`)
    if (cn == "0") {
        localStorage.setItem(`answercount${kk}`, 1)
    }
    for (let o = 0; o < c[kk].length; o++) {
        const radioButtons = document.querySelectorAll('input[name="l"]')
        h = document.getElementById(`idr${o}`).value
        if (radioButtons[o].checked) {


            for (let oo = 0; oo < c[kk].length; oo++) {
                localStorage.removeItem(`chooseanswer${kk}${oo}`)
            }
            localStorage.setItem(`chooseanswer${kk}${o}`, h)
        }

        const g = h.split("+")
        if (g[1] == 1) {
            localStorage.removeItem(`rightanswer${kk}${o}`)
            localStorage.setItem(`rightanswer${kk}${o}`, h)

        }
    }


    const check = document.createElement("p")
    check.textContent = "check"
    const div = document.getElementById("divs5")
    div.appendChild(check)
    setTimeout(() => div.removeChild(check), 500)

    if (ift === undefined) {
        countsubmit.push(kk)
        up(b)
    }


}



async function subTest(c, b) {

    let countq0 = []

    for (let qq = 0; qq < b.length; qq++) {
        const lo = localStorage.getItem(`answercount${qq}`)
        if (lo == 0 && timeout == 0) {

            alert(`question ${qq + 1} has not been answered`)
            return
        }
        if (lo == 0 && timeout == 1) {

            localStorage.setItem(`chooseanswer${qq}0`, "missed question")
            localStorage.setItem(`rightanswer${qq}0`, ``)


        }


    }



    let answerc = b.length
    let c1 = 0
    let c2 = 0
    let quest = []
    let ria = []
    let woa = []
    let ra = ''
    let ca = ''
    for (let i = 0; i < b.length; i++) {
        for (let ii = 0; ii < c[i].length; ii++) {
            ca = localStorage.getItem(`chooseanswer${i}${ii}`)
            if (ca != null) {
                c1 = ii
            }
            ra = localStorage.getItem(`rightanswer${i}${ii}`)
            if (ra != null) {
                c2 = ii
            }





        }
        if (localStorage.getItem(`chooseanswer${i}${0}`) == "missed question") {
            quest.push(b[i])
            ria.push(localStorage.getItem(`rightanswer${i}${0}`))
            woa.push(localStorage.getItem(`chooseanswer${i}${0}`))
            answerc -= 1
        }
        else if (localStorage.getItem(`rightanswer${i}${c2}`) == localStorage.getItem(`chooseanswer${i}${c1}`)) {
            let ytyt = 0
        }

        else {
            quest.push(b[i])
            ria.push(localStorage.getItem(`rightanswer${i}${c2}`))
            woa.push(localStorage.getItem(`chooseanswer${i}${c1}`))
            answerc -= 1
        }


    }
    let cu = b.length
    let grade = ((100 / cu) * answerc).toString()
    let r = di
    const name = localStorage.getItem("stuName")
    const id = localStorage.getItem("stuId")
    const n1 = { testName: r, stuName: name, stuId: id, grade: grade }
    const y11 = 'https://localhost:7038/api/TestEx'
    const y112 = 'https://localhost:7151/api/TestExControler'
    const response = await fetch(y112, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n1) })
    const r1 = await response.json()
    let ca1 = 0
    if (response.status == 200) {
        let rm = 0
        if (quest.length > 0)
        {
            for (let rl = 0; rl < quest.length; rl++) {

                const n11 = { testEx1IdRef: r1.id, questions: quest[rl].questions }

                const y12 = 'https://localhost:7151/api/QuesEx'
                const response1 = await fetch(y12, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n11) })
                if (response1.status == 200) {
                    const r21 = await response1.json()
                    const n12 = { questionEx1IdRef: r21.id, RightAnswer: ria[rl], WorngAnswer: woa[rl] }
                    const y3 = 'https://localhost:7151/api/AnswerEx'

                    const response3 = await fetch(y3, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n12) })
                    // const res3=await response3.json()
                    if (response3.status == 200) {
                        ca1 = ca1 + 1

                    }
                    if (ca1 == quest.length) {
                        alert(` test load succefuly`)
                        finishtest()

                    }
                    if (response3.status != 200) { alert(`error ${response3.status}`) }
                }
                else { alert(`error ${response1.status}`) }
            }
        }
        else {
            alert(` test load succefuly`)
            finishtest()
        }
    }
    else { alert(`error ${response.status}`) }
}


function finishtest() {

    const stuname = localStorage.getItem("stuName")
    const stuId = localStorage.getItem("stuId")
    localStorage.clear()
    localStorage.setItem("stuName", stuname)
    localStorage.setItem("stuId", stuId)


    window.close("https://localhost:7151/Taketest4.html")

}