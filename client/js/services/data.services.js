angular
	.module('data.service', [])
	.factory('PegawaiService', PegawaiService)
	.factory('SiswaService', SiswaService)
	.factory('KelulusanService', KelulusanService)
	.factory('TahunAjaranService', TahunAjaranService);

function PegawaiService($http, $q, message, AuthService, helperServices) {
	var url = helperServices.url + '/api/pegawai';
	var service = {
		Items: []
	};

	service.get = function() {
		var def = $q.defer();
		if (service.instance) {
			def.resolve(service.Items);
		} else {
			$http({
				method: 'Get',
				url: url,
				headers: AuthService.getHeader()
			}).then(
				(response) => {
					service.instance = true;
					service.Items = response.data;
					def.resolve(service.Items);
				},
				(err) => {
					message.error(err.data);
					def.reject(err);
				}
			);
		}

		return def.promise;
	};

	service.getById = function(id) {
		var def = $q.defer();
		if (service.instance) {
			var data = service.Items.find((x) => x.idkategori == id);
			def.resolve(data);
		} else {
			$http({
				method: 'Get',
				url: url + '/' + id,
				headers: AuthService.getHeader()
			}).then(
				(response) => {
					service.Items.push(response.data);
					def.resolve(response.data);
				},
				(err) => {
					message.error(err.data);
					def.reject(err);
				}
			);
		}

		return def.promise;
	};

	service.post = function(param) {
		var def = $q.defer();
		$http({
			method: 'Post',
			url: url,
			headers: AuthService.getHeader(),
			data: param
		}).then(
			(response) => {
				service.Items.push(response.data);
				def.resolve(response.data);
			},
			(err) => {
				message.error(err.data);
				def.reject(err);
			}
		);

		return def.promise;
	};

	service.put = function(param) {
		var def = $q.defer();
		$http({
			method: 'Put',
			url: url,
			headers: AuthService.getHeader(),
			data: param
		}).then(
			(response) => {
				var data = service.Items.find((x) => x.idpegawai == param.idpegawai);
				if (data) {
					data.nip = param.nip;
					data.nama = param.nama;
					data.jeniskelamin = param.jeniskelamin;
					data.jabatan = param.jabatan;
					data.alamat = param.alamat;
					data.kontak = param.kontak;
					data.pendidikan = param.penidikan;
				}

				def.resolve(response.data);
			},
			(err) => {
				message.error(err.data);
				def.reject(err);
			}
		);
		return def.promise;
	};

	service.delete = function(id) {
		var def = $q.defer();
		$http({
			method: 'Delete',
			url: url + '/' + id,
			headers: AuthService.getHeader()
		}).then(
			(response) => {
				var data = service.Items.find((x) => x.idpegawai == id);
				if (data) {
					var index = service.Items.indexOf(data);
					service.Items.splice(index, 1);
					def.resolve(true);
				}
			},
			(err) => {
				message.error(err.data);
				def.reject(err);
			}
		);
		return def.promise;
	};

	return service;
}

function SiswaService($http, $q, message, AuthService, helperServices) {
	var url = helperServices.url + '/api/siswa';
	var service = { Items: [] };

	service.get = function() {
		var def = $q.defer();
		if (service.instance) {
			def.resolve(service.Items);
		} else {
			$http({
				method: 'Get',
				url: url,
				headers: AuthService.getHeader()
			}).then(
				(response) => {
					service.instance = true;
					service.Items = response.data;
					def.resolve(service.Items);
				},
				(err) => {
					message.error(err.data);
					def.reject(err);
				}
			);
		}

		return def.promise;
	};

	service.getById = function(id) {
		var def = $q.defer();
		if (service.instance) {
			var data = service.Items.find((x) => x.idkategori == id);
			def.resolve(data);
		} else {
			$http({
				method: 'Get',
				url: url + '/' + id,
				headers: AuthService.getHeader()
			}).then(
				(response) => {
					service.Items.push(response.data);
					def.resolve(response.data);
				},
				(err) => {
					message.error(err.data);
					def.reject(err);
				}
			);
		}

		return def.promise;
	};

	service.post = function(param) {
		var def = $q.defer();
		$http({
			method: 'Post',
			url: url,
			headers: AuthService.getHeader(),
			data: param
		}).then(
			(response) => {
				service.Items.push(response.data);
				def.resolve(response.data);
			},
			(err) => {
				message.error(err.data);
				def.reject(err);
			}
		);

		return def.promise;
	};

	service.put = function(param) {
		var def = $q.defer();
		$http({
			method: 'Put',
			url: url,
			headers: AuthService.getHeader(),
			data: param
		}).then(
			(response) => {
				var data = service.Items.find((x) => x.idsiswa == param.idsiswa);
				if (data) {
					data.nis = param.nis;
					data.nama = param.nama;
					data.jeniskelamin = param.jeniskelamin;
					data.jurusan = param.jurusan;
					data.alamat = param.alamat;
					data.kontak = param.kontak;
					data.kelas = param.kelas;
					data.tempatlahir = param.tempatlahir;
					data.tanggallahir = param.tanggallahir;
				}

				def.resolve(response.data);
			},
			(err) => {
				message.error(err.data);
				def.reject(err);
			}
		);
		return def.promise;
	};

	service.delete = function(id) {
		var def = $q.defer();
		$http({
			method: 'Delete',
			url: url + '/' + id,
			headers: AuthService.getHeader()
		}).then(
			(response) => {
				var data = service.Items.find((x) => x.idsiswa == id);
				if (data) {
					var index = service.Items.indexOf(data);
					service.Items.splice(index, 1);
					def.resolve(true);
				}
			},
			(err) => {
				message.error(err.data);
				def.reject(err);
			}
		);
		return def.promise;
	};

	return service;
}

function TahunAjaranService($http, $q, message, AuthService, helperServices) {
	var url = helperServices.url + '/api/tahunajaran';
	var service = {
		Items: []
	};

	service.get = function() {
		var def = $q.defer();
		if (service.instance) {
			def.resolve(service.Items);
		} else {
			$http({
				method: 'Get',
				url: url,
				headers: AuthService.getHeader()
			}).then(
				(response) => {
					service.instance = true;
					if (!response.data) {
						service.Items = [];
					} else service.Items = response.data;
					def.resolve(service.Items);
				},
				(err) => {
					message.error(err.data);
					def.reject(err);
				}
			);
		}

		return def.promise;
	};

	service.getById = function(id) {
		var def = $q.defer();
		if (service.instance) {
			var data = service.Items.find((x) => x.idtahunajaran == id);
			def.resolve(data);
		} else {
			service.get().then((result) => {
				var data = result.find((x) => x.idtahunajaran == id);
				def.resolve(data);
			});
		}

		return def.promise;
	};

	service.post = function(param) {
		var def = $q.defer();
		$http({
			method: 'Post',
			url: url,
			headers: AuthService.getHeader(),
			data: param
		}).then(
			(response) => {
				service.Items.push(response.data);
				def.resolve(response.data);
			},
			(err) => {
				message.error(err.data);
				def.reject(err);
			}
		);

		return def.promise;
	};

	service.put = function(param) {
		var def = $q.defer();
		$http({
			method: 'Put',
			url: url,
			headers: AuthService.getHeader(),
			data: param
		}).then(
			(response) => {
				var data = service.Items.find((x) => x.idsiswa == param.idtahunajaran);
				if (data) {
					data.tahunajaran = param.tahunajaran;
					data.semester = param.semester;
					data.status = param.status;
				}
				def.resolve(response.data);
			},
			(err) => {
				message.error(err.data);
				def.reject(err);
			}
		);
		return def.promise;
	};

	service.delete = function(param) {
		var def = $q.defer();
		$http({
			method: 'Delete',
			url: url + '/' + param,
			headers: AuthService.getHeader()
		}).then(
			(response) => {
				var index = service.Items.indexOf(param);
				service.Items.splice(index, 1);
				def.resolve(response.data);
			},
			(err) => {
				message.error(err.data);
				def.reject(err);
			}
		);
		return def.promise;
	};

	return service;
}

function KelulusanService($http, $q, message, AuthService, helperServices) {
	var url = helperServices.url + '/api/kelulusan';
	var service = {
		Items: []
	};

	service.get = function() {
		var def = $q.defer();
		if (service.instance) {
			def.resolve(service.Items);
		} else {
			$http({
				method: 'Get',
				url: url,
				headers: AuthService.getHeader()
			}).then(
				(response) => {
					service.instance = true;
					service.Items = response.data;
					def.resolve(service.Items);
				},
				(err) => {
					message.error(err.data);
					def.reject(err);
				}
			);
		}

		return def.promise;
	};

	service.getById = function(id) {
		var def = $q.defer();
		if (service.instance) {
			var data = service.Items.find((x) => x.idkelulusan == id);
			def.resolve(data);
		} else {
			service.get().then((result) => {
				var data = result.find((x) => x.idkelulusan == id);
				def.resolve(data);
			});
		}

		return def.promise;
	};

	service.post = function(param) {
		var def = $q.defer();
		$http({
			method: 'Post',
			url: url,
			headers: AuthService.getHeader(),
			data: param
		}).then(
			(response) => {
				service.Items.push(response.data);
				def.resolve(response.data);
			},
			(err) => {
				message.error(err.data);
				def.reject(err);
			}
		);

		return def.promise;
	};

	service.put = function(param) {
		var def = $q.defer();
		$http({
			method: 'Post',
			url: url,
			headers: AuthService.getHeader(),
			data: param
		}).then(
			(response) => {
				var data = service.Items.find((x) => x.idsiswa == param.idsiswa);
				if (data) {
					data.nis = param.nis;
					data.nama = param.nama;
					data.jeniskelamin = param.jeniskelamin;
					data.jurusan = param.jurusan;
					data.alamat = param.alamat;
					data.kontak = param.kontak;
					data.kelas = param.kelas;
					data.tempatlahir = param.tempatlahir;
					data.tanggallahir = param.tanggallahir;
				}
				def.resolve(response.data);
			},
			(err) => {
				message.error(err.data);
				def.reject(err);
			}
		);
		return def.promise;
	};

	service.delete = function(param) {
		var def = $q.defer();
		$http({
			method: 'Delete',
			url: url + '/' + param,
			headers: AuthService.getHeader()
		}).then(
			(response) => {
				var index = service.Items.indexOf(param);
				service.Items.splice(index, 1);
				def.resolve(response.data);
			},
			(err) => {
				message.error(err.data);
				def.reject(err);
			}
		);
		return def.promise;
	};

	return service;
}
