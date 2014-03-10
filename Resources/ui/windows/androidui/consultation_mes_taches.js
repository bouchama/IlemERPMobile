exports.createAccueilWin = function() {
var ui = require('/ui/ui');
// création du windows
var consultation_mes_taches_win = ui.createWindow({
		title : 'Gestion rapports d\'activités',
	});	
	// création de div contenant le titre de la fenetre
	/*var titre_win = ui.createNavBar({
		,
		color : "#132959",
	});*/
	// ajouter titre_win au win 
	//consultation_mes_taches_win.add(titre_win);
	//*********************************************************************
	//vréation d'une vue pour mettre logo d'ILEM
	var logoILEM_view = Ti.UI.createView({
		height : '10%',
		width : '100%',
		layout : 'vertical',
		top : '0' ,
		//backgroundColor : 'yellow' ,
		backgroundImage : '/images/ilem.gif'
	});
	// ajouter la vue au windows
	consultation_mes_taches_win.add(logoILEM_view);
	//*********************************************************************
	// création d'une vue pour mettre nos composantes graphiques
	var view = Ti.UI.createScrollView({
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : false,
		height : '100%',
		width : '100%',
		disableBounce : false,
		layout : 'vertical',
		top : 0
	}); 
	//---------------------------------------------------------------------
 // Create a Button.
 var soumettree_boutton = ui.createButton({
     title : 'soumettre',
    top : '5dp',
		width : '30%',
		left :'4%',
		color : 'gray'
 });
 // ajouter le boutton soumettre dans la vue 
 view.add(soumettree_boutton);
 // Listen for click events.
 soumettree_boutton.addEventListener('click', function() {
     alert('\'soumettree_boutton\' was clicked!');
 });
 //---------------------------------------------------------------------
  // Create a Button.
 var ajouter_tache_boutton = ui.createButton({
     title : 'nouvelle tache',
    top : '-37dp',
		left : '45%',
		width : '48%',
		color : 'gray'
 });
 // ajouter le boutton nouvelle tache dans la vue 
 view.add(ajouter_tache_boutton);
 // Listen for click events.
 ajouter_tache_boutton.addEventListener('click', function() {
     alert('\'nouvelle tache\' was clicked!');
 });
 //--------------------------------------------------------------------
/* var rechercher_tache= ui.createSearchBar({
	barColor: '#0000', 
    showCancel: true,
    height: '43%',
    width : '100%'
});
 //---------------------------------------------------------------------
// Create a TableView.
var liste_taches = Ti.UI.createTableView({
	search:rechercher_tache
	});

// Populate the TableView data.
var data = [
	{title:'Row 1', hasChild:true, color:'red', header:'First'},
	{title:'Row 2', hasDetail:true, color:'green'},
	{title:'Row 3', hasCheck:true, color:'blue', header:'Second'},
	{title:'Row 4', color:'orange'}
];
liste_taches.setData(data);
// Listen for click events.
/*aTableView.addEventListener('click', function(e) {
	alert('title: \'' + e.row.title + '\', section: \'' + e.section.headerTitle + '\', index: ' + e.index);
});*/

// Add to the parent view.
//consultation_mes_taches_win.add(liste_taches);
//---------------------------------------------------------------------

 //---------------------------------------------------------------------
 	//*********************************************************************
	
	consultation_mes_taches_win.add(view);
	consultation_mes_taches_win.consultation_mes_taches_win=consultation_mes_taches_win;
	//Ti.include('/controllers/control_consultation_mes_taches.js');
	//var controller = createController(win.consultation_mes_taches_win);
	return consultation_mes_taches_win;
};

