angular
  .module('app')
  .component('dashboard', {
    templateUrl: 'app/dashboard/dashboard.html',
    controller: DashboardController
  });

/** @ngInject */
function DashboardController(AppService, $state) {
  var $ctrl = this;
  activate();
  function activate() {
    $ctrl.id = "";
    $ctrl.showSubmitbtn = true;
    methods();
  }
  function methods() {
    $ctrl.fetchInfo = fetchInfo;
  }
  function fetchInfo(id) {
    $ctrl.showSubmitbtn = false;
    $state.go("candidate", { "id": id })
  }

}
