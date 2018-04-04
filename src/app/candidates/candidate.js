(function () {
    angular.module('app')
        .component('candidate', {
            templateUrl: 'app/candidates/candidate.html',
            bindings: {
                candidate: "<"
            },
            controller: candidateController

        });
    /**@ngInject */
    function candidateController() {
        var $ctrl = this;
        $ctrl.updateText = function (item) {
            console.log("text", item);
            $ctrl.method(item);
        }
        // $ctrl.method = function (item) {
        //     console.log("Method", item);
        // }
        // alert($ctrl.user);
    }
})();