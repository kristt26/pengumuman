angular
	.module('admin.controller', [])
	.controller('adminController', adminController)
	.controller('adminSiswaController', adminSiswaController)
	.controller('adminPegawaiController', adminPegawaiController)
	.controller('adminKelulusanController', adminKelulusanController)
	.controller('adminTahunAjaranController', adminTahunAjaranController)
	.controller('adminHomeController', adminHomeController);

function adminController($scope, $state, AuthService) {}
function adminSiswaController($scope, $state, AuthService) {}
function adminPegawaiController($scope, $state, AuthService, PegawaiService) {
	$scope.edit = (model) => {};
	$scope.save = (model) => {
		if (model.idpegawai) {
		}
	};
}
function adminKelulusanController($scope, $state, AuthService) {}
function adminTahunAjaranController($scope, $state, AuthService) {}

function adminHomeController($scope, $state, AuthService) {}
