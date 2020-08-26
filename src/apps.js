function iTerm2 (app, delay = 1000) {
	if (!isMultiScreen()) return;
	setTimeout(() => {
		positionWindow('bottom-right', app.mainWindow());
	}, delay);
}

function Code (app, delay = 3000) {
	setTimeout(() => {
		const win = app.mainWindow();
		const pos = isMultiScreen() ? 'left' : 'left-45';
		positionWindow(pos, win);
	}, delay);
}

function Vivaldi (app, delay = 2000) {
	setTimeout(() => {
		const win = app.mainWindow();
		const pos = isMultiScreen() ? 'small' : 'middle-45';
		positionWindow(pos, win);
	}, delay);
}

function Firefox (app, delay = 2000) {
	setTimeout(() => {
		const win = app.mainWindow();
		const pos = isMultiScreen() ? 'small' : 'middle-45';
		positionWindow(pos, win);
	}, delay);
}

function Skype (app, delay = 3000) {
	if (!isMultiScreen()) return;
	setTimeout(() => {
		const win = app.mainWindow();
		moveToScreen(1, win);
		positionWindow('left-13', win);
	}, delay);
}


function Slack (app, delay = 5000) {
	if (!isMultiScreen()) return;
	setTimeout(() => {
		const win = app.mainWindow();
		moveToScreen(1, win);
		positionWindow('right-23', win);
	}, delay);
}


function Outlook (app, delay = 2000) {
	setTimeout(() => {
		const win = app.mainWindow();
		moveToScreen(0, win);
		positionWindow('left-23', win);
	}, delay);
}


function WhatsApp (app, delay = 2000) {
	setTimeout(() => {
		const win = app.mainWindow();
		moveToScreen(1, win);
		// positionWindow('left-13', win);
		const p = Object.assign({}, grid(win.screen())['left-13']);
		p.x -= 250;
		p.width += 250;
		win.setFrame(p, win);
	}, delay);
}



const appMap = {
	iTerm2,
	Code,
	VSCodium: Code,
	Vivaldi,
	Firefox,
	Skype,
	Slack,
	'Microsoft Outlook': Outlook,
	WhatsApp,
};
