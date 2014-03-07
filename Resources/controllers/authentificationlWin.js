function authCreateController(win) {
	var platform= Ti.Platform.osname;
// Listen for click events.
	win.submit.addEventListener('click', function() {
		
			var choixWin = require('/ui/windows/' + platform + 'ui/choixWin').createChoixWin();
			choixWin .open();
		
	});
};