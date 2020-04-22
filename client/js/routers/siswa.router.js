angular.module('siswa.router', [ 'ui.router' ]).config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('siswa', {
		url: '/siswa',
		controller: 'siswaController',
		templateUrl: './client/views/siswa/index.html'
	});
});
