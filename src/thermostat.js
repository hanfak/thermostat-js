function Thermostat(temperature = DEFAULT_TEMPERATURE) {
  this.temperature = temperature;
  this.powerSave = true;
};

const DEFAULT_TEMPERATURE = 20;
const MINIMUM_TEMPERATURE = 10;

  Thermostat.prototype.getCurrentTemperature = function () {
    return this.temperature;
  };
// test
  Thermostat.prototype.powerSaveStatus = function () {
    if (this.powerSave === true) {
      return 'On';
    }
    else {
      return 'Off';
    };
  };

  Thermostat.prototype.increaseTemperature = function () {
    if (this.getCurrentTemperature() < this._maxTemperature()) {
      this.temperature++;
    }
    else {
      this.temperature = this._maxTemperature()
    };
  };

  Thermostat.prototype.decreaseTemperature = function () {
    if (this.getCurrentTemperature() > MINIMUM_TEMPERATURE) {
      this.temperature--;
    }
    else {
      this.temperature = MINIMUM_TEMPERATURE;
    };
  };

  Thermostat.prototype.powerSaveSwitch = function() {
    this.powerSave = !this.powerSave
  };

  Thermostat.prototype.resetTemperature = function() {
    this.temperature = DEFAULT_TEMPERATURE;
  };

  Thermostat.prototype.energyUsage = function () {
    if (this.getCurrentTemperature() < 18) {
      return 'low-usage';
    }
    else if (this.getCurrentTemperature() < 25){
      return 'med-usage'
    }
    else {
      return 'hi-usage';
    };
  };

  Thermostat.prototype._maxTemperature = function () {
    if (this.powerSave === true) {
      return 25;
    }
    else {
      return 32;
    };
  };
