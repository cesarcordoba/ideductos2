app.controller('mainCtrl', function ($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, anchorSmoothScroll, $location) {

$scope.enviarAhome = () =>{
	$state.go('home')
}


	$scope.mandarContacto = (eID) =>{

      
      anchorSmoothScroll.scrollTo(eID);

    }


});
