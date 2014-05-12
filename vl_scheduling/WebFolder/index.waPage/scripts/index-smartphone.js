
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var login1 = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		//alert("Successfully Connected");
		$$('navigationView1').show();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("login1", "login", login1.login, "WAF");
// @endregion
};// @endlock
