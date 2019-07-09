angular.module('app', [])

.controller('FrameController', ['$injector', function($injector) {
  var vm = this;
  vm.message = 'Hello world';
  vm.title = "Hypno.AI";
  vm.desc = "Our organisation aims to spend the next 10-15 years creating a brain-computing interface."
}]);

setTimeout(function() {
  angular.bootstrap(document.getElementById('body'), ['app']);
});
