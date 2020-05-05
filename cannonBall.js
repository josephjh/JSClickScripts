const GK  = require("global-keypress")
const robot = require("robotjs")

const gk = new GK()

let smithLoop;
let bar;
let flag;

gk.start()

gk.on('press', async data => {
    console.log(data.data, 99999999)
    switch (data.data) {
        case '1':
            bar = robot.getMousePos();
            bar.color = robot.getPixelColor(bar.x, bar.y)
            console.log(bar.color)
            break;
        case '2':
            smith();
            console.log('meep');
            break;
        case '3':
            console.log('in here')
            smithLoop = setInterval(() => {
                smith();
            }, 179000);
            break;
    }
});

// bar color is 776c6c

async function colorChecker(){
    let barCheck = getMousePos(bar.x, bar.y);
    barCheck.color = getPixelColor(barCheck.x, barCheck.y);
    if(barCheck.color !== bar.color){
        clearInterval(smithLoop)
    } else {
        return
    }
}

async function smith() {
    flag = false;
    robot.moveMouseSmooth(708, 466);
    await wait(500)
    robot.mouseClick();
    robot.moveMouseSmooth(407, 147);
    // await colorChecker();
    await wait(800)
    robot.mouseClick();
    robot.moveMouseSmooth(1354, 292);
    robot.mouseClick();
    await wait(6000);
    robot.keyTap('space');
    await wait(165000);
    robot.moveMouseSmooth(1270, 153);
    robot.mouseClick();
    await wait (6000);
    robot.moveMouseSmooth(708, 466);
    robot.mouseClick();
    robot.moveMouseSmooth(1260, 629);
    await wait(300)
    robot.mouseClick();
    flag = true
    if(flag == true){
        smith();
        return
    }
}

function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
}


gk.on('error', error => {
    console.error(error)
});
