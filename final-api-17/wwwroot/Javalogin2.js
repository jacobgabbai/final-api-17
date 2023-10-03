
window.addEventListener("load", clear)
const divm = document.getElementById("dm1")
function clear() { localStorage.clear() }
let t = true
let count = 0

//document.getElementById("d1").addEventListener("click", function () { t ? signt() : clear1();t=!t })
document.getElementById("d2").addEventListener("click", function () { t ? logt() : clear2(); t = !t })
function signt() {
    if (t == true) {
       
        // divm.replaceChildren()
        const br = document.createElement("br")
        const form1 = document.createElement("form")
        //  form1.setAttribute("method", "post");
        //  form1.setAttribute("action", "/action_page.php");
        //  form1.setAttribute("onsubmit", "log()")
        //  form1.id = "formid1"
        const ul = document.createElement("ul")
        const input1 = document.createElement("input")
        input1.type = "text"
        input1.value = ""
        input1.id = "inp1"
        input1.placeholder = "enter your name"
        const input2 = document.createElement("input")
        input2.type = "email"
        input2.value = ""
        input2.id = "inp2"
        input2.placeholder = "enter your mail"
        const btn = document.createElement("button")
        btn.addEventListener("click", function () { Log() })

        btn.id = "btn1"
        btn.innerHTML = "submit"

        // 


        const p = document.createElement("p")
        p.textContent = ""
        ul.appendChild(input1)
        ul.appendChild(br.cloneNode())
        ul.appendChild(br.cloneNode())
        //ul.appendChild(p)
        ul.appendChild(input2)
        //ul.appendChild(p)
        //ul.appendChild(p)
        ul.appendChild(br.cloneNode())
        ul.appendChild(br.cloneNode())

        divm.appendChild(ul)
        divm.appendChild(btn)
        let yy=0
       
        t=false
    }
    else {

        clear1()
    }
    //  divm.appendChild(form1)
   // 
   
  
}


function logt() {
    const divm = document.getElementById("dm1")
    divm.replaceChildren()
    const br = document.createElement("br")
    //const form1 = document.createElement("FORM")
    //form1.setAttribute("method", "post");
    //form1.setAttribute("action", "submit.php");

    //form1.id = "formid11"
    const input1 = document.createElement("input")
    input1.type = "text"
    input1.value = ""
    input1.id = "inp11"
    input1.placeholder = "enter your name"
    const input2 = document.createElement("input")
    input2.type = "email"
    input2.value = ""
    input2.id = "inp22"
    input2.placeholder = "enter your mail"
    const input3 = document.createElement("input")
    input3.type = "tel"
    input3.value = ""
    input3.id = "inp33"
    input3.pattern = "[0-9]{7}"
    input3.placeholder = "enter your phone"
    const leb = document.createElement("label")
    leb.setAttribute("for", "inp331")
    const select = document.createElement("select")
    select.id="select1"
    const option2 = document.createElement("option")
    option2.value = "050"
    option2.innerHTML="050"
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
    const input5 = document.createElement("input")
    input5.type = "text"
    input5.value = ""
    input5.id = "inp55"
    input5.placeholder = "enter your Code"
    const btn = document.createElement("button")
    btn.addEventListener("click", function () {valid() })
    btn.type = "submit"
    btn.innerHTML = "Submit"
    const p = document.createElement("spacer")
    p.textContent=" "
    
    divm.appendChild(input1)
    divm.appendChild(br.cloneNode())
    divm.appendChild(br.cloneNode())
    divm.appendChild(input4)
    divm.appendChild(br.cloneNode())
    divm.appendChild(br.cloneNode())
    divm.appendChild(input2)
    divm.appendChild(br.cloneNode())
    divm.appendChild(br.cloneNode())
    divm.appendChild(select)
    divm.appendChild(p)
    divm.appendChild(input3)
    divm.appendChild(br.cloneNode())
    divm.appendChild(br.cloneNode())
    divm.appendChild(input5)
    divm.appendChild(br.cloneNode())
    divm.appendChild(br.cloneNode())
    divm.appendChild(btn)
    
    

}


async function valid() {

    const name = document.getElementById("inp11").value
    if (name.length <= 20 &&name.length>0) {

        const id = document.getElementById("inp44").value
        const check = /^\d+$/
        const b = check.test(id)
        if (b && id.length == 10) {

            const email = document.getElementById("inp22").value
            regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
            const checke = regex.test(email)
            if (checke) {

                const phone1=document.getElementById("inp33").value
                const check1 = /^\d+$/
                const tr = check1.test(phone1)
                if (tr && phone1.length == 7) {
                    const sel=document.getElementById("select1").value
                    const fullphone=`${sel}${phone1}`


                    const code=document.getElementById("inp55").value
                    if (code == "123456") {

                        const js = { teacherName: `${name}`, email: `${email}`,teacherId:`${id}`,phoneN:`${fullphone}` }
                        const y ="api/TeacherControler"
                        const rep = await fetch(y, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(js) })
                        const repjson=await rep.json()
                        if (rep.status == 200) {
                            if (repjson.teacherName != "nono")
                                alert(" info load succesfuly you can sign in")

                            else {alert("your data is already showen in the system please sign in") }
                        }

                    }

                    else {alert("please enter the correcrt code") }
                }
                else {alert ("please enter phone correctly") }
                
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

function clear1() {

  //  const divc = document.getElementById("dm1")
    divm.replaceChildren()
    t=true
}
function clear2() {

  //  const divc = document.getElementById("dm1")
    divm.replaceChildren()
}


async function Log() {
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
               // document.getElementById("demo1").innerHTML = `welcom ${z}`
                localStorage.setItem("TeacherIdRef", `${bq}`)
                localStorage.setItem("TeacherName",`${l.teacherName}`)
                window.open("https://localhost:7151/TeacherManuF.html")

                break





            }

        }
        if (d == 0) {

            alert("please enter the correct info ")
        }
    }

    else {alert=`errore ${a1.status}` }
}


async function StuLog()

{

    const in1 = document.getElementById("logname11").value
    const in2 = document.getElementById("logname12").value
    const sp = in2.split("@")


    const rep = await fetch(`api/StudentControler/${sp[0]}%40${sp[1]}`)
    const v = await rep.json()
    if (rep.status == 200 && v.stuName == in1) {

        localStorage.setItem("stuName", v.stuName)
        localStorage.setItem("stuId",v.stuId)

        window.open("https://localhost:7151/StudentManu.html")
    }
    else if (rep.status == 200 && v.stuName != in1)
    {
        alert("detels dont match")


    }

    else if (rep.status != 200)

    { alert(`error ${rep.status}`) }


}