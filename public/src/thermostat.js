"use strict";

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.currentTemperature = this.DEFAULT_TEMPERATURE;
  this.minTemp = 10;
  this.PsmOnMaxTemp = 25;
  this.PsmOffMaxTemp = 32;
  this.powerSaveSwitch = "ON";
}

Thermostat.prototype.increase = function() {
  if (this.aboveMaxTemperature()) {
    throw new Error("max temp reached")
  }
  this.currentTemperature++;
}

Thermostat.prototype.decrease = function() {
  if (this.belowMinTemperature()) {
    throw new Error("min temp reached!")
  }
  this.currentTemperature--;
}

Thermostat.prototype.powerSaveModeOn = function() {
  this.powerSaveSwitch = "ON";
  if (this.currentTemperature > this.PsmOnMaxTemp) {
    this.currentTemperature = this.PsmOnMaxTemp;
  }
}

Thermostat.prototype.powerSaveModeOff = function() {
  this.powerSaveSwitch = "OFF";
}

Thermostat.prototype.powerSaveStatus = function() {
  return this.powerSaveSwitch;
}

Thermostat.prototype.reset = function() {
  this.currentTemperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.energyUsage = function() {
  switch(true) {
    case (this.temperature() >= 25):
      return "red";
      break;
    case (this.temperature() >= 18):
      return "yellow";
      break;
    default:
      return "green";
  }
}

Thermostat.prototype.temperature = function() {
  return this.currentTemperature;
}

Thermostat.prototype.aboveMaxTemperature = function() {
  if (this.powerSaveStatus() === "ON") {
    return this.currentTemperature >= this.PsmOnMaxTemp;
  }
  else {
    return this.currentTemperature >= this.PsmOffMaxTemp;
  }
}

Thermostat.prototype.belowMinTemperature = function() {
  return this.temperature() <= this.minTemp;
}