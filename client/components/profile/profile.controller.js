class ProfileController {
  /**@ngInject*/
  constructor($stateParams, getUserService, $state) {

    this.$stateParams = $stateParams;
    this.getUserService = getUserService;
    this.$state = $state;

    this.userProfile = this.getUserService.userProfile;

    if (this.userProfile == false) {
      this.getUserService.getUser(this.$stateParams.profileID)
      .then((res) => {
        this.userProfile = this.getUserService.userProfile;
      })
      .catch((err) => {
        this.$state.go('layout');
      });
    }

  }

};

export default ProfileController;
