document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        console.log('Left was pressed');

        var element = document.getElementById('racingCar')
        var style = window.getComputedStyle(element)
        let currentPosition = Number(style.getPropertyValue('padding-left').replace("px", ""));

        console.log(currentPosition);
        let newPosition = "";
        if (currentPosition != 400) {
            newPosition = currentPosition - 100;
        }
        document.getElementById("racingCar").style.paddingLeft = newPosition + "px";
    }
    else if (event.keyCode == 39) {
        console.log('Right was pressed');

        var element = document.getElementById('racingCar')
        var style = window.getComputedStyle(element)
        let currentPosition = Number(style.getPropertyValue('padding-left').replace("px", ""));

        console.log(currentPosition);
        let newPosition = "";
        if (currentPosition != 800) {
            newPosition = currentPosition + 100;
        }
        document.getElementById("racingCar").style.paddingLeft = newPosition + "px";

    }

    else if (event.keyCode == 40) {
        console.log('Down was pressed');

        var element = document.getElementById('racingCar')
        var style = window.getComputedStyle(element)
        let currentPosition = Number(style.getPropertyValue('margin-top').replace("px", ""));

        console.log(currentPosition);
        let newPosition = "";

        if (currentPosition != 480) {
            newPosition = currentPosition + 40;
        }
        document.getElementById("racingCar").style.marginTop = newPosition + "px";

    }

    else if (event.keyCode == 38) {
        console.log('Up was pressed');

        var element = document.getElementById('racingCar')
        var style = window.getComputedStyle(element)
        let currentPosition = Number(style.getPropertyValue('margin-top').replace("px", ""));

        console.log(currentPosition);
        let newPosition = "";
        if (currentPosition != 0) {
            newPosition = currentPosition - 40;
        }
        document.getElementById("racingCar").style.marginTop = newPosition + "px";

    }


});

function moveBumps() {
    //16, 116, 216, 315, 415

    console.log('Cones moved!');

    var element = document.getElementById('bumps');
    var style = window.getComputedStyle(element)
    let currentPosition = Number(style.getPropertyValue('margin-top').replace("px", ""));

    console.log(currentPosition);
    let newPosition = "";

    if (currentPosition != 480) {
        newPosition = currentPosition + 40;
    }
    document.getElementById("bumps").style.marginTop = newPosition + "px";

}

setInterval(() => { moveBumps() }, 1000);