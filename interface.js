

$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemperature() {
  $('#temperature').text(thermostat.currentTemperature());
  }

  //$('#temperature').text(thermostat.currentTemperature());

updateTemperature();
  $('#up').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  })

  $('#down').on('click', function(){
    thermostat.decreaseTemperature();
    updateTemperature();
  })

  $('#reset').on('click', function(){
    thermostat.tempReset();
    updateTemperature();
  })

  $('#mode').on('click', function(){
    thermostat.switchModePowerSaving();
    updateTemperature();
  })

  //function to display current powersavin mode

})
