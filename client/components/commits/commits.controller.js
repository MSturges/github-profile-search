class commitsController {
  constructor($scope, $state, $stateParams, getCommitsService) {
    this.$scope = $scope;
    this.$state = $state;
    this.$stateParams = $stateParams
    this.getCommitsService = getCommitsService;
    this.commits;
    this.getCommitsService.updateCommits(this.$stateParams.repoID);

    this.$scope.$watch(() => {
      return this.getCommitsService.getCommits();
    }, (newValue) => {
      this.commits = newValue;
    }, true);

  }


};

export default commitsController;
