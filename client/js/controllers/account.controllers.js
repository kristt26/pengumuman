angular.module('account.controller', []).controller('LoginController', LoginController);

function LoginController($scope, $state, AuthService) {
	$scope.login = function(user) {
		$state.go('home');
		// AuthService.login(user).then((x) => {
		// 	$state.go(x.role + '-home');
		// });
	};
}
