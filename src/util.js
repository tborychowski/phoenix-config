const padding = 2;

const isMultiScreen = () => Screen.all().length > 1;

function grid (screen) {
	if (!screen) return;
	const scr = screen.flippedVisibleFrame();
	const pos = {
		x: scr.x,
		y: scr.y,
		w: scr.width,
		h: scr.height,
		w2: (scr.width - padding) / 2,
		h2: (scr.height - padding) / 2,
		w13: (scr.width - padding) / 3,
		h13: (scr.height - padding) / 3,
		w34: scr.width / 4 * 3,
		w45: scr.width / 5 * 4,
	};
	const small = { w: scr.width * 0.6, h: scr.height * 0.8 };
	return {
		full:           { x: pos.x, y: pos.y, width: pos.w, height: pos.h },
		small:          { x: pos.x + (scr.width - small.w) / 2, y: pos.y + scr.height - small.h, width: small.w, height: small.h },
		left:           { x: pos.x, y: pos.y, width: pos.w2, height: pos.h },
		right:          { x: pos.x + pos.w2 + padding, y: pos.y, width: pos.w2, height: pos.h },
		'top-left':     { x: pos.x, y: pos.y, width: pos.w2, height: pos.h2 },
		'top-right':    { x: pos.x + pos.w2 + padding, y: pos.y, width: pos.w2, height: pos.h2 },
		'bottom-left':  { x: pos.x, y: pos.y + pos.h2 + padding, width: pos.w2, height: pos.h2 },
		'bottom-right': { x: pos.x + pos.w2 + padding, y: pos.y + pos.h2 + padding, width: pos.w2, height: pos.h2 },

		'left-13':      { x: pos.x, y: pos.y, width: pos.w13, height: pos.h },
		'right-23':     { x: pos.x + pos.w13 + padding, y: pos.y, width: pos.w13 * 2 - padding, height: pos.h },

		'left-45':      { x: pos.x, y: pos.y, width: pos.w45, height: pos.h },
		'middle-45':    { x: pos.x + (pos.w - pos.w45) / 2, y: pos.y, width: pos.w45, height: pos.h },
		'right-45':     { x: pos.x + (pos.w - pos.w45), y: pos.y, width: pos.w45, height: pos.h },
	};
}


function positionWindow (position, win) {
	if (!win) win = Window.focused();
	if (!win || !win.app) return;

	const screen = win.screen();
	if (!screen) return;
	const p = Object.assign({}, grid(screen)[position]);
	// if (win.app().name() === 'Vivaldi' && isMultiScreen() && position !== 'small') p.y += 22;
	win.setFrame(p);
}



function moveToScreen (screenIdx, window) {
	const screen = Screen.all()[screenIdx];
	if (typeof screen === 'undefined') return;
	if (!window) window = Window.focused();

	const frame = window.frame();
	const oldScreenRect = window.screen().frame();
	const newScreenRect = screen.flippedVisibleFrame();
	const xRatio = newScreenRect.width / oldScreenRect.width;
	const yRatio = newScreenRect.height / oldScreenRect.height;
	window.setFrame({
		x: (Math.round(frame.x - oldScreenRect.x) * xRatio) + newScreenRect.x,
		y: (Math.round(frame.y - oldScreenRect.y) * yRatio) + newScreenRect.y,
		width: Math.round(frame.width * xRatio),
		height: Math.round(frame.height * yRatio)
	});
}



function onAppLaunch (app, delay) {
	const name = app.name();
	if (appMap[name]) appMap[name](app, delay);
}


function defaultWindowPosition () {
	const win = Window.focused();
	if (win && win.app) onAppLaunch(win.app(), 0);
}



function alert (message) {
	/*global Modal */
	Modal.build({
		origin (modal) {
			const scr = Screen.main().flippedVisibleFrame();
			return { x: scr.width / 2 - modal.width / 2, y: scr.height / 3 };
		},
		weight: 20,
		duration: 1,
		appearance: 'dark',
		text: message
	}).show();
}
