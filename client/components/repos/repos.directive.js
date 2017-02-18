import controller from './repos.controller.js';

export default () => {
    return {
        template: require('./repos.html'),
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};
