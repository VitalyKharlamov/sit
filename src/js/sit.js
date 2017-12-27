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

$(document).ready(function() {
			$("a.first").fancybox();
			$("a.two").fancybox();
			$("a.video").fancybox({"frameWidth": 520,"frameHeight": 400});
			$("a.content").fancybox({"frameWidth": 600,"frameHeight": 300});
		});
