describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default temperature', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  describe("increaseTemperature", function(){
    it("increase temoerature by 1", function(){
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe("decreaseTemperature", function(){
    it("decrease temoerature by 1", function(){
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    });
  });

});