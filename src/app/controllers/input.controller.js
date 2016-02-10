threeInput.controller('threeInputCtrl', function($scope, $routeParams, $location, $http){
    var hash = '_';
    $scope.numbers = $routeParams.numbers.split(hash); $scope.numbers.shift();
    $scope.country = 'CAD';

    $scope.updateUrl = function(){
        $location.url(_.reduce($scope.numbers,function(memo,item){return memo+hash+item;},""))};
});