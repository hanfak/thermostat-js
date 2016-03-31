$(document).ready(function(){

  var thermostat = new Thermostat;
  updateDisplay();

  function updateDisplay() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  $('#increaseTemperature').on('click', function() {
    thermostat.increaseTemperature();
    updateDisplay();
  });

  $('#decreaseTemperature').on('click', function() {
    thermostat.decreaseTemperature();
    updateDisplay();
  });

  $('#powerSaveSwitch').on('click', function() {
    $(this).css({"background-color":"grey"});
    thermostat.powerSaveSwitch();
    $('#powerSave').text(thermostat.powerSaveStatus());
  });

  $('#resetTemperature').on('click', function() {
    thermostat.resetTemperature();
    updateDisplay();
  });


})
