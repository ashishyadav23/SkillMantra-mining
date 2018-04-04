(function () {
    angular.module('app')
        .service('AppService', AppService);
    /**@ngInject */
    function AppService($http, $q) {
        var url = "https://admin.skillsmantra.org/index.php/assessments/offlineargs/"
        return {
            fetchList: fetchList
        }

        function serviceGetCall(serviceUrl) {
            var defer = $q.defer();
            $http.get(serviceUrl).then(function (success) {
                if (success.hasOwnProperty('data'))
                    defer.resolve(success.data);

            }, function (error) {
                defer.reject(error);
            });
            return defer.promise;
        }

        function fetchList(id) {
            var serviceUrl = url + id;
            return serviceGetCall(serviceUrl);
        }



    }
})();