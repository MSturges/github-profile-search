class ProfileController {
  constructor($scope, $state, $stateParams, getProfileService) {
    this.$scope = $scope;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.getProfileService = getProfileService;
    this.user;

    this.getProfileService.updateProfile(this.$stateParams.profileID);

    this.$scope.$watch(() => {
      return this.getProfileService.getProfile();
    }, (newValue) => {
      this.user = newValue;
    }, true);

  }
};

export default ProfileController;
