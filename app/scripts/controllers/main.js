'use strict';

trankeeloApp.controller('MainCtrl', ['$scope', 'AuthService', 'UsersCountService',
  function($scope, AuthService, UsersCountService) {

  $scope.signIn = function(){
    AuthService.login();
  };

  $('.hero-page').cycle({ 
    fx:     'scrollDown', 
    easing: 'easeOutBounce', 
    delay:  -2000 
  });

}]);
