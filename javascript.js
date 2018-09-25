var i = 0;
var txt1 = '  Nature - Animals, plants and sea are some of the ubiquos elements present in this set of photos. ';
var txt2 = ' CITY - Bridges, cars, buildings are common among this specific album';
var txt3 = 'PEOPLE - Photos captured in particular positions and unique scenarious. ';
var speed = 100;

function typeWriter() {
    if (i < txt3.length) {
        document.getElementById("demo1").innerHTML += txt1.charAt(i);
        document.getElementById("demo2").innerHTML += txt2.charAt(i);
        document.getElementById("demo3").innerHTML += txt3.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();