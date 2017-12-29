$(document).ready(function(){
    $('#send-email').attr('disabled',true);

    $('#messages ,#e-mail').keyup(function(){

    var email = $('#e-mail').val();
    var message = $('#messages').val();

    if (email.length != 0 && message.length != 0) {
        $('#send-email').attr('disabled', false);
    } else {
        $('#send-email').attr('disabled', true);
    }
    })
});


