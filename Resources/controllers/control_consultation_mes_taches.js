function createController(consultation_mes_taches_win) {
	var platform= Ti.Platform.osname;
// Listen for click events.
	win.ajouter_tache_boutton.addEventListener('click', function() {
		
			/*var authentification = require('/ui/windows/' + platform + 'ui/AuthentificationWin').createAuthentificationWin();
			authentification.open();
		*/
		var nouvelle_tache = require('/ui/windows/' + platform + 'ui/listRapportWin').createListRapportWin();
			nouvelle_tache.open();
	});
};