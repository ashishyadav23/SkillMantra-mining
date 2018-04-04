(function () {
    angular.module('app')
        .factory('AppFactory', AppFactory);
    /**@ngInject */
    function AppFactory($window) {
        var localStorage = $window.localStorage;
        return {
            setItem: setItem,
            getItem: getItem,
            removeItem: removeItem,
            getAll: getAll,
            clearAll: clearAll
        }
        function setItem(key, data) {
            if (!getItem(key))
                localStorage.setItem(key, JSON.stringify(data));
        }
        function getItem(key) {
            return JSON.parse(localStorage.getItem(key));
        }
        function removeItem(key) {
            if (getItem(key)) {
                localStorage.removeItem(key);
                return true
            }

        }
        function getAll() {
            var list = [];
            var keys = Object.keys(localStorage), i = keys.length;
            keys.map(function (value, i) {
                list.push(getItem(keys[i]));
            });
            return list;

        }
        function clearAll() {
            localStorage.clear();
            return true;
        }
    }
})();