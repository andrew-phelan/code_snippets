var scopeGlobal;

function myController($scope){
  //Stock price object.
	$scope.topic = {
        "Help1":  "Text, Text Text Text",
        "Help2": "Text Text Text",
        "Help3": "Text"
	};

  //Select VMWare by default
	$scope.selectedHelp = "Help3";

  //Store $scope in a global variable so that subscribeBtnClicked() 
  //which is not part of controller code can also see values of scope
	scopeGlobal = $scope;
}

