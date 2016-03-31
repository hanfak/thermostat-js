function Thermostat() {
  this.currentTemp = 20;
  this.minTemp = 10;
}

Thermostat.prototype.increase = function() {
  this.currentTemp++
}

Thermostat.prototype.decrease = function() {
  if (this.currentTemp <= this.minTemp) {
    throw new Error("min temp reached!")
  }
  this.currentTemp--
}
