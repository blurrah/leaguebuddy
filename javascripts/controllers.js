function IntroCtrl($scope, localStorageService, Summoner, Champion) {
	localStorageService.clearAll();
	$scope.summonerName = '';

$scope.$watch('summonerName', function(value){
	localStorageService.add('summonerName', value);
	$scope.summonerName = localStorageService.get('summonerName');
	var dataOphalen = $scope.summonerName.toLowerCase();
	$scope.summoner = Summoner.get({summonerID: dataOphalen }, function(summoner){
	$scope.summonerLevel = summoner.data.summonerLevel;
	$scope.soloQ = summoner.data.soloqElo;
	$scope.summonerIcon = summoner.data.profileIconId;
	});
});
	$scope.champions = Champion.query();
	

}

function ChampionListCtrl($scope, Champion, localStorageService) {
	$scope.champions = Champion.query();
	
	$scope.summonerName = localStorageService.get('summonerName');
}

function ChampionDetailCtrl($scope, $routeParams) {
	$http.get('javascripts/json/champions/' + $routeParams.championId + '.json').success(function(data){
		$scope.champion = data;
	});
}
