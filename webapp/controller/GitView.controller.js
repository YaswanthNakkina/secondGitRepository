sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	//Strict Mode
	"use strict";
	
	return Controller.extend("practice.myGitDemo.controller.GitView", {
		onInit: function () {

		},
		onUpdate: function(){
			sap.m.MessageToast.show("Fruits For cheap");
		}
	});
});