var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");

    $routeProvider
        .when("/", {
            templateUrl: "main.html"
        })
        .when("/login", {
            templateUrl: "login.html"
        })
        .when("/sign_up", {
            templateUrl: "sign_up.html"
        })
        .otherwise({
            redirectTo: "/"

        });
});


