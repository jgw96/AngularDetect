var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var self = require("sdk/self");
var pageMod = require("sdk/page-mod");
var notifications = require("sdk/notifications");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit AngularJS",
  icon: {
    "16": "./angularSmall.png",
    "32": "./angularSmall.png",
    "64": "./angularSmall.png"
  },
  onClick: handleClick
});

pageMod.PageMod({
  include: "*",
  contentScriptFile: self.data.url("angularDetect.js"),

  onAttach: function (worker) {
    worker.port.emit("pageChanged");

    worker.port.on("angularFound", function () {
      notifications.notify({
        title: "AngularDetect",
        text: "This page uses AngularJS!",
        onClick: handleClick
      });
    })

  }

})



function handleClick(state) {
  tabs.open("https://angularjs.org/");
}

