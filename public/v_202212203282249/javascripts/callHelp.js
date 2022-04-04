//Copyright Patrick Roebuck roebuck@v-page.com www.v-page.com
var newWindow;
var newWindowSimple;
var helpWindow;
var helpWindowSimple;
var strProjectFramesPagePlus = "help.htm#";//defines the name of the start or frameset page for the WebHelp project
var strProjectPath;
var strHelpPage;
var isNav4 = (navigator.appName == "Netscape" && parseInt(navigator.appVersion) == 4);

//opens new window with URL strProjectPath + "help.htm#" + strHelpPage
function callHelp(strProjectPath,strHelpPage){
	var strTriHelpWindowOptions = ",toolbar=yes";//defines whether to display the toolbar (yes) or hides it (no)
	strTriHelpWindowOptions += ",top=40";//defines the distance from the top of the screen that the browser window is opened
	strTriHelpWindowOptions += ",left=25";//defines the distance from the left of the screen that the browser window is opened
	strTriHelpWindowOptions += ",width=850";//defines the width of the browser window
	strTriHelpWindowOptions += ",height=520";//defines the height of the browser window
	strTriHelpWindowOptions += ",scrollbars=1";//defines whether to allow scrollbars
	strTriHelpWindowOptions += ",menubar=1";//defines whether to show the menu bar
	strTriHelpWindowOptions += ",resizable=yes";//defines whether the window is resizable
	strTriHelpWindowOptions += ",location=yes";//defines whether the location entry bar shows so you can enter a URL
	if (isNav4){helpWindow = window.open("", newWindow, strTriHelpWindowOptions);
	if (helpWindowSimple && !helpWindowSimple.closed){helpWindowSimple.close();}
	helpWindow.close();
	helpWindow = window.open("", newWindow, strTriHelpWindowOptions);
	helpWindow.location.href = strProjectPath + strProjectFramesPagePlus + strHelpPage;
	helpWindow.focus();
	}
	else if (helpWindow == null || helpWindow.closed){
	if (helpWindowSimple && !helpWindowSimple.closed){helpWindowSimple.close();}
	helpWindow = window.open("", newWindow, strTriHelpWindowOptions);
	helpWindow.location.href = strProjectPath + strProjectFramesPagePlus + strHelpPage;
	}
	else if (helpWindow && !helpWindow.closed){
	if (helpWindowSimple && !helpWindowSimple.closed){helpWindowSimple.close();}
	helpWindow.location.href = strProjectPath + strProjectFramesPagePlus + strHelpPage;
	helpWindow.focus();
	}
}

//opens new window with URL strProjectPath + strHelpPage
function callHelpSimple(strProjectPath,strHelpPage){
	var strSingleHelpWindowOptions = ",toolbar=no";//defines whether to display the toolbar (yes) or hides it (no)
	strSingleHelpWindowOptions += ",top=40";//defines the distance from the top of the screen that the browser window is opened
	strSingleHelpWindowOptions += ",left=225";//defines the distance from the left of the screen that the browser window is opened
	strSingleHelpWindowOptions += ",width=550";//defines the width of the browser window
	strSingleHelpWindowOptions += ",height=500";//defines the height of the browser window
	if (isNav4){helpWindowSimple = window.open("", newWindowSimple, strSingleHelpWindowOptions);
	if (helpWindow && !helpWindow.closed){helpWindow.close();}
	helpWindowSimple.close();
	helpWindowSimple = window.open("", newWindowSimple, strSingleHelpWindowOptions);
	helpWindowSimple.location.href = strProjectPath + strHelpPage;
	helpWindowSimple.focus();
	}
	else if (helpWindowSimple == null || helpWindowSimple.closed){
	if (helpWindow && !helpWindow.closed){helpWindow.close();}
	helpWindowSimple = window.open("", newWindowSimple, strSingleHelpWindowOptions);
	helpWindowSimple.location.href = strProjectPath  + strHelpPage;
	}
	else if (helpWindowSimple && !helpWindowSimple.closed){
	if (helpWindow && !helpWindow.closed){helpWindow.close();}
	helpWindowSimple.parent.location.href = strProjectPath + strHelpPage;
	helpWindowSimple.focus();
	}
}

