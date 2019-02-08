function iTerm2 (app) {
	if (!isMultiScreen()) return;
	setTimeout(() => {
		positionWindow('bottom-right', app.mainWindow());
	}, 1000);
}

function Code (app) {
	setTimeout(() => {
		const win = app.mainWindow();
		const pos = isMultiScreen() ? 'left' : 'left-34';
		positionWindow(pos, win);
	}, 2000);
}

function Vivaldi (app) {
	setTimeout(() => {
		const win = app.mainWindow();
		const pos = isMultiScreen() ? 'small' : 'middle-34';
		positionWindow(pos, win);
	}, 2000);
}

function Skype (app) {
	if (!isMultiScreen()) return;
	setTimeout(() => {
		const win = app.mainWindow();
		moveToScreen(1, win);
		positionWindow('left-13', win);
	}, 3000);
}


function Slack (app) {
	if (!isMultiScreen()) return;
	setTimeout(() => {
		const win = app.mainWindow();
		moveToScreen(1, win);
		positionWindow('right-23', win);
	}, 5000);
}


const appMap = {
	iTerm2,
	Code,
	Vivaldi,
	Skype,
	Slack,
};
