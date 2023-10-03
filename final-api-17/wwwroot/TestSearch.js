


async function testsearch() {

    const inb = document.getElementById("in").value
  
    const y1 = `api/Test/${inb},0`

    const response = await fetch(y1)

    const repsjson=await response.json()

    if (response.status != 200) {
        alert(`error ${response.status}`)


    }
    if (repsjson.testName == "empty") {

        const div = document.getElementById("div")
        div.replaceChildren()
        const p = document.createElement("p")
        p.textContent = "no test has been found"
        div.style.border = ""
        p.style.fontSize = "40px"
        p.style.margin = "center"
        div.appendChild(p)



    }

    else {

        const div = document.getElementById("div")
        div.replaceChildren()
        div.style.border = "dotted"
        div.style.position="relative"
        const p1 = document.createElement("p")
        p1.style.marginTop = "30px"
        p1.style.marginLeft="15%"
        p1.textContent = `test name : ${repsjson.testName}`
        p1.style.fontSize="25px"
        const br = document.createElement("br")
        const p2 = document.createElement("p")
        p2.style.fontSize = "25px"
        p2.style.marginLeft = "15%"
        p2.textContent = `test date: ${repsjson.testDate}`
        const p3 = document.createElement("p")
        p3.style.fontSize = "25px"
        p3.style.marginLeft = "15%"
        p3.textContent = `test start time: ${repsjson.startTime}`
        const p4 = document.createElement("p")
        p4.style.fontSize = "25px"
        p4.style.marginLeft = "15%"
        p4.textContent = `test total time: ${repsjson.totalTime} hour`
        div.appendChild(p1)
      /*  div.appendChild(br)*/
        div.appendChild(p2)
        div.appendChild(p3)
        div.appendChild(p4)


    }




}