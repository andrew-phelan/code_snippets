
function NewController($scope) {
  $scope.list = [];
  
  $scope.submitList = function () {


    $scope.list.push({Label: $scope.list.label, Source: $scope.list.src, type: $scope.list.type});

  }
}
