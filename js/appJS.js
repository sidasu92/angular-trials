// closure
(function(){
  var gems = [
    {
      name: "Sid's Gem",
      value: "49.99",
      description: "This is my gem.",
      canPurchase: true,
      image: "images/boy.jpg",
      description: "I am Sidhant's avatar. Lorem ipsum pifsum",
      specification: "",
      review: "One of it's kind."

    },
    {
      name: "Sun's Gem",
      value: "99.99",
      description: "This is her gem.",
      canPurchase: true,
      image: "images/girl.jpg",
      description: "This is Sun's avatar. Lorem ipsum pifsum",
      specification: "",
      review: "Unmatched!"
    }
];
  var app = angular.module('gemStore', []);
  app.controller("StoreController", function(){
    this.products = gems;
  });
})();
