/**
 * Created by vitaly on 9/22/16.
 */
function sendmail() {
    var KEY_EMAIL = "email=";
    var KEY_MESSAGE = "&message=";
    var e_mail = document.getElementById("e-mail").value;
    var message = document.getElementById("messages").value;
    //var result = "http://127.0.0.1/cgi/mail.py?email=test@test.com&message=Message%20is%20are%20good!&send_to=heavyvetal88@mail.ru";
    var result = "http://dev.keysib.ru/cgi/mail.py?";
    result += KEY_EMAIL + e_mail + KEY_MESSAGE + message;
    sendMessage(result);
}

function eventEnquiry() {
    var KEY_EMAIL = "email=";
    var KEY_MESSAGE = "&message=";
    var KEY_NOTES = "&notes=";
    var KEY_IS_NOTES = "&isNotes=";
    var e_mail = document.getElementById("mail").value;
    var message = document.getElementById("school_name").value;
    var notes = document.getElementById("additional_notes").value;
    var isNotes = true;
    //var result = "http://127.0.0.1/cgi/mail.py?email=test@test.com&message=Message%20is%20are%20good!&send_to=heavyvetal88@mail.ru";
    var result = "http://dev.keysib.ru/cgi/mail.py?";
    result += KEY_EMAIL + e_mail + KEY_MESSAGE + message + KEY_NOTES + notes + KEY_IS_NOTES + isNotes;
    sendMessage(result);
}

function sendMessage(getUrl) {

    $.ajax({
        url: getUrl,
        type: 'GET',
        success: function () {
            console.log('Success!');
            alert ('thank_you');
            //window.location.href = 'index.html';
        },
        error: function () {
            console.log('Uh Oh');
        }
    });
}
