(function () {
    angular.module('app')
        .component('candidates', {
            templateUrl: 'app/candidates/candidates.html',
            controller: candidatesController
        });
    /**@ngInjectI */
    function candidatesController(AppIndexDbService, AppService, $state, $stateParams, AppFactory) {
        var $ctrl = this;
        activate();
        function activate() {
            // AppIndexDbService.createDb('test', 'demo');
            if ($stateParams.id) {
                serviceCall($stateParams.id);
            }

        }

        function serviceCall(id) {
            AppService.fetchList(id).then(function (responseList) {
                console.log(responseList);
                formatData(responseList)
            }, function (error) {
                $state.go("app");
            });
        }

        function formatData(responseList) {
            var info = {
                "assesment": "",
                "candidate": ""
            }
            responseList.map(function (value, pos) {
                if (value.hasOwnProperty("assessmentInfo")) {
                    assessmentFormat(value.assessmentInfo);
                }
                if (value.hasOwnProperty("candidateInfo")) {
                    candidateFormat(value.candidateInfo);
                }
            });
        }

        function assessmentFormat(assesment) {
            delete assesment["language"];
            AppFactory.setItem(assesment.assessmentId, JSON.stringify(assesment));
        }
        function candidateFormat(candidateList) {
            $ctrl.candidateList = candidateList;
            candidateList.map(function (value, pos) {
                AppFactory.setItem(value.candidateId, JSON.stringify(value));
            })
        }


    }
})();