class getReposService {
  constructor($q, $http, $state) {
    this.$q = $q;
    this.$http = $http;
    this.$state = $state;
    this.repos;
  }

  getRepos(){
    return this.repos
  }

  updateRepos(userName) {

    const client_id = '3dba47cfe0ed2dd3cafa';
    const client_secret = 'a4b11c4041d750eedc7122e273e12b56b95b2143';
    const repoUrl = 'http://api.github.com/users/' + userName + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret;
    const deferred = this.$q.defer();

    this.$http.get( repoUrl, {
    }).then((res) => {
      if (res.status == 200) {
        this.repos = res;
        deferred.resolve(res);
      }
      else {
        this.$state.go('layout');
      }
    })
    .catch((err) => {
      this.$state.go('layout');
      deferred.reject(err);
    });
    return deferred.promise;
  }

};

export default getReposService;
