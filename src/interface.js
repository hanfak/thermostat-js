$( document ).ready(function() {

  var thermostat = new Thermostat();
  $( "#temperature" ).html( thermostat.temperature() );

  $( "#temperature-increase" ).on( "click", function( event ) {
    thermostat.increase();
    $( "#temperature" ).html( thermostat.temperature() );
  });

  $( "#temperature-decrease" ).on( "click", function( event ) {
    thermostat.decrease();
    $( "#temperature" ).html( thermostat.temperature() );
  });

});
