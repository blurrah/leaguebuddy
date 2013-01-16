function ChampionListCtrl($scope, $http) {
	$http.get('javascripts/json/champions.json').success(function(data){
		$scope.champions = data;
	});
	
	$scope.orderProp = 'age';
}

function ChampionDetailCtrl($scope, $routeParams) {
	$http.get('javascripts/json/champions/' + $routeParams.championId + '.json').success(function(data){
		$scope.champion = data;
	});
}