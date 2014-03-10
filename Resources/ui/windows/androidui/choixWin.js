exports.createChoixWin = function() {
	var ui = require('/ui/ui');
	var platform = Ti.Platform.osname;

	var win = ui.createWindow({
		title : 'CHOIX OPTIONS',
	});
	var winTitle = ui.createNavBar("CHOIX OPTIONS");
	win.add(winTitle);

	var view = Ti.UI.createView({

		height : "100%",
		width : "100%",
		disableBounce : false,
		layout : 'vertical',
		top : 0
	});


	var importation = ui.createButton({
		title : "Importation des Données",
		left : "10%",
		width : "80%",
		top : '40dp',
	});
	var saisirRapport = ui.createButton({
		title : "Saisir Rapport d'Activité",
		left : "10%",
		width : "80%",
		top : '8dp',
	});
	var validerRapport = ui.createButton({
		title : "Valider Rapport d'Activité",
		left : "10%",
		width : "80%",
		top : '8dp',
	});
	var noteFrais = ui.createButton({
		title : "Note de Frais ",
		left : "10%",
		width : "80%",
		top : '8dp',
	});
	var Synchronisation = ui.createButton({
		title : "Synchronisation",
		left : "10%",
		width : "80%",
		top : '8dp',
	});

	view.add(importation);
	view.add(saisirRapport);
	view.add(validerRapport);
	view.add(noteFrais);
	view.add(Synchronisation);
win.saisirRapport=saisirRapport;
	win.add(view);
<<<<<<< HEAD
	win.saisirRapport=saisirRapport;
	Ti.include('/controllers/controleur_modules_application.js');
	var controller = Controller_mes_rapports(win);
=======
	Ti.include('/controllers/choixWin.js');
	var controller = choixCreateController(win);
>>>>>>> 61908692f1f7f0d8e152f3e97ff961bd85216db3
	return win;
}; 
