angular.module("app",[])

.controller("app.controller", function ($scope) {
    $scope.test="aldrich";
    alert($scope.test);    
});