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
	/*var ajouter = ui.createButton({
		title : "",
		left:"70%",
		width:"25%",
		top : '-35dp',
		backgroundImage : '/images/add-icon.png.png'
	});*/
	
	// Create an ImageView.
	var ajouter = Ti.UI.createImageView({
		image : '/images/button.png',
		left:"70%",
		width:"25%",
		height :'35dp',
		top : '-35dp',
	});
	
	
	var search = Titanium.UI.createSearchBar({
    showCancel: true,
    barColor: '#4ec4de',
    top : '0',
	height:'35'
});
var Recherche = ui.createTextField({
		top : '3dp',
		height:'35'
	});
	viewAjout.add(nouveauRapportLabel);
	viewAjout.add(ajouter);
	//viewAjout.add(Recherche);
	viewAjout.add(search);
var tbl_data = [
    {title:'aow 1',image:'\images\button.png'},
    {title:'bRow 2',image:'\images\button.png'},
    {title:'cRow 3',image:'\images\button.png'},
    {title:'Row 4',image:'\images\button.png'},
    {title:'dRow 5',image:'\images\button.png'},
    {title:'Row 2',image:'\images\button.png'},
    {title:'dRow 3',image:'\images\button.png'},
    {title:'dRow 4',image:'\images\button.png'},
    {title:'eRow 5',image:'\images\button.png'},
    {title:'eRow 1',image:'\images\button.png'},
    {title:'Row 2',image:'\images\button.png'},
    {title:'rRow 3',image:'\images\button.png'},
    {title:'Row 4',image:'\images\button.png'},
    {title:'Row 5',image:'\images\button.png'},
    {title:'Row 1',image:'\images\button.png'},
    {title:'Row 2',image:'\images\button.png'},
    {title:'Row 3',image:'\images\button.png'},
    {title:'Row 4',image:'\images\button.png'},
    {title:'Row 5',image:'\images\button.png'}
   
];
// now assign that array to the table's data property to add those objects as rows
var table = Titanium.UI.createTableView({
    data:tbl_data,
    search:search,
    backgroundColor:"#FFDAB9",
    font : {
			fontSize : '14dp',
			fontWeight : 'bold',
			fontFamily:'OpenSans , Helvetica Neue, Gill Sans MT, Trebuchet MS',

		}
});
var data=[];
for (var i = tbl_data.length - 1; i >= 0; i--){

	var row = Titanium.UI.createTableViewRow();

	var flag =   Ti.UI.createImageView({
		image : tbl_data[i].image,
		left:"80%",
		width:"20%",
		height :'35dp',
		top : '2dp',
	});
	

	var country = Titanium.UI.createLabel({
		text:tbl_data[i].title,
		font:{fontSize:16,fontWeight:'bold'},
		width:'auto',
		textAlign:'left',
		top:2,
		left:40,
		height:16
	});
	row.add(country);
	row.add(flag);
	data.push(row);
};
// alternatively, you could do
table.setData(data);
view.add(table);
	//
	win.add(viewAjout);
	win.add(view);
	
	//win.authentification=authentification;
	//Ti.include('/controllers/accueilWin.js');
	//var controller = createController(win);
	return win;
};
