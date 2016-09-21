(function() {
  'use strict';

  angular
    .module('app11')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
