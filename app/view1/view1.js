'use strict';

  angular.module('myApp.view1', ['ngRoute', 'ui.bootstrap', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'tokenFactory', function($scope, tokenFactory) {

  $scope.token = tokenFactory.get().$promise.then(function(response) {
    $scope.token = response;

    window.worker = new Twilio.TaskRouter.Worker($scope.token.workerToken);

    registerTaskRouterCallbacks();
    bindAgentActivityButtons();

  });

}])
.directive('aGreatEye', function () {
  return {
    restrict: 'E',
    replace: true,
    template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
  };
})
    .factory('tokenFactory', [ '$resource', function($resource) {
      return $resource('http://localhost:9001/tokens/:id', null);
    }]);