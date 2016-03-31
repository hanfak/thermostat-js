describe("Thermostat", function() {

  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should initialize on 20DegC", function() {
    expect(thermostat.currentTemp).toEqual(20);
  });

  it("should increase temperature by 1", function() {
    thermostat.increase();
    expect(thermostat.currentTemp).toEqual(21);
  });

  it("should decrease temperature by 1", function() {
    thermostat.decrease();
    expect(thermostat.currentTemp).toEqual(19);
  });

  it("cannot be set below 10DegC", function() {
    for(var i = thermostat.currentTemp; i > thermostat.minTemp; i--) {
      thermostat.decrease();
    }

    expect(function() {
      thermostat.decrease();
    }).toThrowError("min temp reached!");
  });

  xit("has a max temp of 25 when powersaving is on", function() {
    thermostat.powerSaveMode();
    thermostat.increase();

  });
});
