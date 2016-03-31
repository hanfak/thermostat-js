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

  $( "#temperature-powersavemodeon" ).on( "click", function( event ) {
    thermostat.powerSaveModeOn();
    $( "#powersavestatus" ).html( thermostat.powerSaveStatus() );
    $( "#temperature" ).html( thermostat.temperature() );
  });

  $( "#temperature-powersavemodeoff" ).on( "click", function( event ) {
    thermostat.powerSaveModeOff();
    $( "#powersavestatus" ).html( thermostat.powerSaveStatus() );
  });

  $( "#temperature-reset" ).click(function() {
    thermostat.reset();
    $( "#temperature" ).html( thermostat.temperature() );
  });

});
