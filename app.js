module.exports = function(server) {

    let StateMachine_1_Query = server.where({type: 'state_machine', name: 'robinet_1'});
    let StateMachine_2_Query = server.where({type: 'state_machine', name: 'robinet_2'});
    let StateMachine_3_Query = server.where({type: 'state_machine', name: 'robinet_3'});
   

    server.observe([StateMachine_1_Query, StateMachine_2_Query, StateMachine_3_Query], function(machine_1, machine_2, machine_3) {
      
        console.log("State Machine came online: " + machine_1.name + ", " + machine_2.name + ", " + machine_3.name);
        machine_1.on('turn-fort', function() {

           if (machine_2._state == 'ferme') {
                machine_2.call('turn-fort');
                machine_2.call('turn-faible');
            }
            if (machine_2._state == 'fort') {
                 machine_2.call('turn-faible');
            }

           if (machine_3._state == 'fort') {
                machine_3.call('turn-faible');
                machine_3.call('turn-ferme');
            }
            if (machine_3._state == 'faible') {
                machine_3.call('turn-ferme');
            }
          });
    
    });
}