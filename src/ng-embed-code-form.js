'use strict';

angular.module('mvsouza.ng-embed-code-form', []).directive('ngEmbedCodeForm', function () {
  var value = 0;

  return {
    restrict: 'AE',
    templateUrl: 'ng-embed-code-form.html',
    replcae: true,
    link: function ($scope, element, attr) {
      $scope.tmp = attr.template;

      $scope.getValue = function () {
        return value;
      };
      $scope.increment = function () {
        value++;
      };
    }
  };
});