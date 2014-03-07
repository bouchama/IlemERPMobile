exports.createAccueilWin = function() {
var ui = require('/ui/ui');
// création du windows
var consultation_mes_taches_win = ui.createWindow({
		title : 'consultations des taches',
	});	
	// création de div contenant le titre de la fenetre
	var titre_win = ui.createNavBar({
		color : "#132959",
	title :"'Gestion rapports d'activités'"
	});
	// ajouter titre_win au win 
	consultation_mes_taches_win.add(titre_win);
	//*********************************************************************
	//vréation d'une vue pour mettre logo d'ILEM
	var logoILEM_view = Ti.UI.createScrollView({
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : false,
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		disableBounce : false,
		layout : 'vertical',
		top : 0 ,
		backgroundImage : '/images/androidTitleBarBlack.png'
	});
	// ajouter la vue au windows
	consultation_mes_taches_win.add(logoILEM_view);
	//*********************************************************************
	// création d'une vue pour mettre nos composantes graphiques
	var view = Ti.UI.createScrollView({
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : false,
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		disableBounce : false,
		layout : 'vertical',
		top : 0
	}); 
	//---------------------------------------------------------------------
 // Create a Button.
 var soumettree_boutton = Ti.UI.createButton({
     title : 'soumettre',
    top : '30dp',
		hight:'40dp'
 });
 // ajouter le boutton soumettre dans la vue 
 view.add(soumettree_boutton);
 // Listen for click events.
 soumettree_boutton.addEventListener('click', function() {
     alert('\'soumettree_boutton\' was clicked!');
 });
 //---------------------------------------------------------------------
  // Create a Button.
 var ajouter_tache_boutton = Ti.UI.createButton({
     title : 'nouvelle tache',
    top : '10dp',
		hight:'40dp' ,
		left : '65dp'
 });
 // ajouter le boutton nouvelle tache dans la vue 
 view.add(ajouter_tache_boutton);
 // Listen for click events.
 ajouter_tache_boutton.addEventListener('click', function() {
     alert('\'nouvelle tache\' was clicked!');
 });
 //---------------------------------------------------------------------
// Create a TextField.
var rechercher_tache_boutton = Ti.UI.createTextField({
	height : 35,
	top : 10,
	left : 40,
	width : 240,
	hintText : 'This is hint text',
	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
view.add(rechercher_tache_boutton);
// Listen for return events.
aTextField.addEventListener('return', function(e) {
	aTextField.blur();
	alert('Input was: ' + aTextField.value);
});
 //---------------------------------------------------------------------
 	//*********************************************************************
	
	consultation_mes_taches_win.add(view);
	win.consultation_mes_taches_win=consultation_mes_taches_win;
	Ti.include('/controllers/control_consultation_mes_taches.js');
	var controller = createController(win.consultation_mes_taches_win);
	return consultation_mes_taches_win;
};

