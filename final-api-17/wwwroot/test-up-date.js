
window.addEventListener("load", function () {

    const aa = localStorage.getItem("jjj")
    localStorage.removeItem("jjj")
    if (aa != null)
    {
      findtest2(aa)

    }

})


localStorage.setItem("open", 1)
let ee=0
window.addEventListener("beforeunload", function () { unload(ee) })
function unload() {
    const tn = localStorage.getItem("TeacherName")
    const ti = localStorage.getItem("TeacherIdRef")
    const aa = localStorage.getItem("jjj")
    localStorage.clear()
    if (ee == 1) {

        localStorage.setItem("jjj", aa)
        ee = 0

    }
    localStorage.setItem("TeacherName", tn)
    localStorage.setItem("TeacherIdRef", ti)

}
let qj = []
let rr = ""
let aj = []
let count = 0
const div1 = document.getElementById("div1")
const div11 = document.getElementById("div2")
const div111 = document.getElementById("div4")

async function findtest() {

   qj=[]
    aj = []
    const ajson = []

    const teacher = localStorage.getItem("TeacherIdRef")

    const testname = document.getElementById("idt").value



    const y1 = `api/Test/${testname},${teacher}`

    const y2 = ` https://localhost:7056/${y1}`

    if (testname != "") {
        const res = await fetch(y1)

        if (res.status == 204) {

            alert("no test has been found")
            return
        }

         rr = await res.json()

        const r1 = rr.id

        if (res.status != 200) { alert(`error ${res.status}`) }


        if (res.status == 200 && rr.testName == "empty") { "no test has been founde" }

        if (res.status == 200) {
            const resq = await fetch(`api/Question/${r1}`)
            if (resq.status != 200) { alert(`error${res.status}`) }
            if (resq.status == 200) {
                const qid = []
                let qjson = null
                  qjson=  await resq.json()

                for (let i = 0; i < qjson.length; i++) {
                    qid.push(qjson[i].id)
                    qj.push(qjson[i])


                }

                for (let ii = 0; ii < qid.length; ii++) {

                    const resa = await fetch(`api/Answer/${qid[ii]}`)
                    const yy = await resa.json()
                    const aj1 = []
                    for (let z = 0; z < yy.length; z++) {
                        ajson.push(yy[z])
                        aj1.push(yy[z])
                    }
                    aj.push(aj1)
                }
            }


            showdata(rr, qj, aj)
        }

    }




    else { alert("no data has been entered") }









}
async function findtest2(xx) {
    aj = []
    const ajson = []

    const teacher = localStorage.getItem("TeacherIdRef")

    const testname = xx



    const y1 = `api/Test/${testname},${teacher}`

    const y2 = ` https://localhost:7056/${y1}`

    if (testname != "") {
        const res = await fetch(y1)


        const rr = await res.json()

        const r1 = rr.id

        if (res.status != 200) { alert(`error ${res.status}`) }


        if (res.status == 200 && rr.testName == "empty") { "no test has been founde" }

        if (res.status == 200) {
            const resq = await fetch(`api/Question/${r1}`)
            if (resq.status != 200) { alert(`error${res.status}`) }
            if (resq.status == 200) {
                const qid = []
                const qjson = await resq.json()

                for (let i = 0; i < qjson.length; i++) {
                    qid.push(qjson[i].id)
                    qj.push(qjson[i])


                }

                for (let ii = 0; ii < qid.length; ii++) {

                    const resa = await fetch(`api/Answer/${qid[ii]}`)
                    const yy = await resa.json()
                    const aj1 = []
                    for (let z = 0; z < yy.length; z++) {
                        ajson.push(yy[z])
                        aj1.push(yy[z])
                    }
                    aj.push(aj1)
                }
            }


            showdata(rr, qj, aj)
        }

    }




    else { alert("no data has been entered") }









}


function showdata(m, qjson, aj) {

    div1.replaceChildren()
    div11.replaceChildren()
    div111.replaceChildren()
    const z = document.getElementById("div5")
    z.replaceChildren()
    z.style.borderColor="azure"


    const u = document.createElement("ul")
    const h1 = document.createElement("h1")
    const br = document.createElement("br")
    h1.innerHTML = "Test Informetion"
    const h2 = document.createElement("li")
    h2.textContent = `Test Name: ${m.testName}`
    const h3 = document.createElement("li")
    h3.textContent = `Test Date: ${m.testDate}`
    const h4 = document.createElement("li")
    h4.textContent = `Test Start Time: ${m.startTime}`
    const h5 = document.createElement("li")
    let mm = m.totalTime.split(".")
    let yname = ""
    if (mm.length > 1) {
        yname = "hours"
    }
    else {
        yname = "hour"
    }
    h5.textContent = `Test Total Time: ${m.totalTime} ${yname} `
    const h6 = document.createElement("li")
    if (m.random == 1) {
        h6.textContent = `Test Question is Random`
    }
    else (h6.textContent = "Test Question is not random")
    const btntest = document.createElement("button")
    btntest.id = "btntest"
    btntest.innerHTML = "test update"
    btntest.style.marginLeft = "200px"
    btntest.style.marginTop = "-100px"
    btntest.style.backgroundColor = "azure"
    btntest.addEventListener("click", function () { place(m) })
    const btntestd = document.createElement("button")
    btntestd.id = "btntestd"
    btntestd.innerHTML = "delete test"
    btntestd.style.marginLeft = "5px"
    btntestd.style.marginTop = "-100px"
   
    btntestd.style.backgroundColor = "azure"
    btntestd.addEventListener("click", function () { delete1(m) })
    const br11=document.createElement("p")
    u.appendChild(h1)

    u.appendChild(h2)

    u.appendChild(h3)
    u.appendChild(h4)
    u.appendChild(h5)
    u.appendChild(h6)
    div1.appendChild(h1)
    div1.appendChild(u)
    div1.appendChild(btntest)
    div1.appendChild(btntestd)

    div1.appendChild(br11)
    //const btnn = document.createElement("button")
    //btnn.id = "btnn"
    //btnn.innerHTML = "back"
    //btnn.style.marginLeft = "0px"
    //btnn.addEventListener("click", function () { back(count, aj, qjson) })
    ///* btnn.style.marginTop = "250"*/
    //const btnb = document.createElement("button")
    //btnb.id = "btnb"
    //btnb.innerHTML = "next"
    //btnb.style.marginLeft = "100px"
    //btnb.addEventListener("click", function () { next(count, aj, qjson) })
    ///* btnb.style.marginTop="250"*/
    //div1.appendChild(btnn)
    //div1.appendChild(btnb)
    /*for (let i = 0; i < qjson.length; i++) {*/

    //for (let y = 0; y < aj.length; y++)
    //{
    let y = 0
    const u1 = document.createElement("ul")
   // u1.style.marginLeft = "200px"
    
    const localdiv = document.createElement("div")
    localdiv.id = `id${y}`
    /* localdiv.style.display="flex"*/
    let l = 0
    const h11 = document.createElement("p")
    const h12 = document.createElement("p")
    let n = y + 1
    
    
    const btnq = document.createElement("button")
    btnq.style.backgroundColor="azure"
    btnq.innerHTML = "update question"
    let g=0
    btnq.addEventListener("click", function () {question(g,qjson,aj,m) })
    /*btnq.style.marginTop = "0px"*/
   
    const btnd = document.createElement("button")
    btnd.style.backgroundColor = "azure"
    btnd.innerHTML = "delete question"
    btnd.addEventListener("click", function () { deletequestion(g, qjson, aj, m) })
    const btnaa = document.createElement("button")
    btnaa.style.backgroundColor = "azure"
    btnaa.innerHTML = "add text question"
    btnaa.addEventListener("click", function () { addtext(g, qjson, aj, m) })
    const btnaq = document.createElement("button")
    btnaq.style.backgroundColor = "azure"
    btnaq.innerHTML = "add pic question"
    btnaq.addEventListener("click", function () { addpic(g, qjson, aj, m) })
    btnq.addEventListener("click", function () { question(g, qjson, aj, m) })
    
    const btnn = document.createElement("button")
    btnn.id = "btnn"
    btnn.innerHTML = "previes question"
    btnn.style.marginLeft = "-100px"
    
    btnn.style.backgroundColor="azure"
    btnn.addEventListener("click", function () { back(count, aj, qjson,m) })
    /* btnn.style.marginTop = "250"*/
    const btnb = document.createElement("button")
    btnb.id = "btnb"
    btnb.innerHTML = "next question"
    btnb.style.marginLeft = "0px"
   
    btnb.style.backgroundColor="azure"
    btnb.addEventListener("click", function () { next(count, aj, qjson,m) })
    /* btnb.style.marginTop="250"*/
    let ty = 0
    if (qjson.length > 0) {
        const h13 = document.createElement("p")
        h13.textContent = `${qjson[y].questions}`

        if (qjson[y].picture != "") {
            ty = 1
            const divpic = document.createElement("div")
            divpic.style.display = "flex"
            divpic.style.height = "100px"
            divpic.id = `pic${y}`
            let gg = qjson[y].picture
            divpic.innerHTML = `<img src="${gg}"/>`
            const out = document.createElement("output")
            out.appendChild(divpic)
            u1.appendChild(out)
        }
        h11.textContent = ` Question-${n}: `
        u1.appendChild(h11)
        u1.appendChild(h13)


        for (let r = 0; r < aj[y].length; r++) {
            const li1 = document.createElement("li")
            let r1 = r + 1
            li1.textContent = `${r1}) ${aj[y][r].answer1}`

            if (aj[y][r].rightWorng == 1) { l = r1 }
            u1.appendChild(li1)
        }
        h12.textContent = `the right answer is ${l}`
        u1.appendChild(h12)
    }

    else {
        h11.textContent = `No Questions In The Test `
        h11.style.fontSize = "25px"
        h11.style.fontWeight="bold"
        u1.appendChild(h11)
    }
    /*u1.appendChild(localdiv)*/
    div11.style.border = "dotted"
    div11.style.width = "250px"
    if (ty == 1) {
        div11.style.height = "300px"
    }
    else { div11.style.height = "300px" }
    div11.style.marginLeft="20px"
    div11.appendChild(u1)
    /*const div111 = document.getElementById("div4")*/
    div111.style.marginTop = "5px"
    div111.style.marginLeft = "120px"
    const br1 = document.createElement("p")
    div111.appendChild(br1)
    div111.appendChild(btnn)
    div111.appendChild(btnb)
    div111.appendChild(btnq)
    div111.appendChild(btnd)
    div111.appendChild(btnaa)
    div111.appendChild(btnaq)

    /*        }*/
    

    //while (qjson.length > 0) {
    //    qjson.pop();
    //}

    /*}*/

}


function next(y, aj, qjson,m) {

    y = y + 1

    if (qjson.length > y) {
        div11.replaceChildren()
        div111.replaceChildren()
        //const u1 = document.createElement("ul")
        //u1.style.marginLeft = "200px"
        //const localdiv = document.createElement("div")
        //localdiv.id = `id${y}`
        ///* localdiv.style.display="flex"*/
        //let l = 0
        //const h11 = document.createElement("p")
        //const h12 = document.createElement("p")
        //let n = y + 1
        //h11.textContent = ` Question-${n}: `
        //h11.style.marginTop = "-100px"
        //u1.appendChild(h11)
        //const btnn = document.createElement("button")
        //btnn.id = "btnn"
        //btnn.innerHTML = "back"
        //btnn.style.marginLeft = "150px"
        //btnn.style.marginTop = "100px"
        //btnn.addEventListener("click", function () { back(count, aj, qjson) })
        ///* btnn.style.marginTop = "250"*/
        //const btnb = document.createElement("button")
        //btnb.id = "btnb"
        //btnb.innerHTML = "next"
        //btnb.style.marginLeft = "250px"
        //btnb.style.marginTop = "100px"
        //btnb.addEventListener("click", function () { next(count, aj, qjson) })
        ///* btnb.style.marginTop="250"*/
        //div11.appendChild(btnn)
        //div11.appendChild(btnb)

        //const h13 = document.createElement("p")
        //h13.textContent = `${qjson[y].questions}`

        //if (qjson[y].picture != "null") {
        //    const divpic = document.createElement("div")
        //    divpic.style.display = "flex"
        //    divpic.style.height = "100px"
        //    divpic.id = `pic${y}`
        //    let gg = qjson[y].picture
        //    divpic.innerHTML = `<img src="${gg}"/>`
        //    const out = document.createElement("output")
        //    out.appendChild(divpic)
        //    u1.appendChild(out)
        //}

        //u1.appendChild(h13)


        //for (let r = 0; r < aj[y].length; r++) {
        //    const li1 = document.createElement("li")
        //    let r1 = r + 1
        //    li1.textContent = `${r1}) ${aj[y][r].answer1}`

        //    if (aj[y][r].rightWorng == 1) { l = r1 }
        //    u1.appendChild(li1)
        //}
        //h12.textContent = `the right answer is ${l}`
        //u1.appendChild(h12)
        ///*u1.appendChild(localdiv)*/
        //div11.appendChild(u1)
        const u1 = document.createElement("ul")
        // u1.style.marginLeft = "200px"

        const localdiv = document.createElement("div")
        localdiv.id = `id${y}`
        /* localdiv.style.display="flex"*/
        let l = 0
        const h11 = document.createElement("p")
        const h12 = document.createElement("p")
        let n = y + 1
        h11.textContent = ` Question-${n}: `

        const btnq = document.createElement("button")
        btnq.style.backgroundColor = "azure"
        btnq.innerHTML = "update question"
        btnq.addEventListener("click", function () { question(y, qjson, aj, m) })

        //
        const btnd = document.createElement("button")
        btnd.style.backgroundColor = "azure"
        btnd.innerHTML = "delete question"
        btnd.addEventListener("click", function () { deletequestion(y, qjson, aj, m) })
        const btnaa = document.createElement("button")
        btnaa.style.backgroundColor = "azure"
        btnaa.innerHTML = "add text question"
        btnaa.addEventListener("click", function () { addtext(y, qjson, aj, m) })
        const btnaq = document.createElement("button")
        btnaq.style.backgroundColor = "azure"
        btnaq.innerHTML = "add pic question"
        btnaq.addEventListener("click", function () { addpic(y, qjson, aj, m) })

        /*btnq.style.marginTop = "0px"*/


        u1.appendChild(h11)
        const btnn = document.createElement("button")
        btnn.id = "btnn"
        btnn.innerHTML = "previes question"
        btnn.style.marginLeft = "-100px"

        btnn.style.backgroundColor = "azure"
        count = count + 1

        btnn.addEventListener("click", function () { back(count, aj, qjson,m) })
        /* btnn.style.marginTop = "250"*/
        const btnb = document.createElement("button")
        btnb.id = "btnb"
        btnb.innerHTML = "next question"
        btnb.style.marginLeft = "0px"

        btnb.style.backgroundColor = "azure"
        btnb.addEventListener("click", function () { next(count, aj, qjson,m) })
        /* btnb.style.marginTop="250"*/


        const h13 = document.createElement("p")
        h13.textContent = `${qjson[y].questions}`
        let ty = 0
        if (qjson[y].picture != "") {
            ty = 1
            const divpic = document.createElement("div")
            divpic.style.display = "flex"
            divpic.style.height = "100px"
            divpic.id = `pic${y}`
            let gg = qjson[y].picture
            divpic.innerHTML = `<img src="${gg}"/>`
            const out = document.createElement("output")
            out.appendChild(divpic)
            u1.appendChild(out)
        }

        u1.appendChild(h13)


        for (let r = 0; r < aj[y].length; r++) {
            const li1 = document.createElement("li")
            let r1 = r + 1
            li1.textContent = `${r1}) ${aj[y][r].answer1}`

            if (aj[y][r].rightWorng == 1) { l = r1 }
            u1.appendChild(li1)
        }
        h12.textContent = `the right answer is ${l}`
        u1.appendChild(h12)
        /*u1.appendChild(localdiv)*/
        div11.style.border = "dotted"
        div11.style.width = "250px"
        if (ty == 1) {
            div11.style.height = "300px"
        }
        else { div11.style.height = "300px" }
        div11.style.marginLeft = "20px"
        div11.appendChild(u1)
        div111.style.marginTop = "5px"
        div111.style.marginLeft = "120px"
        div111.appendChild(btnn)
        div111.appendChild(btnb)
        div111.appendChild(btnq)
        div111.appendChild(btnd)
        div111.appendChild(btnaa)
        div111.appendChild(btnaq)
    }
}



function back(y, aj, qjson,m) {


    if (0 < y) {
        div11.replaceChildren()
        div111.replaceChildren()
        const u1 = document.createElement("ul")
        // u1.style.marginLeft = "200px"

        const localdiv = document.createElement("div")
        localdiv.id = `id${y}`
        /* localdiv.style.display="flex"*/
        let l = 0
        const h11 = document.createElement("p")
        const h12 = document.createElement("p")
        let n = y 
        h11.textContent = ` Question-${n}: `
        let yy=y-1
        const btnq = document.createElement("button")
        btnq.style.backgroundColor = "azure"
        btnq.innerHTML = "update question"
        btnq.addEventListener("click", function () { question(yy,qjson,aj,m) })

        /*btnq.style.marginTop = "0px"*/
        const btnd = document.createElement("button")
        btnd.style.backgroundColor = "azure"
        btnd.innerHTML = "delete question"
        btnd.addEventListener("click", function () { deletequestion(yy, qjson, aj, m) })
        const btnaa = document.createElement("button")
        btnaa.style.backgroundColor = "azure"
        btnaa.innerHTML = "add text question"
        btnaa.addEventListener("click", function () { addtext(yy, qjson, aj, m) })
        const btnaq = document.createElement("button")
        btnaq.style.backgroundColor = "azure"
        btnaq.innerHTML = "add pic question"
        btnaq.addEventListener("click", function () { addpic(yy, qjson, aj, m) })
        //
        u1.appendChild(h11)
        const btnn = document.createElement("button")
        btnn.id = "btnn"
        btnn.innerHTML = "previes question"
        btnn.style.marginLeft = "-100px"

        btnn.style.backgroundColor = "azure"
        

        btnn.addEventListener("click", function () { back(count, aj, qjson,m) })
        /* btnn.style.marginTop = "250"*/
        const btnb = document.createElement("button")
        btnb.id = "btnb"
        btnb.innerHTML = "next question"
        btnb.style.marginLeft = "0px"

        btnb.style.backgroundColor = "azure"
        btnb.addEventListener("click", function () { next(count, aj, qjson,m) })
        /* btnb.style.marginTop="250"*/


        const h13 = document.createElement("p")
        h13.textContent = `${qjson[y-1].questions}`
        let ty = 0
        if (qjson[y-1].picture != "") {
            ty = 1
            const divpic = document.createElement("div")
            divpic.style.display = "flex"
            divpic.style.height = "100px"
            divpic.id = `pic${y}`
            let gg = qjson[y-1].picture
            divpic.innerHTML = `<img src="${gg}"/>`
            const out = document.createElement("output")
            out.appendChild(divpic)
            u1.appendChild(out)
        }

        u1.appendChild(h13)


        for (let r = 0; r < aj[y-1].length; r++) {
            const li1 = document.createElement("li")
            let r1 = r + 1
            li1.textContent = `${r1}) ${aj[y-1][r].answer1}`

            if (aj[y-1][r].rightWorng == 1) { l = r1 }
            u1.appendChild(li1)
        }
        h12.textContent = `the right answer is ${l}`
        u1.appendChild(h12)
        /*u1.appendChild(localdiv)*/
        div11.style.border = "dotted"
        div11.style.width = "250px"
        if (ty == 1) {
            div11.style.height = "300px"
        }
        else { div11.style.height = "300px" }
        div11.style.marginLeft = "20px"
        div11.appendChild(u1)
        div111.style.marginTop = "5px"
        div111.style.marginLeft = "120px"
        div111.appendChild(btnn)
        div111.appendChild(btnb)
        div111.appendChild(btnq)
        div111.appendChild(btnd)
        div111.appendChild(btnaa)
        div111.appendChild(btnaq)

        count = count - 1
    }
}



function place(rr) {



                 let i=1
    const z = document.getElementById("div5")
    z.replaceChildren()

                z.style.border = "dotted"
                const l = document.createElement("h1")
                l.innerHTML = `test`
                const m = document.createElement("ul")
                m.id = `m0${i}`
                const m1 = document.createElement("ul")
                m1.id = `m1${i}`
                const m2 = document.createElement("ul")
                m2.id = `m2${i}`
                const m3 = document.createElement("ul")
                m3.id = `m3${i}`
                const m4 = document.createElement("ul")
                m4.id = `m4${i}`
                const m5 = document.createElement("ul")
                m5.id = `m5${i}`
                const m6 = document.createElement("ul")
                m6.id = `m6${i}`
                const n1 = document.createElement("li")
                const n2 = document.createElement("li")
                const n3 = document.createElement("li")
                const n4 = document.createElement("li")
                const n5 = document.createElement("li")
                //const b = document.createElement("button")
                //b.id = `button${i}`
                //b.innerHTML = `update test `
                n1.innerHTML = `test name : ${rr.testName}`
                n2.innerHTML = `test date :${rr.testDate}`
                n3.innerHTML = `total time :${rr.totalTime}`
                n4.innerHTML = `start time :${rr.startTime}`
                n5.innerHTML = `is question random ?${rr.random}`
                m.appendChild(l)
                m1.appendChild(n1)
                m2.appendChild(n2)
                m3.appendChild(n3)
                m4.appendChild(n4)
                m5.appendChild(n5)
              /*  m6.appendChild(b)*/

                z.appendChild(m)
                z.appendChild(m1)
                z.appendChild(m2)
                z.appendChild(m3)
                z.appendChild(m4)
                z.appendChild(m5)
                z.appendChild(m6)
                //const q = aaa[i].id
                //localStorage.setItem(`count${i}`, 0)
                //document.getElementById(`button${f}${i}`).addEventListener("click", function () { updatetest(i, q, f) })
            













    updatetest(rr)





}

function updatetest(rr) {

    let a=1
    //let s = localStorage.getItem(`count${a}`)
    //if (s == 0) {
        const z1 = document.getElementById(`m1${a}`)
        const z2 = document.getElementById(`m2${a}`)
        const z3 = document.getElementById(`m3${a}`)
        const z4 = document.getElementById(`m4${a}`)
        const z5 = document.getElementById(`m5${a}`)
        const z6 = document.getElementById(`m6${a}`)
        const x1 = document.createElement("input")
        const x2 = document.createElement("input")
        const x3 = document.createElement("input")
        const x4 = document.createElement("input")
        const x5 = document.createElement("select")
        const x55 = document.createElement("Option")
        const x56 = document.createElement("Option")
        x55.innerHTML = "yes"
        x55.value = "yes"
        x56.innerHTML = "no"
        x56.value = "no"
        x5.appendChild(x55)
        x5.appendChild(x56)
        const x6 = document.createElement("button")

        x2.type = "date"
        x3.type = "number"
        x3.min = "1"
        x3.max = "5"
        x3.step = "0.25"
        x4.type = "time"
        x1.id = "nl1"
        x2.id = "nl2"
        x3.id = "nl3"
        x4.id = "nl4"
        x5.id = "nl5"
        x6.id = `n6${a}`
        x1.placeholder = "enter test name"
        x2.placeholder = "enter test date"
        x3.placeholder = "enter test total time"
        x4.placeholder = "enter test start time"
        //  x5.placeholder = "is question random ?"
        x6.innerHTML = "save data"
        z1.appendChild(x1)
        z2.appendChild(x2)
        z3.appendChild(x3)
        z4.appendChild(x4)
        z5.appendChild(x5)
        z6.appendChild(x6)


        //s = s + 1
        //localStorage.setItem(`count${a}`, 1)
        //s = s
        //let bb = b
    x6.addEventListener("click", function () { put1(rr) })
//    document.getElementById(`n6${a}`).addEventListener("click", function () { put1(b) })
}



async function put1(d) {

    const t1 = document.getElementById(`nl1`).value
    const t2 = document.getElementById("nl2").value
    const t3 = document.getElementById("nl3").value
    const t4 = document.getElementById("nl4").value
    const t51 = document.getElementById('nl5').value
    let t5=0
    if (t51 == "yes") { t5 = 1 }
   
    // const t5 = parseInt(document.getElementById("nl5").value)


    if (t1 != "" && t2 != "" && t3 != "" && t4 != "" && t51 != "") {

        // let z = document.getElementById("TestName")
        //const a = t1.split(" ")
        //const aa = a.length
        //let p1 = a[0]
        //for (let k = 1; k < aa; k++) {
        //    if (a[k] != null) { p1 += "%20" + a[k] }
        //    if (a[k] = null) {
        //        break
        //    }
        //}

        let z1 = t1
        //const a1 = z1.split(" ")
        //const aa1 = a1.length
        //let p1 = a1[0]
        //for (let k = 1; k < aa1; k++) {
        //    if (a1[k] != null) { p1 += "%20" + a1[k] }
        //    if (a1[k] = null) {
        //        break
        //    }
        //}


        let z2 = t2
        let p2 = t2

        let z3 = t4
        let p3 = t4

        let z4 = t3
        let z5 = t5
        // document.getElementById("in4").value = null
        // document.getElementById("in5").value = null
        let z7 = parseInt(localStorage.getItem("TeacherIdRef"))

        let z6 = d.id

        const new1 = { Id: z6, testName: `${z1}`, testDate: `${z2}`, startTime: `${z3}`, totalTime: z4, random: z5, teacherIdRef: z7 }


        //let y1 = `https://localhost:7253/api/Test?s=${p1}&s1=${p2}&s2=${p3}&i=${z7}&i1=${z4}&i2=${z5}&i3=${z6}`
        const y1 = "https://localhost:7151/api/Test"
        const response = await fetch(y1, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(new1) })

        if (response.status == 200) {
           /* alert("succsess")*/
            localStorage.setItem("jjj", `${z1}`)
            ee=1
        location.reload()
        
        }

        else {
            alert(`erore ${response.status}`)
             location.reload()
}

    }
    else { alert("please enter data corctly") }

}


function question(y, qjson, aj,m) {

    if (qjson[y].picture == "") {

        const pdiv = document.getElementById("div5")
        pdiv.replaceChildren()
        pdiv.style.border="dotted"
        const h1 = document.createElement("h3")
        //  h1.style.fontSize = "25px"
        h1.style.marginLeft = "50px"
        h1.textContent = ` question${y + 1}`
        pdiv.appendChild(h1)

        //pdiv.id = "pdiv2"
        //pdiv.style.marginTop = "30px"
        const in1 = document.createElement("input")
        in1.style.marginLeft = "50px"
        in1.type = "text"
        in1.id = "in1"
        in1.value = ""
        in1.textContent = "enter question"
        const p1 = document.createElement("p")
        p1.textContent = "please enter a quetion"
        p1.style.marginLeft = "50px"
        pdiv.appendChild(p1)
        pdiv.appendChild(in1)
        for (let i = 0; i < 4; i++) {
            const p2 = document.createElement("p")
            p2.textContent = "please enter an answer"
            p2.style.marginLeft = "50px"
            const in3 = document.createElement("input")
            in3.style.marginLeft = "50px"
            in3.type = "text"
            in3.value = ""
            in3.id = `ina${i}`
            in3.textContent = "enter a question"
            pdiv.appendChild(p2)
            pdiv.appendChild(in3)

        }
        const p3 = document.createElement("p")
        p3.textContent = "choose the right answer"
        p3.style.marginLeft = "50px"
        const in4 = document.createElement("input")
        in4.style.marginLeft = "50px"
        in4.type = "number"
        in4.max = "4"
        in4.min = "1"
        in4.id = "index"
        in4.value = ""
        in4.textContent = "choose the right answer"
        pdiv.appendChild(p3)
        pdiv.appendChild(in4)
        const btns = document.createElement("button")
        btns.id = "btns"
        btns.innerHTML = "save question"
        btns.style.backgroundColor="azure"
        let b = 0
        let f=""
        btns.addEventListener("click", function () { questionupdate(y,qjson,aj,b,m,f) })

        let rr = 0
        //btns.addEventListener("click", function () { gg(rr) })
        //const btnt = document.createElement("button")
        //btnt.id = "btnt"
        //btnt.innerHTML = "save Test"
        /* btnt.addEventListener("click", function () { ff() })*/
       // const br = document.createElement("br")
       // const uld = document.createElement("ul")

       // /*  uld.appendChild(br)*/
       ///* uld.appendChild(br)*/
       // uld.appendChild(btns)
       // uld.appendChild(br.cloneNode())
       /* uld.appendChild(br)*/
        /* uld.appendChild(btnt)*/
        pdiv.appendChild(btns)
        /*div.appendChild(pdiv)*/

    }
    else { 
        const pdiv = document.getElementById("div5")
        pdiv.replaceChildren()
        pdiv.style.border="dotted"
        const h1 = document.createElement("h3")
      //  h1.style.fontSize = "25px"
        h1.style.marginLeft="50px"
        h1.textContent = ` question${y + 1}`
        pdiv.appendChild(h1)
     
        const pic = document.createElement("input")
        pic.type = "file"
        pic.value = ""
        
       // pic.style.marginTop = "30px"
        pic.style.marginLeft="50px"
        pic.id = "files"
        pic.accept = "img/jpg, img/jpeg"
        const leb = document.createElement("label")
        leb.setAttribute("for", "files")
        leb.style.backgroundColor="azure"
        pdiv.appendChild(pic)
        pdiv.appendChild(leb)
        /* document.querySelector("#files")*/
       
        pic.addEventListener("change", (e) => {

            const files = e.target.files
            var filename = files[0].name;
            var extension = filename.substr(filename.lastIndexOf("."))
            var allowedExtensionsRegx = /(\.jpg|\.jpeg)$/i;
            var isAllowed = allowedExtensionsRegx.test(extension);
            if (!isAllowed) {
                alert("please enter .jpg /.jpeg files")
                pic.value=""
                return
            }
            if (window.File && window.FileReader && window.Blob) {
                const pic1 = new FileReader()
                pic1.readAsDataURL(files[0])
                pic1.addEventListener("load", function (event) {
                    const ff = event.target
                    f = ff.result


                }

                )
            }
        })
        for (let i = 0; i < 4; i++) {
            const p2 = document.createElement("p")
            p2.style.marginLeft="50px"
            p2.textContent = "please enter an answer"
            const in3 = document.createElement("input")
            in3.style.marginLeft="50px"
            in3.type = "text"
            in3.id = `ina${i}`
            in3.textContent = "enter a question"
            pdiv.appendChild(p2)
            pdiv.appendChild(in3)

        }
        const p3 = document.createElement("p")
        p3.style.marginLeft="50px"
        p3.textContent = "choose the right answer"
        const in4 = document.createElement("input")
        in4.type = "number"
        in4.style.marginLeft="50px"
        in4.max = "4"
        in4.min = "1"
        in4.id = "index"
        in4.textContent = "choose the right answer"
        pdiv.appendChild(p3)
        pdiv.appendChild(in4)
        const btns = document.createElement("button")
        btns.id = "btns"
        btns.innerHTML = "save question"
        btns.style.backgroundColor="azure"
        pdiv.appendChild(btns)
        let r = 1
        let b=1
        btns.addEventListener("click", function () { questionupdate(y,qjson,aj,b,m,f) })
        //const btnt = document.createElement("button")
        //btnt.id = "btnt"
        //btnt.innerHTML = "save Test"
        //btnt.addEventListener("click", function () { ff() })

        const br = document.createElement("br")
        const uld = document.createElement("ul")

        ///*  uld.appendChild(br)*/
        //uld.appendChild(br)
        //uld.appendChild(btns)
        //uld.appendChild(br.cloneNode())
        //uld.appendChild(br)
        //uld.appendChild(btnt)
        //pdiv.appendChild(uld)
    }

}


async function questionupdate(y, qjson, aj, b,m,f) {

    let qu = ""
    let pic = ""

    if (b == 0) {
         qu = document.getElementById("in1").value
         pic=""
    }
    else if (b == 1) {

        pic = f

         qu=""
    }
    if (qu == "" && pic == "") {

        alert(" please enter data ")

        return
    }
    const an1=document.getElementById("ina0").value
    const an2 = document.getElementById("ina1").value
    if (an2 == "" && an1 == "") {

        alert("no question has been entered")
        return
    }
    const an3 = document.getElementById("ina2").value
    const an4 = document.getElementById("ina3").value
    const an5=document.getElementById("index").value
    const a = qjson[y].id
    const a1=m.id
    const n11 = { id: a, testIdRef: a1, questions: `${qu}`, picture: `${pic}` }

    const y11 = 'https://localhost:7038/api/Q'
    const y112 = 'https://localhost:7151/api/Question'
    const response = await fetch(y112, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n11) })
    const response1 = response.json()
    if (response.status != 200) {
        alert(`error${response.status}`)
        ee=1
      location.reload()


    }

    else {
        let b3 = 0
        let countc=0
        for (let h = 0; h < 4; h++)
        {
            const b1 = document.getElementById(`ina${h}`).value
            if (b1 != "") {
                const comper = parseInt(an5) - 1
                if (h == comper) {
                    b3 = 1
                }
                else { b3 = 0 }
                const b2 = qjson[y].id

                const n11 = { id: b3, answer1: `${b1}`, questionIdRef: b2, rightWorng: b3 }
                const y11 = 'https://localhost:7151/api/Answer'
                const response11 = await fetch(y11, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n11) })
                if (response11.status != 200) {
                    alert(`error ${response11.status}`)
                    countc = 1
                    ee=1
                    location.reload()
                }
            }


        }
        if (countc == 0) {

            localStorage.setItem("jjj", `${m.testName}`)
            ee=1
            location.reload()
        }
    }



}


function delete1(m) {

    const pdiv = document.getElementById("div5")
    pdiv.replaceChildren()
    pdiv.style.border = "dotted"
    const h1 = document.createElement("h3")
    //  h1.style.fontSize = "25px"
    h1.style.marginLeft = "50px"
    h1.style.fontSize="25px"
    h1.textContent = ` Delete Test ${m.testName} ?`
    pdiv.appendChild(h1)
    const btnd = document.createElement("button")
    btnd.innerHTML = "Delete"
    btnd.style.padding = "15px 32px"
    btnd.style.fontSize="16px"
    btnd.style.marginLeft = "32%"
    btnd.style.cursor = "pointer"
    btnd.addEventListener("click", function () {deletetest(m) })
    btnd.style.backgroundColor = "azure"
    pdiv.appendChild(btnd)


}

async function deletetest(m) {

    const y1 = `api/Test/${m.id}`
    
    const response11 = await fetch(y1, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify() })

    const resjson = await response11.json()

    if (response11.status == 200 && resjson == 1) {

        alert("Test Ashdod Has Been Deleted")

        window.close("https://localhost:7151/updatetest.html")

    }
}


async function deletequestion(g, qjson, aj, m) {

    if( qjson.length > 0 ){

        const pdiv = document.getElementById("div5")
        pdiv.replaceChildren()
        pdiv.style.border = "dotted"
        const h1 = document.createElement("h3")
        //  h1.style.fontSize = "25px"
        h1.style.marginLeft = "50px"
        h1.style.fontSize = "25px"
        h1.textContent = ` Delete Question ${g + 1} ?`
        pdiv.appendChild(h1)
        const btnd = document.createElement("button")
        btnd.innerHTML = "Delete"
        btnd.style.padding = "15px 32px"
        btnd.style.fontSize = "16px"
        btnd.style.marginLeft = "32%"
        btnd.style.cursor = "pointer"
        btnd.addEventListener("click", function () { deleteQ(g, qjson,m) })
        btnd.style.backgroundColor = "azure"
        pdiv.appendChild(btnd)

    }

}


async function deleteQ(g,qjson,m) {

    const y1 = `api/Question/${qjson[g].id}`

    const response11 = await fetch(y1, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify() })

    const resjson = await response11.json()

    if (response11.status == 200 && resjson == 1) {

        localStorage.setItem("jjj", `${m.testName}`)
        ee=1
        location.reload()

    }


}


function addpic(y, qjson, aj, m) {

    const pdiv = document.getElementById("div5")
    pdiv.replaceChildren()
    pdiv.style.border = "dotted"
    const h1 = document.createElement("h3")
    //  h1.style.fontSize = "25px"
    h1.style.marginLeft = "50px"
    h1.textContent = ` Add Questions`
    pdiv.appendChild(h1)

    const pic = document.createElement("input")
    pic.type = "file"
    pic.value = ""

    // pic.style.marginTop = "30px"
    pic.style.marginLeft = "50px"
    pic.id = "files"
    pic.accept = "img/jpg, img/jpeg"
    const leb = document.createElement("label")
    leb.setAttribute("for", "files")
    leb.style.backgroundColor = "azure"
    pdiv.appendChild(pic)
    pdiv.appendChild(leb)
    /* document.querySelector("#files")*/

    pic.addEventListener("change", (e) => {

        const files = e.target.files
        var filename = files[0].name;
        var extension = filename.substr(filename.lastIndexOf("."))
        var allowedExtensionsRegx = /(\.jpg|\.jpeg)$/i;
        var isAllowed = allowedExtensionsRegx.test(extension);
        if (!isAllowed) {
            alert("please enter .jpg /.jpeg files")
            pic.value = ""
            return
        }
        if (window.File && window.FileReader && window.Blob) {
            const pic1 = new FileReader()
            pic1.readAsDataURL(files[0])
            pic1.addEventListener("load", function (event) {
                const ff = event.target
                f = ff.result


            }

            )
        }
    })
    for (let i = 0; i < 4; i++) {
        const p2 = document.createElement("p")
        p2.style.marginLeft = "50px"
        p2.textContent = "please enter an answer"
        const in3 = document.createElement("input")
        in3.style.marginLeft = "50px"
        in3.type = "text"
        in3.id = `ina${i}`
        in3.textContent = "enter a question"
        pdiv.appendChild(p2)
        pdiv.appendChild(in3)

    }
    const p3 = document.createElement("p")
    p3.style.marginLeft = "50px"
    p3.textContent = "choose the right answer"
    const in4 = document.createElement("input")
    in4.type = "number"
    in4.style.marginLeft = "50px"
    in4.max = "4"
    in4.min = "1"
    in4.id = "index"
    in4.textContent = "choose the right answer"
    pdiv.appendChild(p3)
    pdiv.appendChild(in4)
    const btns = document.createElement("button")
    btns.id = "btns"
    btns.innerHTML = "save question"
    btns.style.backgroundColor = "azure"
    pdiv.appendChild(btns)
    let r = 1
    let b = 1
    btns.addEventListener("click", function () { questionAdd(y, qjson, aj, b, m, f) })
    //const btnt = document.createElement("button")
    //btnt.id = "btnt"
    //btnt.innerHTML = "save Test"
    //btnt.addEventListener("click", function () { ff() })

    const br = document.createElement("br")
    const uld = document.createElement("ul")

        ///*  uld.appendChild(br)*/
        //uld.appendChild(br)
        //uld.appendChild(btns)
        //uld.appendChild(br.cloneNode())
        //uld.appendChild(br)
        //uld.appendChild(btnt)
        //pdiv.appendChild(uld)








}


 function addtext(y, qjson, aj, m) {

    const pdiv = document.getElementById("div5")
    pdiv.replaceChildren()
    pdiv.style.border = "dotted"
    const h1 = document.createElement("h3")
    //  h1.style.fontSize = "25px"
    h1.style.marginLeft = "50px"
    h1.textContent = ` Add Question`
    pdiv.appendChild(h1)

    //pdiv.id = "pdiv2"
    //pdiv.style.marginTop = "30px"
    const in1 = document.createElement("input")
    in1.style.marginLeft = "50px"
    in1.type = "text"
    in1.id = "in1"
    in1.value = ""
    in1.textContent = "enter question"
    const p1 = document.createElement("p")
    p1.textContent = "please enter a quetion"
    p1.style.marginLeft = "50px"
    pdiv.appendChild(p1)
    pdiv.appendChild(in1)
    for (let i = 0; i < 4; i++) {
        const p2 = document.createElement("p")
        p2.textContent = "please enter an answer"
        p2.style.marginLeft = "50px"
        const in3 = document.createElement("input")
        in3.style.marginLeft = "50px"
        in3.type = "text"
        in3.value = ""
        in3.id = `ina${i}`
        in3.textContent = "enter a question"
        pdiv.appendChild(p2)
        pdiv.appendChild(in3)

    }
    const p3 = document.createElement("p")
    p3.textContent = "choose the right answer"
    p3.style.marginLeft = "50px"
    const in4 = document.createElement("input")
    in4.style.marginLeft = "50px"
    in4.type = "number"
    in4.max = "4"
    in4.min = "1"
    in4.id = "index"
    in4.value = ""
    in4.textContent = "choose the right answer"
    pdiv.appendChild(p3)
    pdiv.appendChild(in4)
    const btns = document.createElement("button")
    btns.id = "btns"
    btns.innerHTML = "save question"
    btns.style.backgroundColor = "azure"
    let b = 0
    let f = ""
    btns.addEventListener("click", function () { questionAdd(y, qjson, aj, b, m, f) })

    let rr = 0
    //btns.addEventListener("click", function () { gg(rr) })
    //const btnt = document.createElement("button")
    //btnt.id = "btnt"
    //btnt.innerHTML = "save Test"
    /* btnt.addEventListener("click", function () { ff() })*/
    // const br = document.createElement("br")
    // const uld = document.createElement("ul")

    // /*  uld.appendChild(br)*/
    ///* uld.appendChild(br)*/
    // uld.appendChild(btns)
    // uld.appendChild(br.cloneNode())
    /* uld.appendChild(br)*/
    /* uld.appendChild(btnt)*/
    pdiv.appendChild(btns)
        /*div.appendChild(pdiv)*/





}


async function questionAdd(y, qjson, aj, b, m, f) {

    let qu = ""
    let pic = ""

    if (b == 0) {
        qu = document.getElementById("in1").value
        pic = ""
    }
    else if (b == 1) {

        pic = f

        qu = ""
    }
    if (qu == "" && pic == "") {

        alert(" please enter data ")

        return
    }
    const an1 = document.getElementById("ina0").value
    const an2 = document.getElementById("ina1").value
    if (an2 == "" && an1 == "") {

        alert("no question has been entered")
        return
    }
    const an3 = document.getElementById("ina2").value
    const an4 = document.getElementById("ina3").value
    const an5 = document.getElementById("index").value
    const a1 = m.id
    const a = 0
    const n11 = { id: a, testIdRef: a1, questions: `${qu}`, picture: `${pic}` }

    const y11 = 'https://localhost:7038/api/Q'
    const y112 = 'https://localhost:7151/api/Question'
    const response = await fetch(y112, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n11) })
    const response1 =await response.json()
    
    if (response.status != 200) {
        alert(`error${response.status}`)
        ee=1
        location.reload()


    }

    else {
        let b3 = 0
        let countc = 0
        for (let h = 0; h < 4; h++) {
            const b1 = document.getElementById(`ina${h}`).value
            if (b1 != "") {
                const comper = parseInt(an5) - 1
                if (h == comper) {
                    b3 = 0
                }
                else { b3 = 0 }
                const b2 = response1.id

                const n11 = { id: b3, answer1: `${b1}`, questionIdRef: b2, rightWorng: b3 }
                const y11 = 'https://localhost:7151/api/Answer'
                const response11 = await fetch(y11, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n11) })
                if (response11.status != 200) {
                    alert(`error ${response11.status}`)
                    countc = 1
                    ee=1
                    location.reload()
                }
            }


        }
        if (countc == 0) {

            localStorage.setItem("jjj", `${m.testName}`)
            ee=1
            location.reload()
        }
    }




}