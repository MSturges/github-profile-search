class ReposController {
  constructor($scope, $stateParams, $state, getReposService, getCommitsService) {

    this.$scope = $scope;
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.getReposService = getReposService;
    this.getCommitsService = getCommitsService;
    this.userRepos;
    this.getReposService.updateRepos(this.$stateParams.profileID);

    this.$scope.$watch(() => {
      return this.getReposService.getRepos();
    }, (newValue) => {
      this.userRepos  = newValue;
    }, true);

    if (this.$state.current.name == 'layout.profile' ) {
      this.hideRepos = false;
    }

  }

  updateCommits(fullName) {

    this.getCommitsService.updateCommits(fullName)
    .then((res) => {
      this.hideRepos = true;
      this.$state.go('layout.repository', {profileID : this.$stateParams.profileID, repoID : fullName } );
    })
    .catch((err) => {
      if (this.$stateParams.profileID) {
        this.$state.go('layout.profile', {profileID : this.$stateParams.profileID } );
      } else {
        this.$state.go('layout');
      }
    });
  }


};

export default ReposController;
