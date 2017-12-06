angular.module('devmtnTravel')
.controller('locationCtrl', function($scope, mainSrvc){
    // $scope.test = "location test"
    mainSrvc.getTravel().then(response => $scope.locations = response.data)
})