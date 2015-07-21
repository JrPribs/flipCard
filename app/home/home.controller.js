(function() {
    'use strict';

    angular
        .module('myApp.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$http', 'flipConfig'];

    function HomeController($http, flipConfig) {
        var vm = this;

        vm.flip = flip;
        data();
        function data(){
            $http.get('./home/github.cards.json').then(function(result){
                console.log(result.data);
                vm.cardData = result.data;
            });
        }

        function flip(element) {
          element.bind('click', function(){
            element.toggleClass('flipped');
          });
        }
    }
})();
