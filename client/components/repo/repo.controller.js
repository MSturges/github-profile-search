class repoController {
  /**@ngInject*/
  constructor(getRepoService, getReposService, $state, $stateParams) {

    this.getRepoService = getRepoService;
    this.getReposService = getReposService;
    this.$state = $state;
    this.$stateParams = $stateParams

    this.repo = this.getRepoService.userRepo;

    if (this.repo == false) {
      this.getRepoService.getRepoCommits(this.$stateParams.repoID)
      .then((res) => {
        this.repo = this.getRepoService.userRepo;
      })
      .catch((err) => {
        this.$state.go('layout');
      });
    }

    if (this.$state.current.name == 'layout.repository' ) {
      this.getRepoService.hideRepos = true;
    }

  }


};

export default repoController;
