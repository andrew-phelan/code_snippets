function DataListCtrl($scope, $http) {
  $http.get('data/data.json').success(function(data) {
    $scope.data = data;
  });

    $scope.orderProp = 'age';
}

$scope.orderProp = 'age';
}
