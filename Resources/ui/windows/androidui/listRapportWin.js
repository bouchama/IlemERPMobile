exports.createListRapportWin = function() {
	var ui = require('/ui/ui');
	var platform= Ti.Platform.osname;

	var win = ui.createWindow({
		title : 'Gestion Rapport Activité',
	});
	var winTitle = ui.createNavBar("Gestion Rapport Activité");
	//win.add(winTitle);

	var view = Ti.UI.createView({
		/*showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : false,*/
		height : "100%",
		width : "100%",
		disableBounce : false,
		layout : 'vertical',
		backgroundColor:"yellow",
		top : '0'
	});
	var viewAjout = Ti.UI.createView({
		/*showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : false,*/
		height : '80',
		width : "100%",
		disableBounce : false,
		layout : 'vertical',
		
		
		top : 0
	});
	var nouveauRapportLabel = ui.createLabel({
		left:"50%",
		width:'20%',
		top : '3dp',
		text : "Nouveau Rapport",
	});
	var ajouter = ui.createButton({
		//title : "ajouter",
		left:"70%",
		width:"25%",
		top : '-35dp',
		backgroundImage : '/images/add-icon.png.png'
	});
var Recherche = ui.createTextField({
		top : '3dp',
		height:'35'
	});
	viewAjout.add(nouveauRapportLabel);
	viewAjout.add(ajouter);
	viewAjout.add(Recherche);
	
var tbl_data = [
    {title:'Row 1',leftImage:'app-note-icon.png'},
    {title:'Row 2',leftImage:'app-note-icon.png'},
    {title:'Row 3',leftImage:'app-note-icon.png'},
    {title:'Row 4',leftImage:'app-note-icon.png'},
    {title:'Row 5'},
    {title:'Row 2'},
    {title:'Row 3'},
    {title:'Row 4'},
    {title:'Row 5'},
    {title:'Row 1'},
    {title:'Row 2'},
    {title:'Row 3'},
    {title:'Row 4'},
    {title:'Row 5'},
    {title:'Row 1'},
    {title:'Row 2'},
    {title:'Row 3'},
    {title:'Row 4'},
    {title:'Row 5'}
   
];
// now assign that array to the table's data property to add those objects as rows
var table = Titanium.UI.createTableView({
    data:tbl_data,
    backgroundColor:"#FFDAB9",
    font : {
			fontSize : '14dp',
			fontWeight : 'bold',
			fontFamily:'OpenSans , Helvetica Neue, Gill Sans MT, Trebuchet MS',

		}
});
// alternatively, you could do
table.setData(tbl_data);
view.add(table);
	//
	win.add(viewAjout);
	win.add(view);
	
	//win.authentification=authentification;
	//Ti.include('/controllers/accueilWin.js');
	//var controller = createController(win);
	return win;
};
