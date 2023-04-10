var students = []

if (JSON.parse(localStorage.getItem("students") != null)) {
    $(document).ready(() => {
        students = JSON.parse(localStorage.getItem("students"))
        renderStudentsTable()
    })
}

function submitStudent() {
    let prename = $("#prenameStudent").val()
    let lastname = $("#lastnameStudent").val()
    let id = $("#idStudent").val()
    let numId = parseInt(id)
    let studentExists = false

    for (let i = 0; i < students.length; i++) {
        if (numId == students[i].id) {
            studentExists = true
        }
    }

    if (prename == "" | lastname == "" | id == "") {
        alert("Bitte Felder vollständig ausfüllen")
    } else if (studentExists == true) {
        alert("Diese ID ist bereits vorhanden")
    }
    else {
        let newStudent = new Student(prename, lastname, numId)
        students.push(newStudent)
        console.log("Student " + prename + " " + lastname + " mit ID: " + numId + " hinzugefügt")
        renderStudentsTable()
    }
}

function renderStudentsTable() {

    var table = document.getElementById("tbody")
    $("tr:gt(0)").remove()

    for (let i = 0; i < students.length; i++) {
        var row = table.insertRow()
        row.insertCell(0).innerText = students[i].prename
        row.insertCell(1).innerText = students[i].lastname
        row.insertCell(2).innerText = students[i].id
    }

    $("#prenameStudent").val("")
    $("#lastnameStudent").val("")
    $("#idStudent").val("")

    localStorage.setItem("students", JSON.stringify(students))
}

class Student {
    constructor(prename, lastname, id) {
        this.prename = prename
        this.lastname = lastname
        this.id = id
    }
}