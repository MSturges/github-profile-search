class getReposService {
  /**@ngInject*/
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;
    this.userRepos = false;
  }

  getRepos(userName) {

    const client_id = '3dba47cfe0ed2dd3cafa';
    const client_secret = 'a4b11c4041d750eedc7122e273e12b56b95b2143';

    const repoUrl = 'http://api.github.com/users/' + userName + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret;
    const deferred = this.$q.defer();

    this.$http.get( repoUrl, {
    }).then((res) => {
      this.userRepos = res;
      deferred.resolve(res);
    })
    .catch((err) => {
      deferred.reject(err);
    });
    return deferred.promise;
  }

};

export default getReposService;
