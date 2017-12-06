angular.module('devmtnTravel')
.controller('packagesCtrl', function($scope, $stateParams, mainSrvc){
    // $scope.test = "package test"
    mainSrvc.getPackages().then(response => {
        $scope.allPackages = response.data
        $scope.packages = $scope.allPackages.filter((x) => x.country === $stateParams.country)
    })
})