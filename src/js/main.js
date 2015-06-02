"use strict";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvanMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbXX0=
angular
  .module('angularAddresses', [])

  .controller('Main', function () {
    var vm = this;

    vm.people = [
      {name: 'Ben', twitter: '@ben123', phone: '505-505-5050'},
      {name: 'Dan', twitter: '@dandan', phone: '505-505-5050'},
      {name: 'Elsa', twitter: '@letitgo', phone: '505-505-5050'},
      {name: 'Amanda', twitter: '@princessamanda', phone: '505-505-5050'},
      {name: 'Charity', twitter: '@nonprofit', phone: '505-505-5050'}
    ];
  });
