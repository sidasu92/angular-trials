// closure
(function(){
  var gem = {
    name: "Sid's Gem",
    value: "49.99",
    description: "This is my gem."
  };
  var app = angular.module('gemStore', []);
  app.controller("StoreController", function($scope){
    $scope.product = gem;
  });
})();
