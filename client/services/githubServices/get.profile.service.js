class getProfileService {
  constructor($q, $http, $state) {
    this.$q = $q;
    this.$http = $http;
    this.$state = $state;
    this.userProfile;
  }

  getProfile() {
    return this.userProfile;
  }

  updateProfile(userName) {
    const client_id = '3dba47cfe0ed2dd3cafa';
    const client_secret = 'a4b11c4041d750eedc7122e273e12b56b95b2143';
    const profileUrl = 'http://api.github.com/users/' + userName + '?client_id=' + client_id + '&' + 'client_secret=' + client_secret;
    const deferred = this.$q.defer();

    this.$http.get( profileUrl, {
    }).then((res) => {
      if (res.status == 200) {
        this.userProfile = res.data;
        deferred.resolve(res);
      }
      else {
        this.$state.go('layout');
        deferred.reject(res.data);
      }
    })
    .catch((err) => {
      this.$state.go('layout');
      deferred.reject(err);
    });
    return deferred.promise;
  }

};

export default getProfileService;
