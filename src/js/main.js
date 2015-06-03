"use strict";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvanMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbXX0=
angular
  .module('angularAddresses', [])

  .controller('Main', function () {
    var vm = this;

    vm.people = [
      {name: 'Ben', twitter: '@ben123', phone: '+1 615 234 5678', photo: 'http://i.imgur.com/fsw9I8V.gif'},
      {name: 'Dan', twitter: '@dandan', phone: '(615) 234-5678', photo: 'http://i.imgur.com/uTONfVS.jpg'},
      {name: 'Elsa', twitter: '@letitgo', phone: '615-234-5678', photo: 'http://i.imgur.com/Vo0pllf.jpg'},
      {name: 'Amanda', twitter: '@princessamanda', phone: '1 615 234 5678', photo: 'http://i.imgur.com/yLCfE5l.jpg'},
      {name: 'Charity', twitter: '@nonprofit', phone: '615.234.5678', photo: 'http://i.imgur.com/AAuJNDl.jpg'}
    ];

    vm.newPerson = {};

    vm.addNewAddress = function () {
      vm.people.push(vm.newPerson);
      vm.newPerson = {};
    };

    vm.removeAddress = function (person) {
      var index = vm.people.indexOf(person);
      vm.people.splice(index, 1);
    };

  });
