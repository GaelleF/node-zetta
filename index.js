process.EventEmitter = require('events').EventEmitter; // add this line
const zetta = require('zetta');
const StateMachineScout = require('./scout.js');
const StateMachineApp = require('./app.js');

zetta()
  .name('Zetta Server on BeagleBone Hub')
  .use(StateMachineScout)
  .use(StateMachineApp)
  .listen(1337, function(){
     console.log('Zetta is running at http://127.0.0.1:1337');
});