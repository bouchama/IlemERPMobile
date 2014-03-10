exports.createAjoutTacheWin = function() {
	var ui = require('/ui/ui');
	var platform= Ti.Platform.osname;

	var win = ui.createWindow({
		title : 'AUTHENTIFICATION',
	});
	var winTitle = ui.createNavBar("AUTHENTIFICATION");
	win.add(winTitle);

	var view =Ti.UI.createView({
		//showVerticalScrollIndicator : true,
		//showHorizontalScrollIndicator : false,
		height : "100%",
		width : "100%",
		disableBounce : false,
		
		layout : 'vertical',
		top : 0
	});

	var labelIntro = ui.createLabelIntro({
		//top : '10dp',
		text : "Authentification",
	});

	// Create a Button.
	var submit = ui.createButton({
		title : "Valider",
		left:"5%",
		width:"40%",
		top : '-37dp',
	});
var annuler = ui.createButton({
		title : "Annuler",
		
		left:"50%",
		width:"40%",
		top : '20dp',
	});
	var usernameLabel = ui.createLabel({
		top : '20dp',
		text : "Nom",
	});
	var usernameText = ui.createTextField({
		top : '3dp',
	});
	var passwordLabel = ui.createLabel({
		top : '10dp',
		text : "Email",
	});
	var passwordText = ui.createTextField({
		top : '3dp',
	});
	var padding = Ti.UI.createView({
		height : '30dp',
		top : '5dp'
	});

		view.add(labelIntro);
	view.add(usernameLabel);
	view.add(usernameText);

	view.add(passwordLabel);
	view.add(passwordText);
	view.add(annuler);
	view.add(submit);
	win.submit=submit;

	//view.add(padding);
	win.add(view);
	// Ti.include('/controllers/authentificationlWin.js');
	// var controller1 = authCreateController(win);
	return win;
};