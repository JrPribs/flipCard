(function() {
    'use strict';

    angular
        .module('myApp')
        .constant('flipConfig', {
            trelloApi: {
                base: 'http://api.trello.com/1/',
                key: 'c471a1bc0d4f79bb3efb9b49347a4c94',
                token: '271e73f97f034c8d93dc53452937147a24b01a1f017a03b4914ae83aa22f3ffb',
            }
        });
})();
