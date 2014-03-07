var _ = require("/lib/underscore");
var platform= Ti.Platform.osname;
var applyDefaults = function(params, defaults) {
	params = params || {};
	_.defaults(params, defaults);
};

exports.createWindow = function(params) {
	params = params || {};

	var defaults = {
		layout : 'vertical',
		title:'authentification ',
    	//backgroundImage:'/images/back.png',
    	backgroundColor:"#FF7F50",
   		barColor : '#121212',
	};
	applyDefaults(params, defaults);
	return Ti.UI.createWindow(params);
};

exports.createNavBar = function(title) {

	var titleView = Ti.UI.createView({
		top : 0,
		//backgroundImage : '/images/androidTitleBarBlack.png',
		height : '44dp',
		backgroundColor:"#218868"
		//	width : "100%"
	});
	var labelTitle = Ti.UI.createLabel({
		font : {
			fontSize : '20dp',
			fontWeight : 'bold'
		},
		color : "#fff",
		text : title,
		textAlign : 'center',
		//width : 100
	});
	titleView.add(labelTitle);
	return titleView;
};

exports.createLabelIntro = function(params) {
	params = params || {};

	var defaults = {
		top: '10dp',
	color:'#111',
	text:'username',
	textAlign:'center',
	
	height: Ti.UI.SIZE,
	font : {
			fontWeight:'bold'
			
		}
	};
	if(platform=="ipad")
	{
		defaults.width='70%';
		
	}
	applyDefaults(params, defaults);
	return Ti.UI.createLabel(params);

};

exports.createLabel = function(params) {
	params = params || {};

	var defaults = {
	top : '10dp',
		left : '35dp',
		color : 'white',
		text : 'password',
		font : {
			fontSize : '14dp',
			fontWeight : 'bold',
			fontFamily:'OpenSans , Helvetica Neue, Gill Sans MT, Trebuchet MS',

		}
	};
	applyDefaults(params, defaults);
	return Ti.UI.createLabel(params);

};
exports.createTextField = function(params) {
	params = params || {};

	var defaults = {
	height : '37dp',
		top : '10dp',
		width : '80%',
		backgroundColor:"white",
		color:"black",
		//	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	};
	if(platform=="ipad")
	{
		defaults.width=300;
		
	}
	applyDefaults(params, defaults);
	return Ti.UI.createTextField(params);
};
exports.createButton = function(params) {
	params = params || {};

	var defaults = {
	title : 'Default button',
		
		backgroundColor :"#191970",
		color : 'white',
		height : '37dp',
		//top : '10dp',
		width : '80%',
		
	};
	if(platform=="ipad")
	{
		defaults.width=300;
		
	}
	applyDefaults(params, defaults);
	return Ti.UI.createButton(params);
};
