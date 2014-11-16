angular.module('crmStandaloneApp', ['ngPrettyJson', 'angularUUID2'])
  .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }])
  .controller('standaloneController', ['$scope', '$http', '$window', 'uuid2', function($scope, $http, $window, uuid2) {
  var uuid = 0;
  $scope.methods = [
    {name: 'GET'},
    {name: 'POST'},
    {name: 'PUT'},
    {name: 'DELETE'}
  ];
  $scope.choices = [{name: 'There is no model'}];
  $scope.models = [];
  $scope.method_select = $scope.methods[0];
  $scope.result = {};
  $scope.requests = [];

  $scope.methodChange = function(method) {
    $scope.result = {};
		if (method.name == 'GET') {
			$scope.choices = [{name: 'There is no model'}];    
		} else if (method.name == 'POST') {
		  $scope.choices = [
		       {name: 'Agent'},
		       {name: 'Customer'},
		       {name: 'ContactHistory'}
		     ]; 
		} else if (method.name == 'PUT') {
		  $scope.choices = [
		       {name: 'Agent'},
		       {name: 'Customer'}
		     ]; 
		} else if (method.name == 'DELETE') {
		  $scope.choices = [{name: 'There is no model'}];
		}
    $scope.models = [];
	};

  $scope.modelChange = function(method, model) {
		if (model.name == 'Agent') {
			 $scope.models = [
					{attr: 'Name', type: "text", data: ''},
					{attr: 'Phone', type: "text", data: ''},
					{attr: 'Email', type: "email", data: ''}
				];
		} else if (model.name == 'Customer') {
			 $scope.models = [
					{attr: 'Name', type: "text", data: ''},
					{attr: 'Phone', type: "text", data: ''},
					{attr: 'Email', type: "email", data: ''}
				];
		} else if (model.name == 'ContactHistory') {
			 $scope.models = [
					{attr: 'Summary', type: "text", data: ''},
					{attr: 'Model', type: "text", data: ''},
					{attr: 'Time', type: "text", data: ''},
					{attr: 'Data', type: "text", data: ''}
				]; 
		}
	};

  $scope.APITest = function(method, model_name, model_data, API_link) {
    var model_datas = {};

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
    } else if (method.name == 'POST'){
      if (uuid == 0) {
        uuid = uuid2.newuuid();
			}
      if (model_name.name == 'Agent') {
        var post_data = {name: model_data[0].data, phone: model_data[1].data, email: model_data[2].data};
        $http({
            url: 'http://' + API_link, 
            method: 'POST',
            data: post_data,
            headers: {'nonce' : SHA1(uuid + 'POST' + JSON.stringify(post_data) + API_link)}})
					.success(function(data, status, headers, config) {
	          $scope.result = data;
            $scope.method = method;
        })
        .error(function(error) {
           $scope.error = error;
        });
      } else if (model_name.name == 'Customer') {
        var post_data = {name: model_data[0].data, phone: model_data[1].data, email: model_data[2].data};
        $http({
            url: 'http://' + API_link, 
            method: 'POST',
            data: post_data,
            headers: {'nonce' : SHA1(uuid + 'POST' + JSON.stringify(post_data) + API_link)}})
					.success(function(data, status, headers, config) {
	          $scope.result = data;
            $scope.method = method;
        })
        .error(function(error) {
           $scope.error = error;
        });
      } else if (model_name.name == 'ContactHistory') {
        var post_data = {textSummary: model_data[0].data, model: model_data[1].data, time: model_data[2].data, data: model_data[3].data};
        $http({
            url: 'http://' + API_link, 
            method: 'POST',
            data: post_data,
            headers: {'nonce' : SHA1(uuid + 'POST' + JSON.stringify(post_data) + API_link)}})
					.success(function(data, status, headers, config) {
	          $scope.result = data;
            $scope.method = method;
        })
        .error(function(error) {
           $scope.error = error;
        });
      }
    } else if (method.name == 'PUT'){
      if (uuid == 0) {
        uuid = uuid2.newuuid();
			}
      if (model_name.name == 'Agent') {
        var post_data = {name: model_data[0].data, phone: model_data[1].data, email: model_data[2].data};
        $http({
            url: 'http://' + API_link, 
            method: 'PUT',
            data: post_data,
            headers: {'nonce' : SHA1(uuid + 'PUT' + JSON.stringify(post_data) + API_link)}})
					.success(function(data, status, headers, config) {
	          $scope.result = data;
            $scope.method = method;
        })
        .error(function(error) {
           $scope.error = error;
        });
      } else if (model_name.name == 'Customer') {
        var post_data = {name: model_data[0].data, phone: model_data[1].data, email: model_data[2].data};
        $http({
            url: 'http://' + API_link, 
            method: 'PUT',
            data: post_data,
            headers: {'nonce' : SHA1(uuid + 'PUT' + JSON.stringify(post_data) + API_link)}})
					.success(function(data, status, headers, config) {
	          $scope.result = data;
            $scope.method = method;
        })
        .error(function(error) {
           $scope.error = error;
        });
      }
    } else if (method.name == 'DELETE'){
      if (uuid == 0) {
        uuid = uuid2.newuuid();
			}
        $http({
            url: 'http://' + API_link, 
            method: 'DELETE',
            data: post_data,
            headers: {'nonce' : SHA1(uuid + 'DELETE' + API_link)}})
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


