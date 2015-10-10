var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var self = require("sdk/self");
var pageMod = require("sdk/page-mod");
var notifications = require("sdk/notifications");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "AngularDetect",
  icon: {
    "16": "./angularSmall.png",
    "32": "./angularSmall.png",
    "64": "./angularSmall.png"
  },
  disabled: true
});



pageMod.PageMod({
  include: "*",
  contentScriptFile: self.data.url("angularDetect.js"),

  onAttach: function (worker) {
    worker.port.emit("pageChanged");  

    worker.port.on("angularFound", function () {
      button.disabled = false;
      button.label = "AngularJS 1.*.* found";
    })
    
    worker.port.on("angular2Found", function () { 
      button.disabled = false;
      button.label = "Angular 2 found";
    })
    
    worker.port.on("noAngular", function() {
      button.disabled = true;
      button.label = "AngularJS is not used on this page";
    })
    
  }

})

