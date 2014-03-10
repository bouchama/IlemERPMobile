function createController(win) {
	var platform= Ti.Platform.osname;
// Listen for click events.
	win.authentification.addEventListener('click', function() {
		
			/*var authentification = require('/ui/windows/' + platform + 'ui/AuthentificationWin').createAuthentificationWin();
			authentification.open();
		*/
		var Authentification_win = require('/ui/windows/' + platform + 'ui/AuthentificationWin').createAuthentificationWin();
			Authentification_win.open();
	});
};