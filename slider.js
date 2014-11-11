var $images = document.getElementsByTagName('img'),
    $triggers = document.getElementsByClassName('triggers').item().getElementsByTagName('li'),
    $triggersArr = $triggers.item(),
    $next = document.getElementsByClassName('next').item(),
    $prev = document.getElementsByClassName('prev').item();

function restartSlider () {
    clearInterval(interval);
    interval = setInterval(slideNext, 2000);
}

function init () {
    hide($images);
    show($images[0]);
    $triggers.className = '';
    $triggers[0].className = 'active';
}
function sliderResponse(ind) {
    hide($images);
    show($images[ind]);
    removeClasses($triggers);
    $triggers[ind].className = 'active';
}
function slideNext () {
    var curTrigger =  document.getElementsByClassName('triggers').item().getElementsByClassName('active');
    var ind = indexOf($triggers, curTrigger.item());    
    ind == 4 ? ind = 0 : ind = ind + 1;
    sliderResponse(ind);
}
function removeClasses(arr) {
    for (var i = 0; i < arr.length; ++i) {
        arr[i].className = '';
    }
}
function indexOf(arr, item) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == item) {
            return i;
        }
    }
    return -1;
}
    
function hide(elem) {
    for (var i = 0; i < elem.length; ++i) {
        var item = elem[i].style.display = 'none';
    }
}
function show(elem) {
    elem.style.display = 'block';
}

$prev.addEventListener('click', function () {
    var curTrigger =  document.getElementsByClassName('triggers').item().getElementsByClassName('active');
    var ind = indexOf($triggers, curTrigger.item()); 
    ind == 0 ? ind = 4 : ind = ind - 1;
    sliderResponse(ind);
    restartSlider();
});

$next.addEventListener('click', function () {
    slideNext ();
    restartSlider ();
});

function addEventListeners () {
    for (var i = 0; i < $triggers.length; ++i) {
        $triggers[i].addEventListener('click', triggerClickHandler);
    }
}

function triggerClickHandler() {
    if (this.className != 'active') {
        var ind = indexOf($triggers, this);
        sliderResponse(ind); 
        restartSlider();
    }
}
init();
addEventListeners ();
var interval = setInterval(slideNext, 2000);
