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
		$scope.model.tanggallahir = new Date(model.tanggallahir);
		$scope.title = 'Edit Siswa';
	};
	$scope.save = (model) => {
		$scope.helper.IsBusy = true;
		if (model.idsiswa) {
			SiswaService.put(model).then(
				(x) => {
					$scope.helper.IsBusy = false;
				},
				(err) => {
					$scope.helper.IsBusy = false;
				}
			);
		} else {
			SiswaService.post(model).then(
				(result) => {
					$scope.helper.IsBusy = false;
				},
				(err) => {
					$scope.helper.IsBusy = false;
				}
			);
		}
	};

	$scope.delete = (item) => {
		message.dialog().then(
			(x) => {
				SiswaService.delete(item.idsiswa).then((x) => {});
			},
			(err) => {}
		);
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
		$scope.helper.IsBusy = true;
		if (model.idpegawai) {
			PegawaiService.put(model).then(
				(x) => {
					$scope.helper.IsBusy = false;
				},
				(err) => {
					$scope.helper.IsBusy = false;
				}
			);
		} else {
			PegawaiService.post(model).then(
				(result) => {
					$scope.helper.IsBusy = false;
				},
				(err) => {
					$scope.helper.IsBusy = false;
				}
			);
		}
	};

	$scope.delete = (item) => {
		message.dialog().then((x) => {}, (err) => {});
	};
}
function adminKelulusanController($scope, KelulusanService, message, helperServices, SiswaService) {
	$scope.helper = helperServices;

	SiswaService.get().then((siswas) => {
		$scope.Lulus = siswas.filter((x) => x.idpengumuman);
		$scope.BelumLulus = siswas.filter((x) => !x.idpengumuman);
	});

	$scope.edit = (model) => {
		$scope.model = angular.copy(model);
		$scope.title = 'Edit Kelulusan';
	};
	$scope.save = (model) => {
		$scope.helper.IsBusy = true;
		if (model.idpegawai) {
			KelulusanService.put(model).then(
				(x) => {
					$scope.helper.IsBusy = false;
				},
				(err) => {
					$scope.helper.IsBusy = false;
				}
			);
		} else {
			KelulusanService.post(model).then(
				(result) => {
					$scope.helper.IsBusy = false;
				},
				(err) => {
					$scope.helper.IsBusy = false;
				}
			);
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
		$scope.model.tanggallahir = new Date(model.tanggallahir);
		$scope.title = 'Edit Pegawai';
	};
	$scope.save = (model) => {
		$scope.helper.IsBusy = true;
		if (model.idpegawai) {
			TahunAjaranService.put(model).then(
				(x) => {
					$scope.helper.IsBusy = false;
				},
				(err) => {
					$scope.helper.IsBusy = false;
				}
			);
		} else {
			TahunAjaranService.post(model).then(
				(result) => {
					$scope.helper.IsBusy = false;
				},
				(err) => {
					$scope.helper.IsBusy = false;
				}
			);
		}
	};

	$scope.delete = (item) => {
		message.dialog().then((x) => {}, (err) => {});
	};
}

function adminHomeController($scope, $state, AuthService) {}
