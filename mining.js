const robot = require('robotjs');
const GK = require('global-keypress');

const gk = new GK();

let rocks = [];
let lastSlot;
let drop;
let loop;

gk.start();

gk.on('press', data => {
  console.log(data.data)
  switch (data.data) {
    case '1':
      rock = robot.getMousePos();
      rock.color = robot.getPixelColor(rock.x, rock.y);
      rocks.push(rock);
      console.log('GOT ROCK');
      break;
    case '2':
      lastSlot = robot.getMousePos();
      lastSlot.color = robot.getPixelColor(lastSlot.x, lastSlot.y);
      console.log('GOT LAST SLOT');
      break;
    case '3':
      drop = robot.getMousePos()
      break;
    case '4':
      clickLoop()
      console.log('STARTING');
      break;
    case '5':
      console.log('STOPPPING');
      clearTimeout(loop);
      break;
  }
});

async function clickLoop(rockIdx = 0) {
  const rock = rocks[rockIdx];
  const rockAvailable = robot.getPixelColor(rock.x, rock.y) === rock.color;

  const fullInvitory = robot.getPixelColor(lastSlot.x, lastSlot.y) !== lastSlot.color;
  if (fullInvitory) {
    robot.moveMouse(lastSlot.x, lastSlot.y);
    robot.mouseClick('right');
    await wait(100)
    robot.moveMouse(drop.x, drop.y);
    await wait(100)
    robot.mouseClick()
    // robot.keyToggle('shift', 'down');
    // await wait(100);
    // robot.mouseClick();
    // await wait(100);
    // robot.keyToggle('shift', 'up');
  } else if (rockAvailable && !rock.isMining) {
    robot.moveMouseSmooth(rock.x, rock.y);
    robot.moveMouse(rock.x, rock.y);
    robot.mouseClick();
    rock.isMining = true;
  } else if (!rockAvailable && rock.isMining) {
    rock.isMining = false;
    console.log(rockIdx)
    rockIdx = rockIdx + 1 === rocks.length ? 0 : ++rockIdx;
    console.log(rockIdx, rocks.length)
  }
  console.log('loop', rockIdx, rocks[rockIdx], rockAvailable);
  loop = setTimeout(() => clickLoop(rockIdx), 1000);
}

async function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
}

gk.on('error', error =>{
    console.log(error)
});
