angular.module('siswa.controller', []).controller('siswaController', siswaController);

function siswaController($scope, $state, AuthService, StorageService, TahunAjaranService) {
	if (!AuthService.userIsLogin()) {
		$state.go('login');
	} else {
		$scope.siswa = StorageService.getObject('user');
		TahunAjaranService.getById($scope.siswa.biodata.idtahunajaran).then((tahun) => {
			$scope.tahun = tahun.tahunajaran;
		});
	}
}
