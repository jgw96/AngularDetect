var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var self = require("sdk/self");
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");


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
  contentScriptFile: data.url("angularDetect.js")
})

function handleClick(state) {
  tabs.open("https://angularjs.org/");
}

