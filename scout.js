const Scout = require('zetta').Scout;
const util = require('util');
const StateMachine = require('./device.js');

StateMachineScout = module.exports = function() {
    Scout.call(this);
  }
  util.inherits(StateMachineScout, Scout);

  StateMachineScout.prototype.init = function(next) {
    var self = this;

    setTimeout(function() {
        self.discover(StateMachine, 'robinet_1');
        self.discover(StateMachine, 'robinet_2');
        self.discover(StateMachine, 'robinet_3');
 
    }, 1000);

    next();
}