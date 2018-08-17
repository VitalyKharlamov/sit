var container = document.getElementById('counter');
var text = $(".counter").attr("data-value");


$(document).ready(function () {
        var prevItem = 0;
        for (var i = 0; i < text.length; i++) {
            console.log(text.charAt(i));
            var newNumber = document.createElement('div');
            var current = text.charAt(i);
            newNumber.innerHTML += current;
            if (current.toString() !== ",") {
                newNumber.classList.add('count');
            }
            container.appendChild(newNumber);
        }
        runCounter()
    }
);

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
