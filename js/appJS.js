// closure
(function() {
    var gems = [{
            name: "Sid's Gem",
            value: "49.99",
            description: "This is my gem.",
            canPurchase: true,
            image: "images/boy.jpg",
            description: "I am Sidhant's avatar. Lorem ipsum pifsum",
            specification: "",
            reviews: [{
                    stars: 5,
                    body: "I love <3",
                    author: "sid@asu.com"
                },
                {
                    stars: 5,
                    body: "Aweosmely awesome!!!",
                    author: "asu@sid.com"
                }
            ]

        },
        {
            name: "Sun's Gem",
            value: "99.99",
            description: "This is her gem.",
            canPurchase: true,
            image: "images/girl.jpg",
            description: "This is Sun's avatar. Lorem ipsum pifsum",
            specification: "",
            reviews: [{
                    stars: 5,
                    body: "Wow, just WOW!",
                    author: "sid@asu.com"
                },
                {
                    stars: 5,
                    body: "<3 love <3",
                    author: "asu@sid.com"
                }
            ]
        }
    ];
    var app = angular.module('gemStore', []);
    app.controller("StoreController", function() {
        this.products = gems;
    });

    // app.controller("PanelController", function() {
    //     // initialize tab = 1
    //     //property of the tab
    //     this.tab = 1;
    //
    //     //function expression to set tab values on click
    //     this.selectTab = function(setTab) {
    //         this.tab = setTab;
    //     };
    //
    //     //function expression to set the tab as active
    //     this.isSelectedTab = function(curTab) {
    //         return curTab === this.tab;
    //     };
    // });

    app.controller("ReviewController", function() {
        // empty object
        this.review = {};

        // to add review in the products
        this.addReview = function(product) {
          product.reviews.push(this.review);
          //clear the review object
          this.review = {};
        };
    });

    app.directive('productDetails', function(){
      return {
        restrict: 'E',
        templateUrl: "product-details.html"
      };
    });

    app.directive('panelDetails', function () {
      return {
        restrict: 'E',
        templateUrl: "panel-details.html",
        controller: function() {
          // initialize tab = 1
          //property of the tab
          this.tab = 1;
          //function expression to set tab values on click
          this.selectTab = function(setTab) {
              this.tab = setTab;
          };
          //function expression to set the tab as active
          this.isSelectedTab = function(curTab) {
              return curTab === this.tab;
          };
        },
        controllerAs: "panel"
      };
    });

    app.directive('reviewForm', function(){
      return {
        restrict: 'E',
        templateUrl: 'review-form.html',
        controller: function() {
          // empty object
          this.review = {};

          // to add review in the products
          this.addReview = function(product) {
            product.reviews.push(this.review);
            //clear the review object
            this.review = {};
          };
        },
        controllerAs: 'reviewCtrl'
      };
    });
})();
