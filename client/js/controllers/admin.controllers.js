angular
	.module('admin.controller', [])
	.controller('adminController', adminController)
	.controller('adminSiswaController', adminSiswaController)
	.controller('adminPegawaiController', adminPegawaiController)
	.controller('adminKelulusanController', adminKelulusanController)
	.controller('adminTahunAjaranController', adminTahunAjaranController)
	.controller('adminHomeController', adminHomeController);

function adminController($scope, $state, AuthService) {}
function adminSiswaController($scope, message, SiswaService, helperServices) {
	$scope.helper = helperServices;
	SiswaService.get().then((result) => {
		$scope.source = result;
	});

	$scope.edit = (model) => {
		$scope.model = angular.copy(model);
		$scope.title = 'Edit Siswa';
	};
	$scope.save = (model) => {
		if (model.idsiswa) {
			SiswaService.put(model).then((x) => {});
		} else {
			SiswaService.post(model).then((x) => {});
		}
	};

	$scope.delete = (item) => {
		message.dialog().then((x) => {}, (err) => {});
	};
}
function adminPegawaiController($scope, PegawaiService, message, PegawaiService, helperServices) {
	$scope.helper = helperServices;
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
function adminKelulusanController($scope, KelulusanService, message, helperServices, SiswaService) {
	$scope.helper = helperServices;

	SiswaService.get().then((siswas) => {
		$scope.Siswas = siswas;
	});

	KelulusanService.get().then((result) => {
		$scope.source = result;
	});

	$scope.edit = (model) => {
		$scope.model = angular.copy(model);
		$scope.title = 'Edit Kelulusan';
	};
	$scope.save = (model) => {
		if (model.idpegawai) {
		}
	};

	$scope.delete = (item) => {
		message.dialog().then((x) => {}, (err) => {});
	};
}
function adminTahunAjaranController($scope, message, TahunAjaranService, helperServices) {
	$scope.helper = helperServices;
	TahunAjaranService.get().then((result) => {
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

function adminHomeController($scope, $state, AuthService) {}
