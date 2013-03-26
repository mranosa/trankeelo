'use strict';

trankeeloApp.controller('MainCtrl', function($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];

  $('.hero-page').cycle({ 
	    fx:     'scrollDown', 
	    easing: 'easeOutBounce', 
	    delay:  -2000 
	});
});
