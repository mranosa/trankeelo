'use strict';

trankeeloApp.factory('UsersCountService', function() {
	var totalUsersRef = new Firebase('https://trankeelo.firebaseIO.com/metrics/total_users');
	var myCounter = undefined;

	var UsersCountService = function() {

		myCounter = new flipCounter('flip-counter');

		totalUsersRef.once('value', function(snapshot) {
			myCounter.setValue(snapshot.val());
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
