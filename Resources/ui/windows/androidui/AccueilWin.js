exports.createAccueilWin = function() {
	var ui = require('/ui/ui');
	var platform= Ti.Platform.osname;

	var win = ui.createWindow({
		title : 'Accueil',
	});
	var winTitle = ui.createNavBar("Accueil");
	win.add(winTitle);

	var view = Ti.UI.createScrollView({
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : false,
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		disableBounce : false,
		layout : 'vertical',
		top : 0
	});

	

	// Create a Button.
	var synchronisation = ui.createButton({
		title : "Synchronisation",
		top : '30dp',
		hight:'40dp'
	});
var authentification = ui.createButton({
		title : "Authentification",
		top : '3dp',
	});
	var padding = Ti.UI.createView({
		height : '30dp',
		top : '5dp'
	});

	
	
	view.add(synchronisation);
	view.add(padding);
	view.add(authentification);
	

	//
	win.add(view);
	win.authentification=authentification;
	Ti.include('/controllers/accueilWin.js');
	var controller = createController(win);
	return win;
};
