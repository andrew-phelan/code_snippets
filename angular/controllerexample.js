

function myController($scope){
     $scope.stockPrice = [
        {name: "Google", value:"600$"},
        {name: "Microsoft", value:"700$"},
        {name: "VMWare", value:"800$"}
    ];
    $scope.selectedCompany = $scope.stockPrice[0]
    console.log($scope.selectedCompany)
  //Stock price object.
  $scope.alertPrice = function(){
      alert($scope.selectedCompany.name + " " + $scope.selectedCompany.value);
  }
}
