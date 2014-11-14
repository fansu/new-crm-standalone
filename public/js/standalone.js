angular.module('crmStandaloneApp', ['ngPrettyJson'])
  .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }])
  .controller('standaloneController', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.methods = [
    {name: 'GET'},
    {name: 'POST'},
    {name: 'PUT'},
    {name: 'DELETE'}
  ];
  $scope.method_select = $scope.methods[0];
  $scope.result = {};
  $scope.APITest = function(method, API_link) {
    if (method.name == 'GET'){
      $http({
        url: 'http://' + API_link,
        method: 'GET',
        headers: {'Content-Type': 'application/json'}})
        .success(function(data, status, headers, config) {
	   $scope.result = data;
           $scope.method = method;
        })
        .error(function(error) {
           $scope.error = error;
        });
    }
  }; 
}]);


