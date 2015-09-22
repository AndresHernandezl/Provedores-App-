var app = angular.module('appNecxo' , ['ui.router']);
app.config(function($stateProvider , $urlRouterProvider){
    $stateProvider.state('home',{
        url: '/product',
        templateUrl:'category/home.html',
    });

    $stateProvider.state('category',{
        url: '/category/{id}',
        templateUrl:''
    });

    $urlRouterProvider.otherwise('home');
});