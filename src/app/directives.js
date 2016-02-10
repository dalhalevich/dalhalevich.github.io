threeInput.directive("mdSumm",function($http){
    return {
        link:function($scope, element, attrs){
            $http.get('http://api.fixer.io/latest').then(
                function success(response) {
                    $scope.currencyList = response.data.rates;
                    $scope.coef = _.result($scope.currencyList,$scope.country);

                    $scope.$watchCollection('numbers',function(){

                        mapNum = function(numbers){
                            return _.map(
                                numbers, function(num){
                                    return Number(num);
                                }
                            );
                        };
                        compNum = function(numbers){
                            return _.compact(numbers);
                        };
                        redNum = function(numbers){
                            return _.reduce(
                                numbers,
                                function(memo,item){
                                    return memo+item;
                                }, 0
                            );
                        };

                        var sum = _.compose(redNum,compNum,mapNum);

                        var input = [
                            '<input placeholder="',
                            sum($scope.numbers),
                            '">'
                        ].join('');

                        var span = [
                            '<span>',
                            $scope.country,
                            ' ',
                            $scope.coef*sum($scope.numbers),
                            '</span>'
                        ].join('');

                        element.html(input+span);})
                });
        }
    }
});