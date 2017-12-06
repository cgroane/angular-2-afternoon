angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, $stateParams, mainSrvc){
    // $scope.test = "booked test"
    $scope.allPackages = []
    mainSrvc.getPackages().then(response => {
        $scope.allPackages = response.data
        console.log(response.data)
        if ($stateParams.id) {
            $scope.packageIndex = $scope.allPackages.findIndex((package) => package.id === parseInt($stateParams.id))
        }
        if ($scope.packageIndex !== -1) {
            $scope.package = $scope.allPackages[$scope.packageIndex]
        }
    })
})