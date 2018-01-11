/**
 * Created by vitaly on 07.12.17.
 */

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
    var state = "active";
	if(window.matchMedia('(max-width: 768px)').matches) {
		// change functionality for smaller screens
		state = "active";
	} else {
		state = "current";
	}
    $('ul.tabs li').removeClass(state);
    $('.tab-content').removeClass(state);
    $('.tab-image').removeClass(state);
    $('#navbar-main li').removeClass('active');

    $(this).addClass(state);
    $("#"+tab_id).addClass(state);
    $("#"+tab_id + "_image").addClass(state);
    $("#"+tab_id + "_tab").addClass(state);
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

// Show popup with image
// For adding image dynamically set attribute content with image link for a.show_img_popup
$(document).ready(function(){
    $('a.show_img_popup').click(function(){
        var image = $(this).attr("content");
        $('#popupImage').attr("src",image);
        $('#modal_with_img').modal('show');

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

// HIDE COLLAPSED MENU
$('.close_menu a').click(
    function () {
        $('#navbar-main').removeClass('in');
    }
);

$('.close-sandwich a').on('click', function () {
	$('#navbar-main').removeClass('in');
	$a = $($(this).attr('href'));
	// $('html,body').animate({ scrollTop: $a.offset().top - 50}, 500);
	return false;
});

$(".dropdown-menu a").click(function() {
	$(this).closest(".dropdown-menu").prev().dropdown("toggle");
});

$(document).ready(function(){
    showHowItHelpsCarousel();
});

// Add class item to how it helps section for showing carousel on mobile instead of tabs
// remove class item for middle size screens or bigger
function showHowItHelpsCarousel() {
    if(window.matchMedia('(max-width: 768px)').matches) {
        // change functionality for smaller screens
        $('.description_tabs-content').addClass("item");
        $('.description_tabs-content:first-child').addClass("active");
    } else {
        $('.description_tabs-content').removeClass("item");
        $('.description_tabs-content').removeClass("active");
    }
}