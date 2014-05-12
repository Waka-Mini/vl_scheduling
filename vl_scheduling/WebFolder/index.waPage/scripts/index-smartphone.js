
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var login1 = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		 sources.vl4d.DoubleSalary({ 
            onSuccess:function(event){
                //sources.employees.allEntities();
            }});
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		//alert("Successfully Connected");
		$$('navigationView1').show();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
// @endregion
};// @endlock
