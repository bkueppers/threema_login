var password = 'SESSION_PASSWORD';
var timeout = 2000;

var login = function() {
	if (document.body.innerHTML.indexOf('Reconnecting session') != -1){
		document.getElementsByTagName('input')[0].value = password;
		document.getElementsByTagName('input')[0].dispatchEvent(new Event('input'));
		document.getElementsByTagName('button')[0].click();
		reload();
	}
	
	if (document.body.innerHTML.indexOf('Connection to server has been closed') != -1){
		refresh();
	}
	
	setTimeout(login, timeout);
}

var refresh = function() {
	Array.from(document.getElementsByTagName('button')).pop().click();
}

var reload = function() {
	if (document.body.innerHTML.indexOf('Connecting seems to take longer than usual') != -1){
		refresh();
	} else if(document.getElementsByClassName('my-identity').length == 0){
		setTimeout(reload, timeout);
	}
}

login();
