const GK = require('global-keypress');
const robot = require('robotjs')

const gk = new GK();

let cutPos;
let treeColor;

gk.start();

gk.on('press', data => {
    console.log(data)
    switch (data.data){
        case '1':
            console.log('IN CASE 1')
            cutPos = robot.getMousePos();
            console.log('ROBOT WORKS HERE')
            treeColor = robot.getPixelColor(cutPos.x, cutPos.y)
            console.log('GOT CUT POSITION');
            break;
    }
});

gk.on('error', error => {
    console.error(error)
});

// gk.on('close', () => {
//     console.log('closed')
// })
 12