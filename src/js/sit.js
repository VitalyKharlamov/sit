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

        // Open selected tab from menu
        if ($(this).attr('data-tab')) {
            var tab_id = $(this).attr('data-tab');
            if ($(this).attr('data-type') === "helps") {
                manageTabs(tab_id);
            } else  {
                manageVerticalTabs(tab_id);
            }
        }

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

function manageTabs(tab_id) {
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $('.tab-image').removeClass('current');
    $('#navbar-main li').removeClass('active');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
    $("#"+tab_id + "_image").addClass('current');
    $("#"+tab_id + "_tab").addClass('current');
    $("#"+tab_id + "_nav").addClass('active');
}

function manageVerticalTabs(tab_id) {
    $('ul.vertical_tabs li').removeClass('current');
    $('.vertical_tab-content').removeClass('current');

    $("#v-"+tab_id).addClass('current');
    $("#"+tab_id).addClass('current');
}

$(document).ready(function(){

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
        var tab_img_id = $(this).attr('content');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $('.tab-image').removeClass('current');
        // $('#navbar-main li').removeClass('active');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
        $("#"+tab_img_id).addClass('current');
        // $("#"+tab_id + "_nav").addClass('active');
    })

});

$(document).ready(function(){

    $('ul.vertical_tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.vertical_tabs li').removeClass('current');
        $('.vertical_tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

});

//Carousel script

$('.carousel[data-type="multi"] .item').each(function () {
    var itemToClone = $(this);

    for (var i = 1; i < 2; i++) {
        itemToClone = itemToClone.next();

        // wrap around if at end of item collection
        if (!itemToClone.length) {
            itemToClone = $(this).siblings(':first');
        }

        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
            .addClass("cloneditem-" + (i))
            .appendTo($(this));
    }
});