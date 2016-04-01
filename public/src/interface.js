$( document ).ready(function() {

  var thermostat = new Thermostat();
  var   cookieData = $.getJSON( "/temperature");

  updateDisplay = function() {
    console.log(cookieData.responseJSON)
    var numberXXX = Number(cookieData.responseJSON)
    thermostat.currentTemperature = 23;//Number(cookieData.responseJSON.temperature) // || thermostat.temperature())
    $( "#temperature" ).html( thermostat.temperature() );
    $( "#powersavestatus" ).html( thermostat.powerSaveStatus() );
    $( "#energy-usage" ).css( "color", thermostat.energyUsage() );
    $.post( 'temperature', { temperature: thermostat.temperature() } );
  }

  updateDisplay();

  $( "#temperature-increase" ).on( "click", function( event ) {
    thermostat.increase();
    updateDisplay();
  });

  $( "#temperature-decrease" ).on( "click", function( event ) {
    thermostat.decrease();
    updateDisplay();
  });

  $( "#temperature-powersavemodeon" ).on( "click", function( event ) {
    thermostat.powerSaveModeOn();
    updateDisplay();
  });

  $( "#temperature-powersavemodeoff" ).on( "click", function( event ) {
    thermostat.powerSaveModeOff();
    updateDisplay();
  });

  $( "#temperature-reset" ).click(function() {
    thermostat.reset();
    updateDisplay();
  });

});
