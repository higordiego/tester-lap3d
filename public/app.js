(function () {
    'use strict'
    function insert ($http, data){
        return $http.post('http://d154a919.ngrok.io/api/v1/employees', data)
    }
    
    function listAll ($http) {
        return $http.get('http://d154a919.ngrok.io/api/v1/employees')
    }

    function editEmployees ($http, data) {
        return $http.put('http://d154a919.ngrok.io/api/v1/employees/' +data._id, data)
    }

    function listOne($http, data) {
        return $http.get('http://d154a919.ngrok.io/api/v1/employees/' +data._id)
    }

    function deleteEmployees ($http, data) {
        return $http.delete('http://d154a919.ngrok.io/api/v1/employees/' +data._id)
    }

    function graph (data) {
        var labels = data.reduce(function(old, value, index) { return old.concat(value.name)}, [])
        var object = data.reduce(function(old, value, index) { return old.concat(value.participation)}, [])
        return {
            labels: labels,
            object: object
        }
    }
    angular.module('app', ['ui.utils.masks', 'chart.js'])
        .controller('EmployeesCtrl', ['$scope', '$http', function ($scope, $http) {
            $scope.employees  = []
            $scope.button = true
            $scope.save = function(data) {
                if ($scope.button) {
                    insert($http, data).then(function(response) {
                        delete $scope.employeesC
                        $scope.list()
                    }, function(err) {
                        console.log(err)
                        $scope.list()
                    })
                } else {
                    editEmployees($http, data).then(function(response){
                        $scope.list()
                        delete $scope.employeesC
                        $scope.button = true
                    }, function(err) {
                        console.log(err)
                        $scope.list()
                    })
                }
            }

            $scope.list = function(){
                listAll($http).then(function(response) {
                    $scope.employees = response.data
                    var object = graph(response.data)
                    $scope.labels = object.labels
                    $scope.data = object.object
                }, function(err) {
                    console.log(err)
                })
            }

            $scope.edit = function(data) {
                listOne($http, data).then(function(response){
                    $scope.button = false
                    $scope.employeesC = response.data
                }, function(err) {
                    console.log(err)
                })
            }

            $scope.delete = function(data) {
                deleteEmployees($http, data).then(function(response){
                    $scope.list()
                    $scope.button = true
                    delete $scope.employeesC
                }, function(err) {
                    $scope.list()
                    delete $scope.employeesC
                    $scope.button = true
                })
            }

            $scope.clear = function(){
                delete $scope.employeesC
                $scope.list()
                $scope.button = true
            }
        
        }])

})();
