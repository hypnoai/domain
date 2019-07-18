angular.module('app', [])

.controller('FrameController', ['$injector', function($injector) {
  var vm = this;
  vm.message = 'Hello world';
  vm.title = "Hypno.AI";
  vm.desc = "Bringing the web to hypnosis.";
  vm.contactAddress = "v@hypno.ai";
}]);

setTimeout(function() {
  angular.bootstrap(document.getElementById('body'), ['app']);
});
