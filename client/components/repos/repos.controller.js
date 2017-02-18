class ReposController {
  /**@ngInject*/
  constructor($stateParams, getReposService, getRepoService, $state) {

    this.$stateParams = $stateParams;
    this.getReposService = getReposService;
    this.getRepoService = getRepoService;
    this.$state = $state;

    this.userRepos = this.getReposService.userRepos;

    this.hideRepos = this.getRepoService.hideRepos;

    if (this.userRepos == false) {
      this.getReposService.getRepos(this.$stateParams.profileID)
      .then((res) => {
        this.userRepos = this.getReposService.userRepos;
      })
      .catch((err) => {
        this.$state.go('layout');
      });
    }

    if (this.$state.current.name == 'layout.profile' ) {
      this.hideRepos = false;
    }

  }

  getRepoCommits(fullName) {

    this.getRepoService.getRepoCommits(fullName)
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
