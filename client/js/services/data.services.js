angular
	.module('data.service', [])
	.factory('PegawaiService', PegawaiService)
	.factory('SiswaService', SiswaService)
	.factory('KelulusanService', KelulusanService)
	.factory('TahunAjaranService', TahunAjaranService);

function PegawaiService($http, $q, message, AuthService, helperServices) {
	var url = helperServices.url + '/api/pegawai';
	var service = {
		instance: true,
		Items: [
			{ idpegawai: 1, nip: 123123, nama: 'Yoseph Kungkung', jeniskelamin: 'Pria' },
			{ idpegawai: 2, nip: 123123, nama: 'Ajenk Kungkung', jeniskelamin: 'Pria' },
			{ idpegawai: 3, nip: 123123, nama: 'Aldrich Kungkung', jeniskelamin: 'Pria' }
		]
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
			url: url + '/' + param.idkategori,
			headers: AuthService.getHeader(),
			data: param
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

function SiswaService($http, $q, message, AuthService, helperServices) {
	var service = {};

	var url = helperServices.url + '/api/siswa';
	var service = {
		instance: true,
		Items: [
			{
				idsiswa: 1,
				nis: 123123,
				nama: 'Yoseph Kungkung',
				jeniskelamin: 'Pria',
				tanggallahir: new Date(),
				tempatlahir: 'Palopo'
			},
			{ idsiswa: 2, nis: 123123, nama: 'Ajenk Kungkung', jeniskelamin: 'Pria' },
			{ idsiswa: 3, nis: 123123, nama: 'Elisabeth Hamid', jeniskelamin: 'Wanita' }
		]
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
			url: url + '/' + param.idkategori,
			headers: AuthService.getHeader(),
			data: param
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

function TahunAjaranService($http, $q, message, AuthService, helperServices) {
	var service = {};

	var url = helperServices.url + '/api/tahunajaran';
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
			url: url + '/' + param.idkategori,
			headers: AuthService.getHeader(),
			data: param
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
	var service = {};

	var url = helperServices.url + '/api/kelulusan';
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
			url: url + '/' + param.idkategori,
			headers: AuthService.getHeader(),
			data: param
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
