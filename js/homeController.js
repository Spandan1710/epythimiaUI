angular.module('epythimia')
.controller('homeCtrl',["$scope",function($scope){


    $scope.hotItemsArray = [
        {
            src: 'img/Wrogn.jpg'
        },
        {
            src: 'img/UCB.jpg'
        },
        {
            src: 'img/HushPuppies.jpg'
        },
        {
            src: 'img/mango.jpg'
        },
        {
            src: 'img/UCB.jpg'
        }
    ];

    $scope.womenImg = 'img/women.jpg';
    $scope.menImg = 'img/men.jpg';
    $scope.kidImg = 'img/kids.jpg';

}]);