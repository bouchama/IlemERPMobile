function Controller_mes_rapports(win) {
	var platform= Ti.Platform.osname;
// Listen for click events.
	win.saisirRapport.addEventListener('click', function() {
		
			var listRapportWin = require('/ui/windows/' + platform + 'ui/listRapportWin').createListRapportWin();
			listRapportWin.open();
		
	});
};