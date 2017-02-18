export default (['$stateProvider', '$urlRouterProvider', '$locationProvider',
    ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider
            .state('layout', {
              url: '/',
              template: '<layout-directive></layout-directive>'
            })
            .state('layout.profile', {
                url: "profile/{profileID}",
                template: '<profile-directive></profile-directive>'
            })
            .state('layout.repository', {
                url: "profile/{profileID}/{repoID}",
                template: '<repo-directive></repo-directive>'
            });

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
]);
