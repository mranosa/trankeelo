'use strict';

trankeeloApp.factory('AuthService', function() {
	var USERS_URL = 'https://trankeelo.firebaseIO.com/users';
	var totalUsersRef = new Firebase('https://trankeelo.firebaseIO.com/metrics/total_users');
	var trankeeloRef = new Firebase('https://trankeelo.firebaseIO.com');
	var authClient = undefined;

	var AuthService = function() {
		
	};

	AuthService.prototype = {
		init: function(){
			authClient = new FirebaseAuthClient(trankeeloRef, function(error, user) {
				if (!error) {
					console.log(user);
				}
			});
		},
		login: function(){
			authClient.login('facebook');
		}
	}

	return new AuthService();
});
