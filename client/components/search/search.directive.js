import controller from './search.controller.js';

export default () => {
    return {
        template: require('./search.html'),
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};
