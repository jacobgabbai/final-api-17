window.addEventListener("beforeunload", localset)
const table = document.createElement("table")
//table.id = "table"


//table.style.backgroundColor = "azure"
//const tr1 = document.createElement("tr")
//const td1 = document.createElement("td")
//td1.style.border = "2px solid black"
//td1.style.padding="5px"
//td1.innerHTML = "Test Name"

//const td2 = document.createElement("td")
//td2.innerHTML = "Grade"
//td2.style.border = "2px solid black"
//td2.style.padding = "5px"
//const td3 = document.createElement("td")
//td3.innerHTML = "mistakes"
//td3.style.border = "2px solid black"
//td3.style.padding = "5px"
///*td3.style.cursor = "pointer"*/
///*td3.addEventListener("click", function () { watchmistake(a) })*/
//const sp = document.createElement("spacer")
//tr1.appendChild(td1)
//tr1.appendChild(sp)
//tr1.appendChild(td2)
//tr1.appendChild(sp)
//tr1.appendChild(td3)

//table.appendChild(tr1)
//document.body.appendChild(table)



window.addEventListener("load", testh)
qex = []
aex = []
var tr = true




async function testh() {


    const n = localStorage.getItem("stuId")

    

    const rep = await fetch(`api/TestExControler/${n}?i=0`)

    const repo = await rep.json()

    const tn = []
    if (rep.status != 200) {
        alert(`error ${rep.status}`)
    }
    if (repo.length == 0 && rep.status == 200) {

        alert("no test has been found")
    }

    if (rep.status == 200 && repo.length > 0) {

        // const repn = await fetch(`api/Test/id?id=${}`)
        const div = document.getElementById("div")
        div.id = "div1"
        const br = document.createElement("br")
        const div1 = document.createElement("div")
        div1.id = `div1${0}`
        const u = document.createElement("ul")
        u.id = `ul${0}`
        const li = document.createElement("p")
        li.id = `li${0}`
        li.textContent = `Student Name - ${repo[0].stuName}`
        u.appendChild(li)
        //u.appendChild(br)
        const li1 = document.createElement("p")
        li1.id = `li1${1}`
        li1.textContent = `Student Id - ${repo[0].stuId}`
        let gr=0
        for (let h = 0; h < repo.length; h++) {
          gr+=parseInt(repo[h].grade)

        }
        gr= parseInt( gr/(repo.length))
        const lig = document.createElement("P")
        lig.innerHTML=`Your Avrage Grade Is : ${gr}`
        
        u.appendChild(li1)
        u.appendChild(lig)
        div1.appendChild(u)
        const h33 = document.createElement("h3")
        h33.textContent = `Total of ${repo.length} Tests`
        div1.appendChild(h33)
        div.appendChild(div1)
        table.id = "table"


        table.style.backgroundColor = "azure"
        const tr1 = document.createElement("tr")
        const td1 = document.createElement("td")
        td1.style.border = "2px solid black"
        td1.style.padding = "5px"
        td1.innerHTML = "Test Name"

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

        tr1.appendChild(td2)

        tr1.appendChild(td3)
        table.style.width = "250px"
        table.style.float = "Left"
        table.appendChild(tr1)
        document.body.appendChild(table)


        for (let i = 0; i < repo.length; i++) {
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
            cell1.innerHTML = `${repo[i].testName}`


            var cell2 = row.insertCell()
            cell2.style.border = "2px solid black"
            cell2.style.padding = "5px"
            cell2.innerHTML = `${repo[i].grade}`

            var cell3 = row.insertCell()
            cell3.style.border = "2px solid black"
            cell3.style.padding = "5px"
            cell3.innerHTML = "mistake"
            cell3.style.cursor = "pointer"
            cell3.id = `${i}0`
            cell3.addEventListener("click", function () { watchmistake(a) })
            //const h2 = document.createElement("p")
            //h2.id = `h2${i}`
            //h2.textContent = `Test Grade: ${repo[i].grade}`

            //ult.appendChild(h2)
            //divt.appendChild(ult)
            //div.appendChild(divt)
            //if (repo[i].grade < 100) {

            const idt = repo[i].id

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
                    cell.addEventListener("click", function () { tr ? dissplay(i, b) : clearme(); tr = !tr })

                }
            }
        }


        const divwr = document.createElement("div")
        divwr.style.width = "400px"

        divwr.style.marginLeft = "40%"
        divwr.style.marginTop = "150px"
        const hwr = document.createElement("h1")
        hwr.textContent = "mistakes"
        hwr.style.marginLeft = "29%"


        document.body.appendChild(divwr)
        function dissplay(a, b) {

            divwr.replaceChildren()
            divwr.style.border = "dotted"
            divwr.appendChild(hwr)
            for (let z = 0; z < b; z++) {
                let bc = (b - 1) * 100 + 200
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

                p2.textContent = `the answer you choose is -  ${ww[0]}`
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
        }

        function clearme() {

            divwr.replaceChildren()
            divwr.style.border = ""


        }
    }
}




function localset() {

    const a = localStorage.getItem("stuId")
    const b = localStorage.getItem("stuName")
    localStorage.clear()
    localStorage.setItem("stuId", a)
    localStorage.setItem("stuName", b)



}