import controller from './profile.controller.js';

export default () => {
    return {
        template: require('./profile.html'),
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};
