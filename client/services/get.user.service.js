class getUserService {
  /**@ngInject*/
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;
    // this.userRepos = false;
    this.userProfile = false;
    // this.userRepo = false;
  }


  getUser(userName) {
    const client_id = '3dba47cfe0ed2dd3cafa';
    const client_secret = 'a4b11c4041d750eedc7122e273e12b56b95b2143';

    const profileUrl = 'http://api.github.com/users/' + userName + '?client_id=' + client_id + '&' + 'client_secret=' + client_secret;
    const deferred = this.$q.defer();

    this.$http.get( profileUrl, {
    }).then((res) => {

      if (res.status) {
        // console.log('get user profile (service) success', res);
        this.userProfile = res.data;
        deferred.resolve(res);
      }
      else {
        deferred.reject(res.data);
      }
    })
    .catch((err) => {
      deferred.reject(err);
    });
    return deferred.promise;
  }


  // getRepos(userName) {
  //
  //   const client_id = '3dba47cfe0ed2dd3cafa';
  //   const client_secret = 'a4b11c4041d750eedc7122e273e12b56b95b2143';
  //
  //   const repoUrl = 'http://api.github.com/users/' + userName + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret;
  //   const deferred = this.$q.defer();
  //
  //   this.$http.get( repoUrl, {
  //   }).then((res) => {
  //     console.log('get repos (service) success', res);
  //     this.userRepos = res;
  //     deferred.resolve(res);
  //   })
  //   .catch((err) => {
  //     deferred.reject(err);
  //   });
  //   return deferred.promise;
  // }



  // getRepoCommits(fullName) {
  //
  //   const client_id = '3dba47cfe0ed2dd3cafa';
  //   const client_secret = 'a4b11c4041d750eedc7122e273e12b56b95b2143';
  //   const commitsUrl = 'http://api.github.com/repos/' + fullName + '/' + 'commits?client_id=' + this.client_id + '&client_secret=' + this.client_secret;
  //
  //   const deferred = this.$q.defer();
  //
  //   this.$http.get( commitsUrl, {
  //   }).then((res) => {
  //     this.userRepo = res.data
  //     deferred.resolve(res);
  //   })
  //   .catch((err) => {
  //     deferred.reject(err);
  //   });
  //   return deferred.promise
  //
  // }



};

export default getUserService;
