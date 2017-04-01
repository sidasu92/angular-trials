// closure
(function(){
  //model
  var app = angular.module("gemStore", []);
  //controller
  app.controller("GemController", function(){
    this.product = gem;
  });
  //variable
  var gem = {
    name: "Sid's Gem",
    value: "49.99",
    description: "This is my gem."
  };
})();
