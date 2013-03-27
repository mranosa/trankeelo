'use strict';

describe('Service: UsersCountService', function () {

  // load the service's module
  beforeEach(module('trankeeloApp'));

  // instantiate service
  var UsersCountService;
  beforeEach(inject(function(_UsersCountService_) {
    UsersCountService = _UsersCountService_;
  }));

  it('should do something', function () {
    expect(!!UsersCountService).toBe(true);
  });

});
