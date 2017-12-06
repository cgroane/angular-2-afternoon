angular.module('devmtnTravel').service('mainSrvc', function($http) {
  this.getTravel = function () {
      return $http.get('https://practiceapi.devmountain.com/api/travel/travel-info')
  }
  this.getPackages = function() {
      return $http.get('https://practiceapi.devmountain.com/api/travel/package-info')
  }
});