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
            console.log(bar, bar.color)
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
    let ringCheck = {x: 403, y: 137}
    ringCheck.color = 'a78c09';
    console.log(`Checked Color: ${ringCheck.color}`, `Original Color: ${ring.color}`)
    if(ringCheck.color !== ring.color){
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
    robot.moveMouseSmooth(708, 466);
    await wait(1000)
    robot.mouseClick();
    console.log('bank opened')
    await wait(200)
    robot.moveMouseSmooth(1256, 626);
    robot.mouseClick();
    robot.moveMouseSmooth(bar.x, bar.y);
    await wait(1000)
    robot.mouseClick();
    console.log('rings withdrawn')
    robot.moveMouseSmooth(803, 68);
    robot.mouseClick();
    console.log('bank closed');
    robot.moveMouseSmooth(1380, 583);
    robot.mouseClick();
    console.log('spell book opened')
    await wait(300);
    robot.moveMouseSmooth(1258, 664);
    robot.mouseClick();
    await wait(300);
    robot.mouseClick();
    await wait(120000);
    console.log('enchanting')
}

function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
}


gk.on('error', error => {
    console.error(error)
});
    