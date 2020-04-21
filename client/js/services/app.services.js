angular
	.module('app.service', [ 'message.service', 'auth.service', 'storage.services', 'helper.service' ])
	.controller('homeController', homeController);
