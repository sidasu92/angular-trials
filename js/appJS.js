// closure
(function(){
  var gems = [
    {
      name: "Sid's Gem",
      value: "49.99",
      description: "This is my gem.",
      canPurchase: true,
      image: "images/boy.jpg"
    },
    {
      name: "Sun's Gem",
      value: "99.99",
      description: "This is her gem.",
      canPurchase: true,
      image: "images/girl.jpg"
    }
];
  var app = angular.module('gemStore', []);
  app.controller("StoreController", function(){
    this.products = gems;
  });
})();
