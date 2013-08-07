var app = angular.module('table', []);

app.controller('MainCtrl', function($scope) {
  $scope.list = [
                {Label:"Price", Source:"Purchaser", Type:"Euro"}
  ];
  
  $scope.submitList = function () {

    $scope.list.push({Label: $scope.list.Label, Source: $scope.list.Source, Type: $scope.list.Type});

  };

  $scope.addDemand = function(){
       $( "#dialog").dialog();
};

});

