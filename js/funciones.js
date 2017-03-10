var BacoB = angular.module('BacoB', []);
	BacoB.controller('Mensaje', function($scope){})

	BacoB.controller('Operaciones', function($scope){
		$scope.num1= 10
		$scope.num2= 20
		$scope.multiplicacion = $scope.num1 * $scope.num2
	});

