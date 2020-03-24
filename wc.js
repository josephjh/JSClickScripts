const robot = require('robotjs');
const ioHook = require('iohook');

let cutPos;
let lastInvPos;
let emptySlotColor;
let treeColor;

ioHook.on('keydown', event => {
    console.log(event.keycode)
    switch (event.keycode) {
        case 44:
            cutPos = robot.getMousePos();
            treeColor = robot.getPixelColor(cutPos.x, cutPos.y)
            console.log('GOT CUT POSITION');
            break;
        case 45:
            lastInvPos = robot.getMousePos();
            emptySlotColor = robot.getPixelColor(lastInvPos.x, lastInvPos.y)
            console.log('GOT LAST INVENTORY POSITION');  
            break;
        case 46:
            console.log('STARTING THE CLICKING');
            clickLoop();
            break;
        case 47: 
            console.log('STOPPING');
            clearTimeout(loop);
            break;
    }
})

function clickLoop() {
    // Check if inventory is full
    if(robot.getPixelColor(lastInvPos.x, lastInvPos.y) !== emptySlotColor){
        console.log('INVENTORY IS FULL');
        return;
    }

    //Check if tree is there
    if(robot.getPixelColor(cutPos.x, cutPos.y) === treeColor){
        console.log('FOUND THE TREE');
        robot.moveMouse(cutPos.x, cutPos.y);
        robot.mouseClick();
        return;
    }
    robot.moveMouse(cutPos.x, cutPos.y);
    robot.mouseClick();
    loop = setTimeout(() => clickLoop(), 1500)
}

ioHook.start()

// 44 = z, 45 = x, c = 46