function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.currentTemp = this.DEFAULT_TEMPERATURE;
  this.minTemp = 10;
  this.maxTemp = 25;
}

Thermostat.prototype.increase = function() {
  if (this.currentTemp >= this.maxTemp) {
    throw new Error("max temp reached")
  }
  this.currentTemp++;
}

Thermostat.prototype.decrease = function() {
  if (this.currentTemp <= this.minTemp) {
    throw new Error("min temp reached!")
  }
  this.currentTemp--;
}

Thermostat.prototype.powerSaveModeOn = function() {
  this.maxTemp = 25;
}

Thermostat.prototype.powerSaveModeOff = function() {
  this.maxTemp = 32;
}

Thermostat.prototype.reset = function() {
  this.currentTemp = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.energyUsage = function() {
  switch(true) {
    case (this.currentTemp >= 25):
      return "red";
      break;
    case (this.currentTemp >= 18):
      return "yellow";
      break;
    default:
      return "green";
  }
}
