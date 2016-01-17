'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    var $httpBackend, scope;

    it('should get a token', inject(function($controller, _$httpBackend_, $rootScope) {

      $httpBackend = _$httpBackend_;

      $httpBackend.expectGET("http://localhost:9001/tokens").respond({"workerToken":"123"});

      scope = $rootScope.$new();

      //spec body
      var view1Ctrl = $controller('View1Ctrl', {
        $scope: scope
      });
      expect(view1Ctrl).toBeDefined();
      $httpBackend.flush();
    }));

  });
});