(function () {
    'use strict'

    function insert ($http, data){
        return $http.post('http://localhost:3000/api/v1/employees', data)
    }
    
    function listAll ($http) {
        return $http.get('http://localhost:3000/api/v1/employees')
    }

    angular.module('app', ['ui.utils.masks', 'chart.js'])
        .controller('EmployeesCtrl', ['$scope', '$http', function ($scope, $http) {


            $scope.employees  = []
            $scope.save = function(data) {
                insert($http, data).then(function(response) {
                    delete $scope.employeesC
                    $scope.list()
                }, function(err) {
                    console.log(err)
                })
            }


            $scope.list = function(){
                listAll($http).then(function(response) {
                    $scope.employees = response.data
                }, function(err) {
                    console.log(err)
                })
            }
            

            $scope.labels = ["", "In-Store Sales", "Mail-Order Sales"]
            $scope.data = [300, 500, 100]

        }])

})();
