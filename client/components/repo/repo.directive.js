import controller from './repo.controller.js';

export default () => {
    return {
        template: require('./repo.html'),
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};
