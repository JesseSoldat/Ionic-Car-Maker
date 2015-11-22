angular.module('starter.services', [])

.service('CarService', function ($http, PARSE) {

  var url = PARSE.URL + 'classes/car';

  this.getCars = getCars;
  this.getCar = getCar;
  this.addCar = addCar;


  function getCars() {
    return $http.get(url, PARSE.CONFIG);
  }

  function Car(obj) {
    this.name = obj.name;
    this.make = obj.make;
    this.model = obj.model;
    this.year = Number(obj.year);
    this.ionic = true;
  }

  function getCar(carId) {
    return $http.get(url + '/' + carId, PARSE.CONFIG);
  }

  function addCar(carObj) {
    var car = new Car(carObj);
    return $http.post(url, car, PARSE.CONFIG);
  }


});
