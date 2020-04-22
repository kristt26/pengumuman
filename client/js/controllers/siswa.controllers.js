angular.module('siswa.controller', []).controller('siswaController', siswaController);

function siswaController($scope, $state, AuthService) {
	if (!AuthService.userIsLogin()) {
		$state.go('login');
	}
}
