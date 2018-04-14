angular.module('epythimia')
.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('login',{
        url:'/login',
        templateUrl:'partials/login.html',
        controller:'l   oginCtrl'
    }).state('parent',{
        url:'/parent',
        templateUrl:'partials/parent.html',
        controller:"parentCtrl"
    }).state('home',{
        url:'/home',
        templateUrl:'partials/home.html',
        controller:'homeCtrl'
    }).state('register',{
        url:'/register',
        templateUrl:'partials/register.html',
        controller:'registerCtrl'
    })

    $urlRouterProvider.otherwise('/home');

}])