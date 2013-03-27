'use strict';

trankeeloApp.factory('UsersCountService', function() {
	var totalUsersRef = new Firebase('https://trankeelo.firebaseIO.com/metrics/total_users');
	var myCounter = undefined;

	var UsersCountService = function() {

		totalUsersRef.once('value', function(snapshot) {
			myCounter = new flipCounter('flip-counter', {value: snapshot.val()});
		});

		totalUsersRef.on('value', function(snapshot) {
			myCounter.incrementTo(snapshot.val());
		});
	};

	UsersCountService.prototype = {
		// init: function(){
			
		// }
	}

	return new UsersCountService();
});
