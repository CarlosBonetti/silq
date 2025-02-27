'use strict';

angular.module('silq2App')
    .controller('RequestResetController', function ($rootScope, $scope, $state, $timeout, Auth) {

        $scope.success = null;
        $scope.error = null;
        $scope.errorEmailNotExists = null;
        $scope.resetAccount = {};
        $timeout(function (){angular.element('[ng-model="resetAccount.email"]').focus();});

        $scope.requestReset = function () {

            $scope.error = null;
            $scope.errorEmailNotExists = null;

            Auth.resetPasswordInit($scope.resetAccount.email).then(function () {
                $scope.success = 'OK';
            }).catch(function (response) {
                $scope.success = null;
                if (response.status === 400 && response.data === 'E-mail não registrado') {
                    $scope.errorEmailNotExists = 'ERROR';
                } else {
                    $scope.error = 'ERROR';
                }
            });
        }

    });
