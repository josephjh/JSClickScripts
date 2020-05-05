const GK  = require("global-keypress")
const robot = require("robotjs")

const gk = new GK()

let flag;

gk.start()

gk.on('press', async data => {
    console.log(data.data)
    switch (data.data) {
        case '1':
        runner()
    }
});

// mousePosition = robot.getMousePos()
// console.log(mousePosition)


// facing north: x: -975, y: 798
// starting position: x: 709, y: 480

async function runner () {
    flag = false
    robot.moveMouseSmooth(1250, 68)
    robot.mouseClick()
    console.log('Facing North!')
    console.log('In Case 2')
    robot.moveMouseSmooth(715, 504)
    robot.mouseClick()
    console.log('OPENING BANK')
    robot.moveMouseSmooth(1219, 628)
    robot.mouseClick()
    console.log('DEPOSITING RUNES')
    robot.moveMouseSmooth(405, 140)
    robot.mouseClick()
    console.log('FULL OF ESSENCE')
    robot.moveMouseSmooth(1364, 75)
    robot.mouseClick()
    console.log('HES MOVIN!')
    await wait(12000)
    robot.mouseClick()
    console.log('RUN THERE 1')
    await wait(12000)  
    robot.moveMouseSmooth(1335, 64)
    robot.mouseClick()
    console.log('RUN THERE 2')
    await wait(12000)  
    robot.moveMouseSmooth(1368, 72)
    robot.mouseClick()
    console.log('RUN THERE 3')
    await wait(16000)  
    robot.moveMouseSmooth(1315,57)
    robot.mouseClick()
    console.log('RUN THERE 4')
    await wait(12000)  
    robot.moveMouseSmooth(1307,63)
    robot.mouseClick()
    console.log('RUN THERE 5')
    await wait(14000)  
    robot.moveMouseSmooth(1307,63)
    robot.mouseClick()
    console.log('RUN THERE 6')
    await wait(14000)  
    robot.moveMouseSmooth(1339,60)
    robot.mouseClick()
    console.log('RUN THERE 7')
    await wait(14000)      
    robot.moveMouseSmooth(1334,68)
    robot.mouseClick()
    console.log('RUN THERE 8')
    await wait(16000)  
    robot.moveMouseSmooth(804, 347)
    robot.mouseClick()
    console.log('CASE 1')
    await wait(4000)  
    robot.moveMouseSmooth(332, 76)
    robot.mouseClick()
    console.log('CASE 2')
    await wait(8000)  
    robot.moveMouseSmooth(1345, 173)
    robot.mouseClick()
    console.log('CASE 3')
    await wait(8000)  
    robot.moveMouseSmooth(711, 579)
    robot.mouseClick()
    console.log('CASE 4')
    await wait(3000)  
    robot.moveMouseSmooth(1338, 201)
    robot.mouseClick()
    console.log('CASE 5')
    await wait(16000)  
    robot.moveMouseSmooth(1283, 188)
    robot.mouseClick()
    console.log('CASE 6')
    await wait(16000)   
    robot.moveMouseSmooth(1321, 201)
    robot.mouseClick()
    console.log('CASE 7')
    await wait(16000)  
    robot.moveMouseSmooth(1321, 201)
    robot.mouseClick()
    console.log('CASE 8')
    await wait(16000)  
    robot.moveMouseSmooth(1361, 192)
    robot.mouseClick()
    console.log('CASE 9')
    await wait(16000)  
    robot.moveMouseSmooth(1286, 194)
    robot.mouseClick()
    console.log('CASE 10')
    await wait(14000)  
    robot.moveMouseSmooth(1286, 196)
    robot.mouseClick()
    console.log('CASE 11')
    await wait(14000)  
    robot.moveMouseSmooth(1272, 183)
    robot.mouseClick()
    console.log('CASE 12')
    await wait(14000) 
    robot.moveMouseSmooth(1285, 195)
    robot.mouseClick()
    console.log('CASE 13')
    await wait(16000)
    flag = true
    if(flag === true) {
        runner();
        return;
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

