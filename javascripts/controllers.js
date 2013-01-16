function ChampionListCtrl($scope, Champion) {
	$scope.champions = Champion.query();
	
	$scope.summonerName = 'Summoner';
	$scope.orderProp = 'age';
}

function ChampionDetailCtrl($scope, $routeParams) {
	$http.get('javascripts/json/champions/' + $routeParams.championId + '.json').success(function(data){
		$scope.champion = data;
	});
}