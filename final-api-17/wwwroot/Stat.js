
const div = document.getElementById("div")
const table = document.createElement("table")
const divwr = document.createElement("div")
localStorage.setItem("open", 1)
window.addEventListener("beforeunload", function () { unload() })
function unload() {
    const tn = localStorage.getItem("TeacherName")
    const ti = localStorage.getItem("TeacherIdRef")
   
    localStorage.clear()
   
    localStorage.setItem("TeacherName", tn)
    localStorage.setItem("TeacherIdRef", ti)

}

qex = []
aex = []
var tr = true
let gg = 0
let co = 0
let clear=true

function reload() {

    const tn = localStorage.getItem("TeacherName")
    const ti = localStorage.getItem("TeacherIdRef")
    const open=localStorage.getItem("openstat")
    localStorage.clear()
    localStorage.setItem("open",1)
    localStorage.setItem("openstat",1)
    localStorage.setItem("TeacherName", tn)
    localStorage.setItem("TeacherIdRef", ti)
}

async function Stati() {
    
    reload()
    div.replaceChildren()
    
    cleartable()
    if (co == 1) {
    clearme()

    }

   

    const id = localStorage.getItem("TeacherIdRef")
    const testname = document.getElementById("inputname").value
    /*const rep = await fetch(`api/TEST/${testname},${id}`)*/

    const rep = await fetch(`api/TestExControler/${testname}?i=1`)
    if (rep.status != 200) {
        alert(`error ${rep.status}`)

    }


    const repjson = await rep.json()

    if (repjson.length == 0) {

        alert("no tests where found please try different name")
        return
    }

    gg=parseInt(repjson.length)
    if (rep.status == 200 && repjson.testName != "empty") {

        //    alert(`"${testname}" has not been found`)


        //}

        //if (rep.status == 200 && repjson.testName != "empty") {
        //    //const teacheidref = repjson.id
        //    //const rep2 = await fetch(`api/TestExControler?tid=${teacheidref}`)
        //    //const rep2json = await rep2.json()
        let avg = 0
        for (let o = 0; o < repjson.length; o++) {

            avg = avg + parseInt(repjson[o].grade)

        }
        avg = parseInt(avg / (repjson.length))
    /*    for (let i = 0; i < repjson.length; i++) {*/


           /* const div1 = document.createElement("div")*/
            const h1 = document.createElement("h3")
            h1.textContent = `Total of ${repjson.length} students made the test, the average grade of the student is ${avg}`

            div.appendChild(h1)
        
       /* div1.id = `id${1}`*/
        //const ul = document.createElement("ul")
        //ul.id = `ul${i}`
        //const li = document.createElement("li")
        //li.id = `li${i}`

        //li.textContent = `Student Name : ${repjson[i].stuName}-Grade/${repjson[i].grade}`
        //ul.appendChild(li)
        //div1.appendChild(ul)

        //if (i == 0) {
        //    div.appendChild(h1)
        //}
        //div.appendChild(div1)

        //        if (repjson[i].grade != "100") {
        //            let idt = repjson[i].id
        //            const repQ = await fetch(`api/QuesEx/${idt}`)
        //            const repQjson = await repQ.json()
        //            const b = repQjson.length
        //            for (let ii = 0; ii < repQjson.length; ii++) {
        //                const rep13 = await fetch(`api/AnswerEx/${repQjson[ii].id}`)
        //                const rep13j = await rep13.json()
        //                localStorage.setItem(`question${i}${ii}`, repQjson[ii].questions)
        //                localStorage.setItem(`answersW${i}${ii}`, rep13j.worngAnswer)
        //                if (ii == 0) {
        //                    let t = true
        //                    //const tt=document.createElement("let")
        //                    //tt.id = `tt${i}`
        //                    //tt.innerHTML="true"
        //                    document.getElementById(`li${i}`).addEventListener("click", function () { t ? dis(i, b) : clean(b); t = !t })

        //                }
        //            }

        //        }
        //    }

        /*const div = document.getElementById("div")*/
        //div.id = "div1"
        //const br = document.createElement("br")
        //const div1 = document.createElement("div")
        //div1.id = `div1${0}`
        //const u = document.createElement("ul")
        //u.id = `ul${0}`
        //const li = document.createElement("p")
        //li.id = `li${0}`
        //li.textContent = `Student Name - ${repo[0].stuName}`
        //u.appendChild(li)
        ////u.appendChild(br)
        //const li1 = document.createElement("p")
        //li1.id = `li1${1}`
        //li1.textContent = `Student Id - ${repo[0].stuId}`
        //let gr = 0
        //for (let h = 0; h < repo.length; h++) {
        //    gr += parseInt(repo[h].grade)

        //}
        //gr = parseInt(gr / (repo.length))
        //const lig = document.createElement("P")
        //lig.innerHTML = `Your Avrage Grade Is : ${gr}`

        //u.appendChild(li1)
        //u.appendChild(lig)
        //div1.appendChild(u)
        //const h33 = document.createElement("h3")
        //h33.textContent = `Total of ${repjson.length} Tests`
        //div1.appendChild(h33)
       /* div.appendChild(div1)*/
        table.id = "table"


        table.style.backgroundColor = "azure"
        const tr1 = document.createElement("tr")
        const td1 = document.createElement("td")
        td1.style.border = "2px solid black"
        td1.style.padding = "5px"
        td1.innerHTML = "Student Name"
        const td4 = document.createElement("td")
        td4.innerHTML = "Id numbre"
        td4.style.border = "2px solid black"
        td4.style.padding = "5px"
        const td2 = document.createElement("td")
        td2.innerHTML = "Grade"
        td2.style.border = "2px solid black"
        td2.style.padding = "5px"
        const td3 = document.createElement("td")
        td3.innerHTML = "mistakes"
        td3.style.border = "2px solid black"
        td3.style.padding = "5px"
        /*td3.style.cursor = "pointer"*/
        /*td3.addEventListener("click", function () { watchmistake(a) })*/
        const sp = document.createElement("spacer")
        tr1.appendChild(td1)
        tr1.appendChild(td4)
        tr1.appendChild(td2)

        tr1.appendChild(td3)
        table.style.width = "250px"
        table.style.float = "Left"
        table.appendChild(tr1)
        if (co == 0) {
            document.body.appendChild(table)

        }
        
        for (let i = 0; i < repjson.length; i++) {
            const f1 = ``
            //const y11 = `/api/Test/id?id=${repo[i].testIdRef}`
            //const repn = await fetch(y11)
            //const tnm = await repn.json()
            /* const divt = document.createElement("div")*/
            //divt.id = `divt${i}`
            //const ult = document.createElement("ul")
            //ult.id = `ult${i}`
            //const h1 = document.createElement("p")
            //h1.id = `h1${i}`
            //h1.textContent = `${i + 1}) Test Name: ${tnm.testName}`
            /* ult.appendChild(h1)*/
            var row = table.insertRow()
            var cell1 = row.insertCell()
            cell1.style.border = "2px solid black"
            cell1.style.padding = "5px"
            cell1.innerHTML = `${repjson[i].stuName}`
            var cell4 = row.insertCell()
            cell4.style.border = "2px solid black"
            cell4.style.padding = "5px"
            cell4.innerHTML = `${repjson[i].stuId}`

            var cell2 = row.insertCell()
            cell2.style.border = "2px solid black"
            cell2.style.padding = "5px"
            cell2.innerHTML = `${repjson[i].grade}`

            var cell3 = row.insertCell()
            cell3.style.border = "2px solid black"
            cell3.style.padding = "5px"
            cell3.innerHTML = "mistake"
            cell3.style.cursor = "pointer"
            cell3.id = `${i}0`
           /* cell3.addEventListener("click", function () { watchmistake(a) })*/
            //const h2 = document.createElement("p")
            //h2.id = `h2${i}`
            //h2.textContent = `Test Grade: ${repo[i].grade}`

            //ult.appendChild(h2)
            //divt.appendChild(ult)
            //div.appendChild(divt)
            //if (repo[i].grade < 100) {

            const idt = repjson[i].id

            const rep12 = await fetch(`api/QuesEx/${idt}`)
            const rep12j = await rep12.json()
            const b = rep12j.length
            ///   const ida = rep12j[i].id
            for (let ii = 0; ii < rep12j.length; ii++) {
                const rep13 = await fetch(`api/AnswerEx/${rep12j[ii].id}`)
                const rep13j = await rep13.json()
                localStorage.setItem(`question${i}${ii}`, rep12j[ii].questions)
                localStorage.setItem(`answersR${i}${ii}`, rep13j.rightAnswer)
                localStorage.setItem(`answersW${i}${ii}`, rep13j.worngAnswer)
                if (ii == 0) {
                    const cell = document.getElementById(`${i}0`)
                    //cell.addEventListener("click", function () { tr ? dissplay(i, b) : clearme(i,b); tr = !tr })
                    cell.addEventListener("click", function () {  dissplay(i, b,repjson[i])  })

                }
            }
        }
      

        //const divwr = document.createElement("div")
        //divwr.style.width = "400px"

        //divwr.style.marginLeft = "40%"
        //divwr.style.marginTop = "150px"
        //const hwr = document.createElement("h1")
        //hwr.textContent = "mistakes"
        //hwr.style.marginLeft = "29%"

      
            
        
        //function dissplay(a, b) {
        //    if (clear == true) {
        //        const divwr = document.createElement("div")
        //        divwr.style.width = "400px"

        //        divwr.style.marginLeft = "40%"
        //        divwr.style.marginTop = "150px"
        //        const hwr = document.createElement("h1")
        //        hwr.textContent = "mistakes"
        //        hwr.style.marginLeft = "29%"
        //        document.body.appendChild(divwr)
        //        divwr.replaceChildren()
        //        divwr.style.border = "dotted"
        //        divwr.appendChild(hwr)
        //        for (let z = 0; z < b; z++) {
        //            let bc = (b - 1) * 100 + 220
        //            let bcs = bc.toString()
        //            divwr.style.height = `${bcs}px`
        //            const w = localStorage.getItem(`answersW${a}${z}`)
        //            const ww = w.split("+")

        //            const r = localStorage.getItem(`answersR${a}${z}`)

        //            const rr = r.split("+")
        //            const p1 = document.createElement("p")
        //            p1.textContent = `the right answer is - ${rr[0]}`
        //            p1.style.marginLeft = "30%"
        //            const p2 = document.createElement("p")
        //            p2.style.marginLeft = "30%"

        //            p2.textContent = `the answer you choose is -  ${ww[0]}`
        //            const p3 = document.createElement("p")
        //            const q1 = localStorage.getItem(`question${a}${z}`)
        //            p3.textContent = `Question-${z + 1} "${q1}"`
        //            p3.style.marginLeft = "25%"
        //            p3.style.fontWeight = "bold"
        //            divwr.appendChild(p3)
        //            divwr.appendChild(p2)
        //            divwr.appendChild(p1)

        //            /* divt.appendChild(divwr)*/

        //        }
        //        const btnclose = document.createElement("button")
        //        btnclose.innerHTML = "close window"
        //        btnclose.addEventListener("click", function () { clearme(divwr) })
        //        btnclose.style.backgroundColor = "azure"
        //        btnclose.style.marginLeft = "30%"
        //        divwr.appendChild(btnclose)
        //    }
        //    clear=false
        //}

        //function clearme(divwr) {
        //    divwr.remove()
        //    //    divwr.replaceChildren()
        //    //divwr.style.border = ""
          
        //        clear = true


            

        //}
    }
    co = 1
}

function dissplay(a, b,c) {

    if (clear == true) {
        /*const divwr = document.createElement("div")*/
        divwr.style.width = "400px"

        divwr.style.marginLeft = "40%"
        divwr.style.marginTop = "50px"
        const hwr = document.createElement("h1")
        hwr.textContent = "mistakes"
        hwr.style.marginLeft = "29%"
        document.body.appendChild(divwr)
        divwr.replaceChildren()
        divwr.style.border = "dotted"
        const pn = document.createElement("p")
        pn.textContent = `Student Name : ${c.stuName}`
        pn.style.fontWeight = "bold"
        pn.style.marginLeft="20px"
        const pi = document.createElement("p")
        pi.style.fontWeight = "bold"
        pi.textContent = `Student Id : ${c.stuId}`
        pi.style.marginLeft = "20px"
        divwr.appendChild(hwr)
        divwr.appendChild(pn)
        divwr.appendChild(pi)
        for (let z = 0; z < b; z++) {
            let bc = (b - 1) * 100 + 300
            let bcs = bc.toString()
            divwr.style.height = `${bcs}px`
            const w = localStorage.getItem(`answersW${a}${z}`)
            const ww = w.split("+")

            const r = localStorage.getItem(`answersR${a}${z}`)

            const rr = r.split("+")
            const p1 = document.createElement("p")
            p1.textContent = `the right answer is - ${rr[0]}`
            p1.style.marginLeft = "30%"
            const p2 = document.createElement("p")
            p2.style.marginLeft = "30%"

            p2.textContent = `the answer he choose is -  ${ww[0]}`
            const p3 = document.createElement("p")
            const q1 = localStorage.getItem(`question${a}${z}`)
            p3.textContent = `Question-${z + 1} "${q1}"`
            p3.style.marginLeft = "25%"
            p3.style.fontWeight = "bold"
            divwr.appendChild(p3)
            divwr.appendChild(p2)
            divwr.appendChild(p1)

            /* divt.appendChild(divwr)*/

        }
        const btnclose = document.createElement("button")
        btnclose.innerHTML = "close window"
        btnclose.addEventListener("click", function () { clearme() })
        btnclose.style.backgroundColor = "azure"
        btnclose.style.marginLeft = "30%"
        divwr.appendChild(btnclose)
    }
    clear = false
}

function clearme() {
    divwr.remove()
    //    divwr.replaceChildren()
    //divwr.style.border = ""

    clear = true




}
function clearme1(divwr) {

    divwr.replaceChildren()
    divwr.style.border = ""
    divwr.remove()
    clear = true




}

function cleartable() {
    let dd=gg
    if (dd > 0) {
        for (
            let i = 0; i <= gg; i++) {

            table.deleteRow(0)
        }
    }

}


let r = 0

function dis(a, b) {

    const divs = document.getElementById(`id${a}`)
    const innerdiv = document.createElement("div")
    innerdiv.id = `idd${b}`

    for (let z = 0; z < b; z++) {
        const w = localStorage.getItem(`answersW${a}${z}`)
        const ww = w.split("+")

        /* const r = localStorage.getItem(`answersR${a}${z}`)*/

        // const rr = r.split("+")
        //const p1 = document.createElement("p")
        //p1.textContent = `the right answer is - ${rr[0]}`
        const p2 = document.createElement("p")

        p2.textContent = `choose answer -  ${ww[0]}`
        const p3 = document.createElement("p")

        const q1 = localStorage.getItem(`question${a}${z}`)

        p3.textContent = `Question-${z + 1} "${q1}"`


        innerdiv.appendChild(p3)
        innerdiv.appendChild(p2)
        divs.appendChild(innerdiv)
        //div.appendChild(divs)

    }



}

function clean(b) {


    const divc = document.getElementById(`idd${b}`)

    divc.remove()
}

