
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var login2 = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	login2.login = function login2_login (event)// @startlock
	{// @endlock
		alert("Hello");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("login2", "login", login2.login, "WAF");
// @endregion
};// @endlock
