

function newController($scope){
     $scope.customerDetails = [
        {name: "John Doe", income:"30,222", location: "Cardiff", age:"20"},
        {name: "Mary Doe", income:"40,111", location: "London", age:"45"},
        {name: "Frank Jones", income:"15,123", location: "Dublin", age:"35"},
        {name: "Julie Jones", income:"200,000", location: "Cork", age:"22"},
        {name: "Dan Smith", income:"20,000", location: "Galway", age:"30"},
        {name: "Lucy Smith", income:"34,232", location: "Belfast", age:"40"}
    ];
    $scope.selectedCustomer = $scope.customerDetails[0]
    console.log($scope.selectedCompany)
  //Stock price object.
  $scope.fullDetails = function(){
      alert($scope.selectedCustomer.name + " " + $scope.selectedCustomer.income + " " + $scope.selectedCustomer.location + " " + $scope.selectedCustomer.age);
  }
}
