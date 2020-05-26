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
        case '3':1
            loop = true
            smithLoop();
            break;
        case '4':
            loop = false;
            break;
        case '5':
            let position = robot.getMousePos()
            console.log(position, 9999)
            break;
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
    barCheck.color = robot.getPixelColor(barCheck.x, barCheck.y);
    console.log(`Checked Color: ${barCheck.color}`, `Original Color: ${bar.color}`)
    if(barCheck.color !== bar.color){
        loop = false;
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
    let counter;
    robot.moveMouseSmooth(708, 466);
    await wait(1000)
    robot.mouseClick();
    robot.moveMouseSmooth(bar.x, bar.y);
    await colorChecker();
    await wait(800)
    robot.mouseClick();
    robot.moveMouseSmooth(454, 143);
    robot.mouseClick()
    await wait(1000)
    robot.moveMouseSmooth(1385, 283);
    robot.mouseClick();
    await wait(6000);
    robot.moveMouseSmooth(474, 324);
    robot.mouseClick();
    await wait(28000);
    // normal wait time 165000
    robot.moveMouseSmooth(1270, 153);
    robot.mouseClick();
    await wait (7000);
    robot.moveMouseSmooth(708, 466);
    robot.mouseClick();
    await wait(300);
    robot.moveMouseSmooth(1262, 629);
    await(500);
    robot.mouseClick();
    robot.moveMouseSmooth(1263, 735);
    await wait(500);
    robot.mouseClick();
    robot.moveMouseSmooth(1302, 841);
    await wait(500);
    robot.mouseClick();
    counter += 1;
    console.log(`This has run ${counter} times` )
}

function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
}


gk.on('error', error => {
    console.error(error)
});
    