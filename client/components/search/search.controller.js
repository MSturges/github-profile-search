class SearchController {
  /**@ngInject*/
  constructor(getUserService, getReposService, $state, $scope) {
    this.getUserService = getUserService;
    this.getReposService = getReposService;
    this.$state = $state;
    this.$scope = $scope;
  }

  submitUserSearch() {
    this.getUserService.getUser(this.userName)
    .then((res) => {
      if (res.status == 200) {
        this.getReposService.getRepos(this.userName)
        .then((res) => {
          this.$state.go('layout.profile', {profileID: this.userName});
          this.userError = false;
          this.userName = "";
        })
      } else {
        this.userError = true;
      }
    })
    .catch((err) => {
      this.userError = true;
    });
  }
};

export default SearchController;
