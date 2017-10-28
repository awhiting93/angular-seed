'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    controllerAs: 'ctrl',
    bindToController: true
  });
}])

.controller('View2Ctrl', ['$window', function($window) {
  let self = this;

  self.viewTitle = 'View Title';
  self.viewTitle2 = self.viewTitle.split(' ');

  if(self.viewTitle2[0] + self.viewTitle2[1] === 'ViewTitle'){
    $window.alert('You are doing it right!');
    console.log('You are doing it right in the console as well');
    console.log('View title 1 is: ', self.viewTitle);
    console.log('View title 2 is: ', self.viewTitle2[0] + self.viewTitle2[1]);
  }
}]);