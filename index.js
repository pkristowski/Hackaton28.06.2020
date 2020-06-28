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

    //Get up-down position of all bumps
    var element = document.getElementById('bumps');
    var style = window.getComputedStyle(element)
    let currentPositionDiagonal = Number(style.getPropertyValue('margin-top').replace("px", ""));
    
    //Get left-rigth position of each bump
    var element1 = document.getElementById('bump1');
    var style1 = window.getComputedStyle(element1)
    let currentPositionHorizontal1 = Number(style1.getPropertyValue('padding-left').replace("px", ""));

    var element2 = document.getElementById('bump2');
    var style2 = window.getComputedStyle(element2)
    let currentPositionHorizontal2 = Number(style2.getPropertyValue('padding-left').replace("px", ""));

    var element3 = document.getElementById('bump3');
    var style3 = window.getComputedStyle(element3)
    let currentPositionHorizontal3 = Number(style3.getPropertyValue('padding-left').replace("px", ""));

    console.log(currentPositionHorizontal1, currentPositionHorizontal2, currentPositionHorizontal3);

    console.log(currentPositionDiagonal);
    let newPosition = "";

    if (currentPositionDiagonal <= 540) {
        newPosition = currentPositionDiagonal + 40;
    }
    else{
        newPosition = 0;
    }

    document.getElementById("bumps").style.marginTop = newPosition + "px";

}

setInterval(() => { moveBumps() }, 200);