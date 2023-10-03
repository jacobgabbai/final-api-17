const a = addEventListener("load", get)
localStorage.setItem("open",1)
window.addEventListener("beforeunload", function () { unload() })
function unload() {
    const tn = localStorage.getItem("TeacherName")
    const ti = localStorage.getItem("TeacherIdRef")

    localStorage.clear()

    localStorage.setItem("TeacherName", tn)
    localStorage.setItem("TeacherIdRef", ti)

}
let Questionnumbre = 0
let countquestion = 0
let p = true
let on1 = false
let on2 = false
let f = ""
async function get() {



    const aa = await fetch(`api/TEST`)
    const aaa = await aa.json();
    let b = aaa.length
    let bb = b + 1
    localStorage.setItem("TestIdRef", bb)
    const xx = await fetch(`api/Question`)
    const xxx = await xx.json();
    let y = xxx.length

    let yy = y + 1
    Questionnumbre = yy
    localStorage.setItem("QuestionIdRef", yy)


}






let testdatavalid = 0

async function SaveTest() {
    let Catch = 0

    const t1 = document.getElementById("in1").value

    const y1 = localStorage.getItem("TestName")
    if (y1 != "") {
        localStorage.removeItem("TestName")

    }

    if (t1 == "") {
        Catch = 1
    }
    const t2 = document.getElementById("in2").value

    const y2 = localStorage.getItem("TestDate")

    if (y2 != "") {
        localStorage.removeItem("TestDate")

    }
    if (t2 == "") {
        Catch = 1
    }
    let t33 = 0
    let t31=0

     t33 =parseInt( document.getElementById("in33").value)
     t31 =parseInt( document.getElementById("in3").value)
    const t3 = `${t31}:${t33}`
    const y3 = localStorage.getItem("TotalTime")
    if (y3 != "") {
        localStorage.removeItem("TotalTime")

    }
    if (t3 == "") {
        Catch = 1
    }

    const t4 = document.getElementById("in4").value

    const y4 = localStorage.getItem("StartTime")
    if (y4 != "") {
        localStorage.removeItem("StartTime")

    }
    if (t4 == "") {
        Catch = 1
    }

    const t5 = document.getElementById("in5").value
    const y5 = localStorage.getItem("Random")
    if (y5 != "") {
        localStorage.removeItem("Random")

    }

    if (t5 == "") {
        Catch = 1
    }

    const yf = `api/Test/${t1},0`

    const response = await fetch(yf)
    if (response.status == 200) {

        const repsjson = await response.json()


        if (repsjson.testName == "empty") {
            if (Catch == 0) {
                localStorage.setItem("TestName", t1)
                localStorage.setItem("TestDate", t2)
                localStorage.setItem("TotalTime", t3)
                localStorage.setItem("StartTime", t4)
                localStorage.setItem("Random", t5)
                //localStorage.getItem("TestName")
                //localStorage.setItem("TestDate", t2)
                //localStorage.setItem("TotalTime", t3)
                //localStorage.setItem("StartTime", t4)
                //localStorage.setItem("Random", t5)
                document.getElementById("in1").value = null
                document.getElementById("in2").value = null
                document.getElementById("in3").value = null
                document.getElementById("in4").value = null
                document.getElementById("in5").value = null
                testdatavalid = 1

                const div = document.getElementById("divid")
                //  div.style.backgroundColor="green"
                div.replaceChildren()
                div.style.height = "500px"
                div.style.width = "500px"
                div.style.position = "absulote"
                div.style.marginRight = "500px"
                div.style.backgroundColor = "azure"
                const h2 = document.createElement("h2")
                h2.textContent = "add question"

                div.appendChild(h2)

                const uu = document.createElement("div")
                uu.style.marginLeft = "20px"
                uu.style.width = "150px"
                uu.style.height = "20px"
                uu.style.marginTop = "20px"
                //  uu.style.backgroundColor = "red"
                uu.textContent = "picture question "
                uu.style.fontSize = "20px"
                uu.style.cursor = "pointer"
                uu.id = "uu"
                /*  uu.style.justifyContent="center"*/
                div.appendChild(uu)
                const uur = document.createElement("div")
                uur.style.marginLeft = "170px"
                uur.style.width = "150px"
                uur.style.height = "20px"
                uur.style.marginTop = "-20px"
                uur.style.fontSize = "20px"
                uur.id = "uur"
                //  uur.style.backgroundClor = "blu"
                uur.textContent = "text question"
                uur.style.cursor = "pointer"
                /*  urr.style.justifyContent="center"*/
                div.appendChild(uur)
                const btn1 = document.createElement("div")
                btn1.textContent = "text question"
                //  div.appendChild(btn1)
                btn1.style.marginTop = "20px"
                const btn2 = document.createElement("ul")
                btn2.textContent = "picture question"
                //  div.appendChild(btn2)
                uu.addEventListener("click", function () { pic() })
                uur.addEventListener("click", function () { que() })
                //   btn2.style.marginLeft = "20px"
                //   btn2.style.marginTop = "20px"

                //   h2.style.fontSize = "30px"
                //   btn1.style.backgroundColor = "azure"
                //   btn2.style.backgroundColor = "azure"

                //   const pp = document.createElement("ul")
                ///*   pp.textContent="or"*/
                //   const divbu = document.createElement("div")
                //   divbu.style.width = "200px"
                //   divbu.style.position="absolute"
                //divbu.style.marginTop="300px"
                /*div.appendChild(btn1)*/
                /* pp.style.width="300px"*/

                /*  divbu.appendChild(pp)*/
                /*div.appendChild(pp)*/
                //if (p == 2) {
                //    const pic = document.createElement("input")
                //    pic.type = "file"
                //    pic.value = ""
                //    pic.id = "files"
                //    pic.accept = "img/jpg, img/jpeg"
                //    const leb = document.createElement("label")
                //    leb.for = "files"
                //    div.appendChild(pic)
                //}
                //if (p == 1) {
                //    const in1 = document.createElement("input")
                //    in1.type = "text"
                //    in1.textContent = "enter question"
                //    const p1 = document.createElement("p")
                //    p1.textContent = "please enter a quetion"
                //    div.appendChild(p1)
                //    div.appendChild(in1)
                //}

                //if (p != 0) {
                //    for (let i = 0; i < 4; i++) {
                //        const p2 = document.createElement("p")
                //        p2.textContent = "please enter an answer"
                //        const in3 = document.createElement("input")
                //        in3.type = "text"
                //        in3.id = `id${i}`
                //        in3.textContent = "enter a question"
                //        div.appendChild(p2)
                //        div.appendChild(in3)

                //    }
                //    const p3 = document.createElement("p")
                //    p3.textContent = "choose the right answer"
                //    const in4 = document.createElement("input")
                //    in4.type = "number"
                //    in4.max = "4"
                //    in4.min = "1"
                //    in4.textContent = "choose the right answer"
                //    div.appendChild(p3)
                //    div.appendChild(in4)
                //}

            }
            else { alert("one or more empty box") }
        }
        else {
            alert(" test name already exist")
            return
        }
    }
    else {
        alert(` error ${response.status}`)
        return
    }
}
function pic() {
   
    const div = document.getElementById("divid")

    const h1 = document.getElementById("pdiv2")

    if (on1 == false) {

        if (h1 != null) {
            h1.remove()
        }

        //const uu = document.getElementById("uu")
        //const uur = document.getElementById("uur")
        //uu.remove()
        //uur.remove()

        const pdiv = document.createElement("div")

        pdiv.id = "pdiv1"
        pdiv.style.marginTop = "30px"
        const pic = document.createElement("input")
        pic.type = "file"
        pic.value = ""
        pic.id = "files"
        pic.accept = "img/jpg, img/jpeg"
        const leb = document.createElement("LABEL")
        leb.setAttribute("for","files")
    
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
            p2.textContent = "please enter an answer"
            const in3 = document.createElement("input")
            in3.type = "text"
            in3.id = `ina${i}`
            in3.textContent = "enter a question"
            pdiv.appendChild(p2)
            pdiv.appendChild(in3)

        }
        const p3 = document.createElement("p")
        p3.textContent = "choose the right answer"
        const in4 = document.createElement("input")
        in4.type = "number"
        in4.max = "4"
        in4.min = "1"
        in4.id="index"
        in4.textContent = "choose the right answer"
        pdiv.appendChild(p3)
        pdiv.appendChild(in4)
        const btns = document.createElement("button")
        btns.id = "btns"
        btns.innerHTML = "save question"
        let r=1
        btns.addEventListener("click", function () {gg(r) })
        const btnt = document.createElement("button")
        btnt.id = "btnt"
        btnt.innerHTML = "save Test"
        btnt.addEventListener("click", function () { ff() })

        const br = document.createElement("br")
        const uld = document.createElement("ul")
        
      /*  uld.appendChild(br)*/
        uld.appendChild(br)
       uld.appendChild(btns)
        uld.appendChild(br.cloneNode())
        uld.appendChild(br)
       uld.appendChild(btnt)
       pdiv.appendChild(uld)
        div.appendChild(pdiv)

        on2 = false
        on1 = true
    }
}

function que() {
    const div = document.getElementById("divid")

    const h = document.getElementById("pdiv1")

    if (on2 == false) {

        if (h != null) {
            h.remove()
        }
        const pdiv = document.createElement("div")

        pdiv.id = "pdiv2"
        pdiv.style.marginTop = "30px"
        const in1 = document.createElement("textarea")
        in1.type = "text"
        in1.id = "in1"
        in1.value=""
        in1.textContent = "enter question"
        const p1 = document.createElement("p")
        p1.textContent = "please enter a quetion"
        pdiv.appendChild(p1)
        pdiv.appendChild(in1)
        for (let i = 0; i < 4; i++) {
            const p2 = document.createElement("p")
            p2.textContent = "please enter an answer"
            const in3 = document.createElement("input")
            in3.type = "text"
            in3.value=""
            in3.id = `ina${i}`
            in3.textContent = "enter a question"
            pdiv.appendChild(p2)
            pdiv.appendChild(in3)

        }
        const p3 = document.createElement("p")
        p3.textContent = "choose the right answer"
        const in4 = document.createElement("input")
        in4.type = "number"
        in4.max = "4"
        in4.min = "1"
        in4.id = "index"
        in4.value=""
        in4.textContent = "choose the right answer"
        pdiv.appendChild(p3)
        pdiv.appendChild(in4)
        const btns = document.createElement("button")
        btns.id = "btns"
        btns.innerHTML = "save question"
        let rr=0
        btns.addEventListener("click", function () {gg(rr) })
        const btnt = document.createElement("button")
        btnt.id = "btnt"
        btnt.innerHTML = "save Test"
        btnt.addEventListener("click", function () {ff() })
        const br = document.createElement("br")
        const uld = document.createElement("ul")

        /*  uld.appendChild(br)*/
        uld.appendChild(br)
        uld.appendChild(btns)
        uld.appendChild(br.cloneNode())
        uld.appendChild(br)
        uld.appendChild(btnt)
        pdiv.appendChild(uld)
        div.appendChild(pdiv)
        

        on2 = true
        on1=false
    }
}

function clear1() {

    const h = document.getElementById("pdiv1")
    
    if (h != null) {
        h.remove()


        on1 = false
    }

    
        

}
function clear2() {

   
    const h1 = document.getElementById("pdiv2")
   
    if (h1 != null) {
        h1.remove()

        on2=false
    }
  
 
    
}


//const con=document.getElementById("files").addEventListener("change", (e) => {

//    const files = e.target.files


//    if (window.File && window.FileReader && window.Blob) {
//        const pic = new FileReader()
//        pic.readAsDataURL(files[0])
//        pic.addEventListener("load", function (event) {
//            const ff = event.target
//            f = ff.result


//        }

//        )
//    }
//})
//document.querySelector("#files").addEventListener("change", (e) => {

//    const files = e.target.files


//    if (window.File && window.FileReader && window.Blob) {
//        const pic = new FileReader()
//        pic.readAsDataURL(files[0])
//        pic.addEventListener("load", function (event) {
//          const   ff = event.target
//           f=ff.result
            

//        }

//        )
//    }
//})


function gg(a) {

    if (testdatavalid == 1) {
        let q1 = localStorage.getItem("TestIdRef")
        let q2 = localStorage.getItem("QuestionIdRef")
        let questionnull = 0

        const rr = f
        let r1=""
        if (a == 0) {
             r1 = document.getElementById("in1").value
        }
       

        const r2 = document.getElementById("ina0").value


        const r3 = document.getElementById("ina1").value

        const r4 = document.getElementById("ina2").value

        const r5 = document.getElementById("ina3").value

        
        if ((r1 == "" && rr=="") || (r2 == "" && r3 != "") || (r3 == "" && r4 != "") || (r4 == "" && r5 != "")) { alert("you must enter data corectly") }
        else {
            const r6 = document.getElementById("index").value
            if (r6 != "") {
               /* if (rr != "") {*/ localStorage.setItem(`picture${q2}`, rr) /*}*/
               
                localStorage.setItem(`question${q2}`, r1)
                localStorage.setItem(`answer1${q2}`, r2)
                localStorage.setItem(`answer2${q2}`, r3)
                localStorage.setItem(`answer3${q2}`, r4)
                localStorage.setItem(`answer4${q2}`, r5)
                localStorage.setItem(`teru-false${q2}`, r6)
                let q2q = parseInt(q2)

                q2q = q2q + 1
                countquestion = countquestion + 1
                localStorage.setItem('QuestionIdRef', q2q)
                //if (rr != "") {
                //    document.getElementById("files").value = ""
                //}
                f=""
                if (a == 0) {
                    document.getElementById("in1").value = ""
                }
                document.getElementById("ina0").value = ""
                document.getElementById("ina1").value = ""
                document.getElementById("ina2").value = ""
                document.getElementById("ina3").value = ""
            }
            else { alert("no corect answer has been choosen") }
        }


    }








}


function looktest() {

    if (z == 0) {
        const c = document.getElementById("demo5")

        let input1 = document.createElement("input")

        input1.id = "in1"

        input1.placeholder = "enter test name"

        c.appendChild(input1)

        const x = document.getElementById("in1")

        x.addEventListener("dblclick", get1)





        z += 1;
    }
}


let status1 = 0
let countp = 0
async function ff() {
    if (testdatavalid == 1&&countquestion>0) {
        //let z = document.getElementById("in1").value
        let z = localStorage.getItem("TestName")
        //const a = z.split(" ")
        //const aa = a.length
        //let p = a[0]
        //for (let k = 1; k < aa; k++) {
        //    if (a[k] != null) { p += "%20" + a[k] }
        //    if (a[k] = null) {
        //        break
        //    }
        //}
        // document.getElementById("in1").value = null
        // let z1 = document.getElementById("in2").value
        let z1 = localStorage.getItem("TestDate")
        //const a1 = z1.split(" ")
        //const aa1 = a1.length
        //let p1 = a1[0]
        //for (let k = 1; k < aa1; k++) {
        //    if (a1[k] != null) { p1 += "%20" + a1[k] }
        //    if (a1[k] = null) {
        //        break
        //    }
        //}
        // document.getElementById("in2").value = null
        // let z2 = document.getElementById("in3").value
        let z2 = localStorage.getItem("StartTime")
        //const a2 = z2.split(" ")
        //const aa2 = a2.length
        //let p2 = a2[0]
        //for (let k = 1; k < aa2; k++) {
        //    if (a2[k] != null) { p2 += "%20" + a2[k] }
        //    if (a2[k] = null) {
        //        break
        //    }
        //}
        //document.getElementById("in3").value = null
        //let z3 = parseInt(document.getElementById("in4").value)
        // let z4 = parseInt(document.getElementById("in5").value)
        let z3 = localStorage.getItem("TotalTime")
        let z4 = localStorage.getItem("Random")
        if (z4 == "yes") { z4 = 1 }
        else { z4 = 0 }

        // document.getElementById("in4").value = null
        // document.getElementById("in5").value = null
        let z5 = parseInt(localStorage.getItem("TeacherIdRef"))

        const new1 = { testName: `${z}`, testDate: `${z1}`, startTime: `${z2}`, totalTime:` ${z3}`, random: z4, teacherIdRef: z5 }
        //let url = "https://localhost:7216/api/TeacherControler?" + `s=${p}&s1=${p1}&s2=${p2}&i=${z3}&i1=${z4}&i2=${z5}`
        //https://localhost:7210/api/Test?s=q%20w&s1=q&s2=q&i=1&i1=1&i2=1
        //		y1	'https://localhost:7217/api/Test?s=q%20w&s1=q&s2=q&i=1&i1=1&i2=1'	string

        //  let y1 = `https://localhost:7253/api/Test?s=${p}&s1=${p1}&s2=${p2}&i=${z3}&i1=${z4}&i2=${z5}`
        // Default options are marked with *
        const y1 = "https://localhost:7077/api/Test"
        const y2 = 'https://localhost:7151/api/Test'
        const response = await fetch(y2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(new1) })

        //  fetch(y1, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(new1) }).then(response => {console.log(response.status) })
        //  console.log(response.status)
        status1 = response.status
        if (status1 != 200) {
            alert(`error ${status1} - not able to load test info`)
            const teachername=localStorage.getItem("TeacherName")
            const quetionid = localStorage.getItem("QuestionIdRef")
            const teacherid = localStorage.getItem("TeacherIdRef")
            const testid = localStorage.getItem("TestIdRef")
            localStorage.clear()
            localStorage.setItem("TeacherName", teachername)
            localStorage.setItem("QuestionIdRef", quetionid)
            localStorage.setItem("TeacherIdRef", teacherid)
            localStorage.setItem("TestIdRef",testid)

            return
        }
        if (status1 == 200) {

            // alert("yes")
            ff3()
            countp += 1
        }
        // alert(status1)
        // const v1 = await response.json(); // parses JSON response into native JavaScript objects

        localStorage.removeItem("TestName")
        localStorage.removeItem("TestDate")
        localStorage.removeItem("TotalTime")
        localStorage.removeItem("StartTime")
        localStorage.removeItem("Random")

    }
    else { alert(" no test data has been entered") }


}
let gg4=0
async function ff3() {

    if (testdatavalid == 1) {
        let d = Questionnumbre + countquestion
        for (let i = Questionnumbre; i < d; i++) {

            const p1 = localStorage.getItem(`picture${i}`)
           
            const q11 = localStorage.getItem(`question${i}`)
           
    
            let o = parseInt(localStorage.getItem("TestIdRef"))
            const new11 = { testIdRef: o, questions: `${q11}`, picture:`${p1}` }
            const y11 = 'https://localhost:7151/api/Question'
            // const y11 = "https://localhost:7151/api/Test"
            const response = await fetch(y11, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(new11) })
            if (response.status == 200) {

                // alert ("yes q")
                localStorage.removeItem(`question${i}`)
                localStorage.removeItem(`picture${i}`)
                gg4 = 1
            }
            else {
                alert(` error ${response.status}- problem with loading quetion info`)
                const teachername = localStorage.getItem("TeacherName")
                const quetionid = localStorage.getItem("QuestionIdRef")
                const teacherid = localStorage.getItem("TeacherIdRef")
                const testid = localStorage.getItem("TestIdRef")
                localStorage.clear()
                localStorage.setItem("TeacherName", teachername)
                localStorage.setItem("QuestionIdRef", quetionid)
                localStorage.setItem("TeacherIdRef", teacherid)
                localStorage.setItem("TestIdRef", testid)
            return}

        }
        let testCount = parseInt(localStorage.getItem("TestIdRef"))
        testCount = testCount + 1
        localStorage.setItem("TestIdRef", testCount)
        if (gg4 == 1) {
            countp += 1
            ff4()
            
        }
    }

}
async function ff4() {
    //if (testdatavalid == 1)
    //{

    let d = Questionnumbre + countquestion
    let co = 0

    for (let h = Questionnumbre; h < d; h++) {
        const wr1 = parseInt(localStorage.getItem(`teru-false${h}`))

        for (let i = 1; i < 5; i++) {
            let wr = 0
            const q1 = localStorage.getItem(`answer${i}${h}`)

            if (q1 != "") {
               
                if (wr1 == i) { wr = 1 }

                let o = h;
                const new11 = { answer1: `${q1}`, questionIdRef: o, rightWorng: wr }

                const y11 = 'https://localhost:7151/api/Answer'

                const response = await fetch(y11, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(new11) })

                if (response.status == 200) {

                   

                }
                else {
                    alert(` error ${response.status}-problem loading answers info`)
                    const teachername = localStorage.getItem("TeacherName")
                    const quetionid = localStorage.getItem("QuestionIdRef")
                    const teacherid = localStorage.getItem("TeacherIdRef")
                    const testid = localStorage.getItem("TestIdRef")
                    localStorage.clear()
                    localStorage.setItem("TeacherName", teachername)
                    localStorage.setItem("QuestionIdRef", quetionid)
                    localStorage.setItem("TeacherIdRef", teacherid)
                    localStorage.setItem("TestIdRef", testid)
                    return
                }


            }



        }

        for (let s = 1; s < 5; s++) {

            localStorage.removeItem(`answer${s}${h}`)


        }
        localStorage.removeItem(`teru-false${h}`)

    }
    if (co == 0) {
        alert("test load succfuly")
 location.reload()
        
    }
    //if (response.status == 200 && countp==2) {

    //    alert("test load succesfuly")
    //}
    /* }*/
}