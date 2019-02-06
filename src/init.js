const MOD = ['ctrl', 'alt', 'cmd'];

Key.on('up',    MOD, () => positionWindow('full'));
Key.on('down',  MOD, () => positionWindow('small'));
Key.on('left',  MOD, () => positionWindow('left'));
Key.on('right', MOD, () => positionWindow('right'));

Key.on('[',     MOD, () => positionWindow('top-left'));
Key.on(']',     MOD, () => positionWindow('top-right'));
Key.on(',',     MOD, () => positionWindow('bottom-left'));
Key.on('.',     MOD, () => positionWindow('bottom-right'));
Key.on('/',     MOD, () => positionWindow('bottom-right'));

Key.on(';',     MOD, () => positionWindow('left-34'));
Key.on('\'',    MOD, () => positionWindow('middle-34'));
Key.on('\\',    MOD, () => positionWindow('right-34'));

Key.on('k', MOD, () => moveToScreen(1));
Key.on('l', MOD, () => moveToScreen(0));

Event.on('appDidLaunch', app => appMap[app.name()] && appMap[app.name()](app));
