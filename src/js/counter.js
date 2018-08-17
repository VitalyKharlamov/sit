
$(document).ready(function () {
        var eventsCounter = document.getElementById('eventsCounter');
        var schoolsCounter = document.getElementById('schoolsCounter');

        var eventsCount = $("#eventsCounter").attr("data-value");
        var schoolsCount = $("#schoolsCounter").attr("data-value");

        createCounters(eventsCounter, eventsCount);
        createCounters(schoolsCounter, schoolsCount)
        runCounter()
    }
);


function createCounters(container, count) {
    for (var i = 0; i < count.length; i++) {
        console.log(count.charAt(i));
        var current = count.charAt(i);
        var newNumber;

        if (current.toString() === ",")
            newNumber = document.createElement('span');
        else
            newNumber = document.createElement('div');

        newNumber.innerHTML += current;
        if (current.toString() !== ",") {
            newNumber.classList.add('count');
        }
        container.appendChild(newNumber);
    }
}

var prev = 0;

function runCounter() {
    $('.count').each(function (index) {
        setCounerParameters($(this), $(this).text(), index, prev);
        prev = $(this).text();
    });
}

var dur = 3000;

function setCounerParameters(element, value, index, previousValue) {
    console.log("current value is " + value);

    if (index === 0) {
        // it's a first element
        animateValue(element, 0, value, dur);
    } else {
        var turnCount = index;
        if (previousValue > value)
            turnCount++;
        var n = value;
        for (var i = 0; i < turnCount; i++) {
            n = Number(n) + Number(10);
        }
        animateValue(element, 0, n, dur);
    }
}

function animateValue(element, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : 0;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function () {
        current += increment;
        if (current > 10)
            element[0].className = 'd' + current % 10 || 0;
        else
            element[0].className = 'd' + current || 0;
        element[0].innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

//$(window).scroll(function() {
//    var hT = $('#scroll-to').offset().top,
//        hH = $('#scroll-to').outerHeight(),
//        wH = $(window).height(),
//        wS = $(this).scrollTop();
//    if (wS > (hT+hH-wH)){
//        console.log('H1 on the view!');
//    }
//});
