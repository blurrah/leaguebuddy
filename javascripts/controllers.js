function IntroCtrl($scope, localStorageService) {
	localStorageService.clearAll();
	$scope.summonerName = "Summoner";
	$scope.typeahead = ['Blurrahz', 'Prelth', 'Piemelplas', 'Awesome Possum'];

$scope.$watch('summonerName', function(value){
	localStorageService.add('summonerName', value);
	$scope.summonerName = localStorageService.get('summonerName');
});

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
