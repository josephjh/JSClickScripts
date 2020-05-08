const ioHook = require('iohook');
const robot = require('robotjs');

const events = [];
// const events = require('./craft.json');
let startTime;
let recording = false;
let loop;

ioHook.on('keydown', recordEvent);
ioHook.on('mouseclick', recordEvent);

function recordEvent(event) {
	// BAIL CASE - F3
	if (event.rawcode === 114) clearTimeout(loop);

	if (['keydown', 'keyup'].includes(event.type)) {
		// Keys to ignore
		if ([16, 17, 18].includes(event.rawcode)) return;

		// Recorder start/stop
		if (event.rawcode === 112) {
			if (!startTime) startTime = Date.now();
			recording = !recording;
			console.log(`Recording: ${recording}`);
			return;
		}

		// Start player
		if (event.rawcode === 113) {
			console.log(events)
			playEvents();
			return;
		}
	}

	// Stop capturing events when not recording
	if (!recording) return;

	// Record event
	event.time = Date.now() - startTime;
	events.push(event);
}

async function playEvents(idx = 0) {
	const perviousTime = idx > 0 ? events[idx - 1].time : 0;
	const event = events[idx];
	const waitTime = event.time - perviousTime;
	loop = setTimeout(() => {
		executeEvent(event);
		idx++;
		// if (idx === events.length) return;
		if (idx === events.length) idx = 0;
		playEvents(idx);
	}, waitTime);
}

function executeEvent(event) {
	switch (event.type) {
		case 'keydown':
			robot.keyTap(event.rawcode);
			break;
		case 'mouseclick':
			const button = event.button === 1 ? 'left' : 'right';
			robot.moveMouseSmooth(event.x, event.y);
			robot.mouseClick(button);
			break;
	}
}

ioHook.start();

