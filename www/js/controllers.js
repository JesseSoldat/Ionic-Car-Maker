angular.module('starter.controllers', [])

.controller('CarsCtrl', function (CarService, $state) {
  
  // console.log('CarsCtrl');

  var vm = this;
  vm.goTo = goTo;
  

  activate();

  function activate() {
    CarService.getCars().then( function(res) {
      console.log(res);
      vm.cars = res.data.results;
    });
  }

  function goTo(id) {
    $state.go('tab.car', {id: id});
  }


})

.controller('CarCtrl', function (CarService, $stateParams) {

  var vm = this;

})

.controller('AddCrtl', function (CarService, $state) {
  var vm = this;
  vm.addCar = addCar;

  function addCar(car) {

  }
})



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
