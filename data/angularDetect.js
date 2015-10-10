
var angularFound = document.querySelector('.ng-binding, ' +
  '[ng-app], [data-ng-app], ' +
  '[ng-controller], [data-ng-controller], ' +
  '[ng-repeat], [data-ng-repeat]') ||
  document.querySelector('script[src*="angular.js"], ' +
    'script[src*="angular.min.js"]');

var angular2found = document.querySelector("script[src*='angular2.dev.js']") || document.querySelector("script[src*='angular2.js']");


self.port.on("pageChanged", function () {
  if (angularFound) {
    self.port.emit("angularFound");
  }
  else if (angular2found) {
    self.port.emit("angular2Found");
  }
  else if (!angularFound && !angular2found) {
    self.port.emit("noAngular");
  }
});
