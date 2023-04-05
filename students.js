function submitStudent() {
    let prename = $("#prenameStudent").val()
    let lastname = $("#lastnameStudent").val()
    let strId = $("#idStudent").val()
    let numId = parseInt(strId)

    if (prename == "" | lastname == "" | strId == "") {
        alert("Bitte Felder vollständig ausfüllen")
    }

    console.log("Vorname: " + prename + " Nachname: " + lastname + " ID: " + numId)
    console.log(numId + numId)
}