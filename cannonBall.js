const GK  = require("global-keypress")
const robot = require("robotjs")

const gk = new GK()

let bar;

gk.start()

gk.on('press', async data => {
    switch (data.data) {
        case '1':
            bar = robot.getMousePos();
            bar.color = robot.getPixelColor(bar.x, bar.y)
            console.log(bar)
            break;
        case '2':
            smith();
            console.log('meep');
            break;
        case '3':
            loop = true
            smithLoop();
            break;
        case '4':
            loop = false;
            break;
        case '5':
            let position = robot.getMousePos()
            console.log(position, 9999)
        case '6':
            robot.moveMouseSmooth(803, 68);
            robot.mouseClick();
            robot.moveMouseSmooth(1284, 880)
            robot.mouseClick();
            await wait(500);
            robot.moveMouseSmooth(1277, 826);
            robot.mouseClick();
            break
    }
});

async function smithLoop() {
    await smith();
    if(loop == true){
        smithLoop();
    } 
};

async function colorChecker(){
    let barCheck = robot.getMousePos(bar.x, bar.y);
    console.log(barCheck, 444)
    barCheck.color = robot.getPixelColor(barCheck.x, barCheck.y);
    console.log(barCheck.color, bar.color)
    if(barCheck.color !== bar.color){
        loop = false;
        console.log(barCheck.color, 1)
        console.log(bar.color, 2)
        robot.moveMouseSmooth(803, 68);
        robot.mouseClick();
        robot.moveMouseSmooth(1284, 880)
        robot.mouseClick();
        await wait(500);
        robot.moveMouseSmooth(1277, 826);
        robot.mouseClick();
        throw "There are no more bars";
    } else {
        return
    }
};

async function smith() { 
    robot.moveMouseSmooth(708, 466);
    await wait(500)
    robot.mouseClick();
    robot.moveMouseSmooth(bar.x, bar.y);
    await colorChecker();
    await wait(800)
    robot.mouseClick();
    robot.moveMouseSmooth(1385, 283);
    robot.mouseClick();
    await wait(6000);
    robot.keyTap('space');
    await wait(165000);
    // normal wait time 165000
    robot.moveMouseSmooth(1270, 153);
    robot.mouseClick();
    await wait (6000);
    robot.moveMouseSmooth(708, 466);
    robot.mouseClick();
    robot.moveMouseSmooth(1260, 629);
    await wait(300)
    robot.mouseClick();
}

function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
}


gk.on('error', error => {
    console.error(error)
});
            