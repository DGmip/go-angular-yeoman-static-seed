'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('ModalCtrl', function ($mdDialog, $mdMedia) {

    var DialogController = function($mdDialog, $scope) {
      $scope.test = 'tested';
      $scope.status = '';
      $scope.close = function() {
        $mdDialog.hide('You hid the dialog');
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
    };

    // switch on whether to use fullscreen on all dialogs for card
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
    //
    this.openModal = function(ev) {

      $mdDialog.show({
        controller: DialogController,
        templateUrl: '../templates/modal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      })
      .then(function(answer) {
        this.status = 'You said the information was "' + answer + '".';
      }, function() {
        this.status = 'You cancelled the dialog.';
      });

    };

    this.openModal();

  });
