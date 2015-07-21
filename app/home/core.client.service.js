(function() {
    'use strict';

    angular
        .module('myApp.home')
        .factory('trelloApiFactory', trelloApiFactory);

    trelloApiFactory.$inject = ['$http', 'flipConfig'];

    function trelloApiFactory($http, flipConfig) {
        var service = {
            getJson: getJson
        };

        return service;

        function getJson(flipConfig) {
            // var endpoint = options.endpoint;
            // var id = options.id;
            return $http.get(flipConfig.trelloApi.base + 'boards/5579e92a08c7a3e614bbec01/cards?attachments=true&attachment_fields=name,url&key=' + flipConfig.trelloApi.key + '&token=' + flipConfig.trelloApi.token);
        }
    }
})();
