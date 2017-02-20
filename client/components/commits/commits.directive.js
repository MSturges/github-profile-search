import controller from './commits.controller.js';

export default () => {
    return {
        template: require('./commits.html'),
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};
