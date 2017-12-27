/**
 * Created by vitaly on 07.12.17.
 */
$("#contactForm").submit(function(event){
	// cancels the form submission
	event.preventDefault();
	submitForm();
	console.log("submit!")
});

function submitForm(){
	console.log("submitForm")
	// Initiate Variables With Form Content
	var name = $("#name").val();
	var email = $("#email").val();
	var message = $("#message").val();

	$.ajax({
		type: "POST",
		url: "php/form-process.php",
		data: "name=" + name + "&email=" + email + "&message=" + message,
		success : function(text){
			console.log(text);
			if (text){
				formSuccess();
				console.log("success")
			} else {
				console.log("jgfjhuukyguk");
			}
		}
	});
}
function formSuccess(){
	$( "#msgSubmit" ).removeClass( "hidden" );
}

// Add smooth scrolling on all links inside the navbar
$(document).ready(function() {
    $('a.smooth_scroll[href*=\"#\"]:not([href=\"#\"])').click(function () {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 800);
                return false;
            }
        }// End if

    });
});
