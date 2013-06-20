var scopeGlobal;

function myController($scope){
  console.log("First: Inside AngularJS Controller: called when DOM tree is created");
  
  //Stock price object.
    $scope.stockPrice = {
        "Google":  "600$",
        "Microsoft": "400$",
        "VMWare": "500$"
    };

    $scope.selectedCompany = "VMWare";

    scopeGlobal = $scope;
}

function subscribeBtnClicked(){
    alert("Mail id:  " + scopeGlobal.emailId);
}

function onDomLoaded(){
  console.log("Second: Inside HTML onload, called when DOM is rendered");
}
