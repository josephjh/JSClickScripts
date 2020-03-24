const robot = require('robotjs');
const ioHook = require('iohook');

let color;
let clickCount = 0;
let coord1, coord2;

ioHook.on('mouseclick', event => {
  switch (clickCount) {
    case 0:
      console.log(0);
      setTimeout(() => {
        color = robot.getPixelColor(event.x, event.y);
      }, 1000)
      break;
    case 1:
      console.log(1);
      coord1 = [event.x, event.y];
      break;
    case 2:
      console.log(2);
      coord2 = [event.x, event.y];
      break;
    case 3:
      console.log(3);
      console.log(coord1, coord2, color)
      findColor();
      break;
  }
  clickCount++;
});

function findColor() {
  for (let x = coord1[0]; x < coord2[0]; x += 30) {
    for (let y = coord1[1]; y < coord2[1]; y += 30) {
      console.log(robot.getPixelColor(x, y));
      if (robot.getPixelColor(x, y) === color) {
        console.log('FOUND IT');
        robot.moveMouse(x, y);
        robot.mouseClick();
        return;
      }
    }
  }
}

ioHook.start();