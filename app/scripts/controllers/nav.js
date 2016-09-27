'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
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
    new NavigationLinksFact('Upload banner image modal', '#/modal');
  });
