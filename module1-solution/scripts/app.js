(function() {
  'use strict';
  angular
    .module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchitems = "";
    $scope.message = "";
	
    $scope.CheckLunchItem = function() {
      $scope.message = messageForLunchitems($scope.lunchitems);
      $scope.messageClass = MessageClass($scope.lunchitems);
    };
    $scope.ClearData = function() {
      $scope.message = "";
      $scope.messageClass = "text-success";
    }
  }
  function messageForLunchitems(lunchitems) {
    if (lunchitems.trim() == "") {
      return "Please enter data first";
    }
    else if (numberOflunchItems(lunchitems) <= 3) {
      return "Enjoy!";
    }
    else {
      return "Too much!";
    }
  }
  function MessageClass(lunchitems) {
    if (lunchitems.trim() == "") {
      return "text-danger";
    }
    else {
      return "text-success";
    }
  }
  function numberOflunchItems(lunchitems) {
    var items = lunchitems.split(",");
    var numberOfItems = 0;
    for (var i = 0; i < items.length; i++) {
      if (items[i].trim() != "") {
        numberOfItems ++;
      }
    }
    return numberOfItems;
  }
}
)();
