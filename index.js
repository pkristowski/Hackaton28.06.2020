var scrollSpeed = 3;
var gameDelay = 10;

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
      //  console.log('Left was pressed');

        var element = document.getElementById('racingCar')
        var style = window.getComputedStyle(element)
        let currentPosition = Number(style.getPropertyValue('padding-left').replace("px", ""));

      //  console.log(currentPosition);
        let newPosition = "";
        if (currentPosition != 400) {
            newPosition = currentPosition - 100;
        }
        document.getElementById("racingCar").style.paddingLeft = newPosition + "px";
    }
    else if (event.keyCode == 39) {
     //   console.log('Right was pressed');

        var element = document.getElementById('racingCar')
        var style = window.getComputedStyle(element)
        let currentPosition = Number(style.getPropertyValue('padding-left').replace("px", ""));

       // console.log(currentPosition);
        let newPosition = "";
        if (currentPosition != 800) {
            newPosition = currentPosition + 100;
        }
        document.getElementById("racingCar").style.paddingLeft = newPosition + "px";

    }

    else if (event.keyCode == 40) {
     //   console.log('Down was pressed');

        var element = document.getElementById('racingCar')
        var style = window.getComputedStyle(element)
        let currentPosition = Number(style.getPropertyValue('margin-top').replace("px", ""));

      //  console.log(currentPosition);
        let newPosition = "";

        if (currentPosition != 480) {
            newPosition = currentPosition + 40;
        }
        document.getElementById("racingCar").style.marginTop = newPosition + "px";

    }

    else if (event.keyCode == 38) {
      //  console.log('Up was pressed');

        var element = document.getElementById('racingCar')
        var style = window.getComputedStyle(element)
        let currentPosition = Number(style.getPropertyValue('margin-top').replace("px", ""));

      //  console.log(currentPosition);
        let newPosition = "";
        if (currentPosition != 0) {
            newPosition = currentPosition - 40;
        }
        document.getElementById("racingCar").style.marginTop = newPosition + "px";

    }


});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function gameOver() {

    var maxLevel = document.cookie;
    console.log("Cookies: ", maxLevel)
    document.getElementById("gameOver").style.display = "block";
    //console.log("end!")
    window.location.reload(true);

    document.getElementById("maxLevel").value = maxLevel;

}

function increaseDifficulty() {
    var color = getRandomColor();
    document.getElementById("raceTrack").style.backgroundColor = color;
    if(scrollSpeed <= 7){
        scrollSpeed = scrollSpeed + 1;
    }
    else if(scrollSpeed <= 11){
        scrollSpeed = scrollSpeed + 2;
    }
    else if(scrollSpeed < 15){
        scrollSpeed = scrollSpeed + 4;
    }
    else{
        scrollSpeed = scrollSpeed + 10;
    }
}

function collisionHandler(buttonsPosition, button1, button2, button3) {
    //Get positions of car and compare it to position of bumps. If they overlap, restart game;

    //Get position of a car
    var carElement = document.getElementById('racingCar')
    var carStyle = window.getComputedStyle(carElement)
    let currentCarPositionLeftRight = Number(carStyle.getPropertyValue('padding-left').replace("px", ""));
    let currentCarPositionUpDown = Number(carStyle.getPropertyValue('margin-top').replace("px", ""));

    var positions = [16, 116, 216, 315, 415];

    // console.log("Car position: ", currentCarPositionLeftRight, currentCarPositionUpDown);
    // console.log("Buttons position: ", buttonsPosition, button1, button2, button3);

    //Get lanes with bumps
    var currentBumpsPositions = [button1, button2, button3];
    for (x = 0; x < currentBumpsPositions.length; x++) {
        var positionIndex = positions.indexOf(currentBumpsPositions[x]);
        if (positionIndex != -1) {
            if ((currentCarPositionLeftRight - 400) / 100 == positionIndex) {
                if (currentCarPositionUpDown <= buttonsPosition + 40 && currentCarPositionUpDown >= buttonsPosition - 60) {
                    gameOver();
                }
            }
            else {
               // console.log("No collision");
            }
            //fullLanes.push(positionIndex);
        }
    }
}

function randomizeBumpPosition(pos1, pos2, pos3) {
    //Posible positions
    var positions = [16, 116, 216, 315, 415];

    for (x = 1; x <= 3; x++) {
        var singleItem = positions[Math.floor(Math.random() * positions.length)];
        var index = 0;

        switch (x) {
            case 1:
                //assign one of the array elements and remove it from the table
                pos1 = singleItem;
                index = positions.indexOf(singleItem);
                if (index > -1) {
                    positions.splice(index, 1);
                }
                break;

            case 2:
                //assign one of the array elements and remove it from the table
                pos2 = singleItem;
                index = positions.indexOf(singleItem);
                if (index > -1) {
                    positions.splice(index, 1);
                }
                break;

            case 3:
                //assign one of the array elements and remove it from the table
                pos3 = singleItem;
                index = positions.indexOf(singleItem);
                if (index > -1) {
                    positions.splice(index, 1);
                }
                break;
        }
    }

    var returnArray = [pos1, pos2, pos3];
    //console.log(returnArray);

    return returnArray;
}

function moveBumps() {

    //Get up-down position of all bumps
    var element = document.getElementById('bumps');
    var style = window.getComputedStyle(element)
    let currentPositionDiagonal = Number(style.getPropertyValue('margin-top').replace("px", ""));

    //Set up-down position of all bumps
   // console.log(currentPositionDiagonal);
    let newPosition = "";

    //Get left-right position of each bump
    var element1 = document.getElementById('bump1');
    var style1 = window.getComputedStyle(element1)
    let currentPositionHorizontal1 = Number(style1.getPropertyValue('padding-left').replace("px", ""));

    var element2 = document.getElementById('bump2');
    var style2 = window.getComputedStyle(element2)
    let currentPositionHorizontal2 = Number(style2.getPropertyValue('padding-left').replace("px", ""));

    var element3 = document.getElementById('bump3');
    var style3 = window.getComputedStyle(element3)
    let currentPositionHorizontal3 = Number(style3.getPropertyValue('padding-left').replace("px", ""));

   // console.log(currentPositionHorizontal1, currentPositionHorizontal2, currentPositionHorizontal3);

    if (currentPositionDiagonal <= 610) {
        newPosition = currentPositionDiagonal + scrollSpeed;

        collisionHandler(newPosition, currentPositionHorizontal1, currentPositionHorizontal2, currentPositionHorizontal3);
    }
    else {
        newPosition = 0;

        //Increse level
        var currentLevel = Number(document.getElementById('points').value);

      //  console.log("current: ", currentLevel);
        document.getElementById('points').value = currentLevel + 1;
        document.cookie = currentLevel + 1;

        if (currentLevel % 5 == 0) {
            increaseDifficulty();
          //  console.log("Increase difficulty!");
        }

        //Randomize bumps position
        var randomPositions = randomizeBumpPosition(currentPositionHorizontal1, currentPositionHorizontal2, currentPositionHorizontal3);

        document.getElementById("bump1").style.paddingLeft = randomPositions[0] + "px";
        document.getElementById("bump2").style.paddingLeft = randomPositions[1] + "px";
        document.getElementById("bump3").style.paddingLeft = randomPositions[2] + "px";
    }

    document.getElementById("bumps").style.marginTop = newPosition + "px";

}

setInterval(() => { moveBumps() }, gameDelay);