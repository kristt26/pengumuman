angular
	.module('admin.controller', [])
	.controller('adminController', adminController)
	.controller('adminSiswaController', adminSiswaController)
	.controller('adminPegawaiController', adminPegawaiController)
	.controller('adminKelulusanController', adminKelulusanController)
	.controller('adminTahunAjaranController', adminTahunAjaranController)
	.controller('adminHomeController', adminHomeController);

function adminController($scope, $state, AuthService) {}
function adminSiswaController($scope, $state, AuthService, PegawaiService, message, SiswaService) {
	SiswaService.get().then((result) => {
		$scope.source = result;
	});

	$scope.edit = (model) => {
		$scope.model = angular.copy(model);
		$scope.title = 'Edit Siswa';
	};
	$scope.save = (model) => {
		if (model.idpegawai) {
		}
	};

	$scope.delete = (item) => {
		message.dialog().then((x) => {}, (err) => {});
	};
}
function adminPegawaiController($scope, $state, AuthService, PegawaiService, message, PegawaiService) {
	PegawaiService.get().then((result) => {
		$scope.source = result;
	});

	$scope.edit = (model) => {
		$scope.model = angular.copy(model);
		$scope.title = 'Edit Pegawai';
	};
	$scope.save = (model) => {
		if (model.idpegawai) {
		}
	};

	$scope.delete = (item) => {
		message.dialog().then((x) => {}, (err) => {});
	};
}
function adminKelulusanController($scope, $state, AuthService) {}
function adminTahunAjaranController($scope, $state, AuthService) {}

function adminHomeController($scope, $state, AuthService) {}
