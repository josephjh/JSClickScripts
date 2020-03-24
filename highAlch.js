var ioHook = require("iohook")
var robot = require("robotjs")

let mousePosition;
let clickCount = 0;
let counter = 0;
let alchingLoop;

ioHook.on('mouseclick', function (event) {
    console.log(event)
    switch (clickCount) {
        case 0:
            console.log(0);
            setTimeout(() =>{
                console.log('In the timeout!');
            }, 2000)
        case 1: 
            mousePosition = robot.getMousePos();
            console.log('Got mouse position');
            console.log(clickCount);
            break;
        case 2:
            alchingLoop = setInterval(clicking, 3000)            
            console.log('click loop working');
            break;
    }
    clickCount++
});

function clicking() {
    if (counter <= 10) {
        robot.moveMouse(mousePosition.x, mousePosition.y);
        robot.mouseClick();
        counter++
        console.log(counter)
    } else {
        clearInterval(alchingLoop);
    }
}



ioHook.start();