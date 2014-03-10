function createController(win) {
	var platform= Ti.Platform.osname;
// Listen for click events.
	win.ajouter.addEventListener('click', function() {
		
			var ajoutTache = require('/ui/windows/' + platform + 'ui/ajoutTacheWin').createAjoutTacheWin();
			ajoutTache.open();
		/*
		var authentification = require('/ui/windows/' + platform + 'ui/listRapportWin').createListRapportWin();
			authentification.open();*/
	});
};