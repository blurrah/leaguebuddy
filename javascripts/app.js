;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);


angular.module('championcat', ['championcatServices', 'summonercatServices', 'LocalStorageModule']).
  filter('emptyifblank', function(){
return function(object, query){
		if(!query){
			return
		 }else{
			return object;
		}
}}).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/champions', {templateUrl: 'partials/champion-list.html',   controller: ChampionListCtrl}).
      when('/champions/:championId', {templateUrl: 'partials/champion-detail.html', controller: ChampionDetailCtrl}).
      when('/', {templateUrl: 'partials/intro.html', controller: IntroCtrl}).
      otherwise({redirectTo: '/champions'});
}]);




angular.module('championcatServices', ['ngResource']).
	factory('Champion', function($resource){
		return $resource('javascripts/json/champions.json', {}, {
			query: {method:'GET', isArray:true}
		});
	});

angular.module('summonercatServices', ['ngResource']).
    factory('Summoner', function($resource){
  return $resource('javascripts/json/summoner/:summonerID.json', {}, {
    query: {method:'GET', params:{summonerId:'blurrahz'}, isArray:true}
  });
});

