function createController(win) {
	var platform= Ti.Platform.osname;
// Listen for click events.
	win.authentification.addEventListener('click', function() {
		
			/*var authentification = require('/ui/windows/' + platform + 'ui/AuthentificationWin').createAuthentificationWin();
			authentification.open();
		*/
		var authentification = require('/ui/windows/' + platform + 'ui/listRapportWin').createListRapportWin();
			authentification.open();
	});
};