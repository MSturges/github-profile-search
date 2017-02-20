class parseCommitsService {
  constructor($q, $http, $state) {
    this.$q = $q;
    this.$http = $http;
    this.$state = $state;

  }

  parseCommits(array) {

    var noFirstMatch = true;
    var hasMatch = false;
    var formated = [];

    for (var i = 0; i < array.length; i++) {
      // Adds first object to formatted array to be testeds against
      if (noFirstMatch) {
        formated.push({
          name: array[i].commit.author.name,
          y: 1
        })
        noFirstMatch = false;
      }
      for (var j = 0; j <formated.length; j++) {
        // if outer array matches formmated array +1 to match and breakout
        if (array[i].commit.author.name == formated[j].name) {
          formated[j].y += 1;
          hasMatch = true;
          break;
        }
        // if a match is found switch hasMatch from false to true
        if (array[i].commit.author.name == formated[j].name) {
          hasMatch = true;
        }
      }
      // breakout of inner loop if hasMatch still false then add new object to
      // formated array
      if (hasMatch == false) {
        formated.push({
          name: array[i].commit.author.name,
          y: 1
        })
      } else {
        hasMatch = false;
      }
    }
    return formated
  }

};

export default parseCommitsService;
