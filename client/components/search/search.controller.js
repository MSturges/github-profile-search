class SearchController {
  constructor($state, $scope, getProfileService, getReposService) {
    this.$state = $state;
    this.$scope = $scope;
    this.getProfileService = getProfileService;
    this.getReposService = getReposService;
  }

  submitUserSearch() {
    this.getProfileService.updateProfile(this.userName)
    .then((res) => {
      if (res.status == 200) {
        this.getReposService.updateRepos(this.userName)
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
