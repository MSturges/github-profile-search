class getCommitsService {
  constructor($q, $http, $state) {
    this.$q = $q;
    this.$http = $http;
    this.$state = $state;
    this.commits;
    this.hideRepos;
  }

  getCommits() {
    return this.commits;
  }

  updateCommits(fullName) {

    const client_id = '3dba47cfe0ed2dd3cafa';
    const client_secret = 'a4b11c4041d750eedc7122e273e12b56b95b2143';
    const commitsUrl = 'http://api.github.com/repos/' + fullName + '/' + 'commits?client_id=' + this.client_id + '&client_secret=' + this.client_secret;
    const deferred = this.$q.defer();

    this.$http.get( commitsUrl, {
    }).then((res) => {

      if (res.status == 200) {
        this.commits = res.data;
        this.hideRepos = true;
        deferred.resolve(res);
      }
      else {
        this.$state.go('layout');
        deferred.reject(err);
      }
    })
    .catch((err) => {
      this.$state.go('layout');
      deferred.reject(err);
    });
    return deferred.promise
  }

};

export default getCommitsService;
