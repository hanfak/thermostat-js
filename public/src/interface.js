$( document ).ready(function() {

  var thermostat = new Thermostat();
  var storedTemperature;

  updateDisplay = function() {
    $( "#temperature" ).html( thermostat.temperature() );
    $( "#powersavestatus" ).html( thermostat.powerSaveStatus() );
    $( "#energy-usage" ).css( "color", thermostat.energyUsage() );

    $.post( 'temperature', { temperature: thermostat.temperature(),
       powerSaveMode: thermostat.powerSaveStatus()
    });
  }

  $.getJSON( "/temperature.json", function(data) {
    storedTemperature = data.temperature;
    storedPowerSaveMode = data.powerSaveMode;
    thermostat.currentTemperature = storedTemperature || thermostat.temperature();
    thermostat.powerSaveSwitch = storedPowerSaveMode || thermostat.powerSaveStatus();
    updateDisplay();
  });

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
