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
import repoDirective from './components/repo/repo.directive.js';

// services
import getUserService from './services/get.user.service.js';
import getReposService from './services/get.repos.service.js';
import getRepoService from './services/get.repo.service.js';

// routes
import Router from './routes.js';

// style
import './sass/style.scss';

const HOST = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : window.location.origin;

angular.module('github', [
  'ui.router',
  'ui.bootstrap',
  'ngMessages',
  'ngStorage'
])

.constant('HOST', HOST)
.service('getUserService', getUserService)
.service('getReposService', getReposService)
.service('getRepoService', getRepoService)
.directive('layoutDirective', layoutDirective)
.directive('searchDirective', searchDirective)
.directive('profileDirective', profileDirective)
.directive('reposDirective', reposDirective)
.directive('repoDirective', repoDirective)
.config(Router)
.config(['$qProvider',  ($qProvider) => {
  $qProvider.errorOnUnhandledRejections(false);
}]);
