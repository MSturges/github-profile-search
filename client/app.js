import angular from 'angular';
import 'angular-ui-router';
import 'angular-bootstrap-npm';
import 'angular-messages';
import 'ngstorage';


// directives
import layoutDirective from './components/layout/layout.directive.js';
import searchDirective from './components/search/search.directive.js';
import profileDirective from './components/profile/profile.directive.js';
import reposDirective from './components/repos/repos.directive.js';
import commitsDirective from './components/commits/commits.directive.js';
import chartDirective from './components/chart/chart.directive.js';

// services
import getProfileService from './services/githubServices/get.profile.service.js';
import getReposService from './services/githubServices/get.repos.service.js';
import getCommitsService from './services/githubServices/get.commits.service.js';
import parseCommitsService from './services/chartServices/parse.commits.service.js';

// routes
import Router from './routes.js';

// style
import './sass/style.scss';

const HOST = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : window.location.origin;

angular.module('github', [
  'ui.router',
  'ui.bootstrap',
  'ngMessages',
  'ngStorage',
])
.constant('HOST', HOST)
.service('getProfileService', getProfileService)
.service('getReposService', getReposService)
.service('getCommitsService', getCommitsService)
.service('parseCommitsService', parseCommitsService)
.directive('layoutDirective', layoutDirective)
.directive('searchDirective', searchDirective)
.directive('profileDirective', profileDirective)
.directive('reposDirective', reposDirective)
.directive('commitsDirective', commitsDirective)
.directive('chartDirective', chartDirective)
.config(Router)
.config(['$qProvider',  ($qProvider) => {
  $qProvider.errorOnUnhandledRejections(false);
}]);
