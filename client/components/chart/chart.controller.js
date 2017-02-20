class ChartController {
  constructor($scope, $stateParams, getCommitsService, parseCommitsService) {
    this.$scope = $scope;
    this.$stateParams = $stateParams;
    this.getCommitsService = getCommitsService;
    this.parseCommitsService = parseCommitsService;

    this.$scope.$watch(() => {
      return this.getCommitsService.getCommits();
    }, (newValue) => {

      if (typeof newValue === 'object') {
        this.parsedData = this.parseCommitsService.parseCommits(newValue);

        this.title = {
          text: this.$stateParams.repoID
        };

        this.data =  [{
          name: 'Commits',
          colorByPoint: true,
          data: this.parsedData
        }];
      }

      if (typeof this.parsedData == 'object') {
        this.makeChart()
      }

    }, true);

  }

  makeChart() {
    Highcharts.chart('container', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: this.title,
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: this.data
    });
  }

};

export default ChartController;
