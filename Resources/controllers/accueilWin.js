function createController(win) {
	var platform= Ti.Platform.osname;
// Listen for click events.
	win.authentification.addEventListener('click', function() {
		
			var authentification = require('/ui/windows/' + platform + 'ui/AuthentificationWin').createAuthentificationWin();
			authentification.open();
<<<<<<< HEAD
		*/
		var Authentification_win = require('/ui/windows/' + platform + 'ui/AuthentificationWin').createAuthentificationWin();
			Authentification_win.open();
=======
		/*
		var authentification = require('/ui/windows/' + platform + 'ui/listRapportWin').createListRapportWin();
			authentification.open();*/
>>>>>>> 61908692f1f7f0d8e152f3e97ff961bd85216db3
	});
};