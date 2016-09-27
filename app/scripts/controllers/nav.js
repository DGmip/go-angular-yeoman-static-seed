'use strict';

/**
 * @ngdoc function
 * @name appName.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the appName
 */
angular.module('appName')
  .controller('NavCtrl', function () {
    var navigationLinks = [];

    function NavigationLinksFact(display, href) {
      var obj = {};
      obj.display = display;
      obj.href = href;
      navigationLinks.push(obj);
    }

    // add to scope
    this.navigationLinks = navigationLinks;

    new NavigationLinksFact('Main', '#/');
    new NavigationLinksFact('About', '#/about');
  });
