const Device = require('zetta').Device;
const util = require('util');

const StateMachineDevice = module.exports = function(name) {
    Device.call(this);
    this.assignedName = name;
  }

  util.inherits(StateMachineDevice, Device);

  StateMachineDevice.prototype.init = function(config) {
    
    // Set up the state machine 
    config
      .type('state_machine')
      .state('ferme')
      .name(this.assignedName);

    config
      // Define the transitions allowed by the state machine
      .when('ferme', {allow: ['turn-fort']}) // ,'turn-faible'
      .when('faible', {allow: ['turn-ferme']}) //, 'turn-fort'
      .when('fort', {allow: ['turn-faible']}) //,'turn-ferme' 

      // Map the transitions to JavaScript methods
      .map('turn-ferme', this.turnFerme)
      .map('turn-faible', this.turnFaible)
      .map('turn-fort', this.turnFort)
  }

  StateMachineDevice.prototype.turnFerme = function(cb) {
    this.state = 'ferme';
    cb();
  }
  StateMachineDevice.prototype.turnFaible = function(cb) {
    this.state = 'faible';
    cb();
  }

  StateMachineDevice.prototype.turnFort = function(cb) {
    this.state = 'fort';
    cb();
  }