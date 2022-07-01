var countDownDate = new Date ("July 17, 2022, 8:00:00").getTime();
var cont = document.getElementById("cc");
var k = 0;
var y = setInterval(function(){
    
    cont.style.backgroundImage = "linear-gradient(" + k + "deg, " + "#36096d 0%, #37d5d6 74%)";
    k += 1;
    if (k >= 360) {
        k = 0;
    }
},60);


var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "Days " + hours + "Hours " + minutes + "Minutes " + seconds + "Seconds ";
    if (distance < 0) {
        document.getElementById.innerHTML = "Expired!"
    }
},1000);