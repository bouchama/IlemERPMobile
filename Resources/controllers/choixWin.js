function choixCreateController(win) {
	var platform= Ti.Platform.osname;
// Listen for click events.
	win.saisirRapport.addEventListener('click', function() {
		
			var choixWin = require('/ui/windows/' + platform + 'ui/listRapportWin').createListRapportWin();
			choixWin .open();
		
	});
};