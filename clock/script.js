var redbtn = document.getElementById('redbtn');
var bluebtn = document.getElementById('bluebtn');
var blackbtn = document.getElementById('blackbtn');
var purplebtn = document.getElementById('purplebtn');
var image = document.getElementById('watchImg');
var time = document.getElementById('time');
var timebtn = document.getElementById('timebtn');
var heartrate = document.getElementById('heartRate');
var heartImage = document.getElementById('heartImage');
var heartBtn = document.getElementById('heartbtn');


redbtn.addEventListener('click', function () {
    console.log('Red button clicke')
    image.src = 'orange.png';
});

bluebtn.addEventListener('click', function () {
    console.log('blue button clicke')
    image.src = 'blue.png';
});

blackbtn.addEventListener('click', function () {
    console.log('black button clicke')
    image.src = 'black.png';
});

purplebtn.addEventListener('click', function () {
    console.log('purple button clicke')
    image.src = 'purple.png';
});

//setInterval(showtime,1000);
setInterval(function () {
    var t = new Date();
    time.innerHTML = t.toLocaleTimeString();
}, 1000);

timebtn.addEventListener('click', function () {

    time.style.display = 'block';
    heartrate.style.display = 'none';
    heartImage.style.display = 'none';

    setInterval(function () {
        var t = new Date();
        time.innerHTML = t.toLocaleTimeString();
    }, 1000);

});


heartBtn.addEventListener('click', function () {
    time.style.display = 'none';
    heartrate.style.display = 'block';
    heartImage.style.display = 'block';
});