class getRepoService {
  /**@ngInject*/
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;

    // changed to false
    this.userRepo = false;
    this.hideRepos;
  }

  getRepoCommits(fullName) {

    const client_id = '3dba47cfe0ed2dd3cafa';
    const client_secret = 'a4b11c4041d750eedc7122e273e12b56b95b2143';
    const commitsUrl = 'http://api.github.com/repos/' + fullName + '/' + 'commits?client_id=' + this.client_id + '&client_secret=' + this.client_secret;

    const deferred = this.$q.defer();

    this.$http.get( commitsUrl, {
    }).then((res) => {
      this.userRepo = res.data;


      // run algorithm to return slim down data
      // can't get for loop to run here

      this.hideRepos = true;
      deferred.resolve(res);
    })
    .catch((err) => {
      deferred.reject(err);
    });
    return deferred.promise
  }




};

export default getRepoService;
