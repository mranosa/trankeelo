'use strict';

trankeeloApp.controller('MainCtrl', function($scope, AuthService) {

  AuthService.init();
  
  $scope.signIn = function(){
    AuthService.login();
  };

  $('.hero-page').cycle({ 
    fx:     'scrollDown', 
    easing: 'easeOutBounce', 
    delay:  -2000 
  });

  

});
