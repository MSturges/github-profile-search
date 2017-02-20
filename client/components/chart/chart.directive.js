import controller from './chart.controller.js';

export default () => {
    return {
        template: require('./chart.html'),
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};
