describe('Airport', function() {

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('know when a plane is landed', function() {

    it('should know when a plane is landed', function() {
      expect(airport.land(plane)).toEqual(plane);
    });
  });

  describe('know when a plan is taking off', function(){
    it('should know when a plane has taken off', function(){
      expect(airport.takeOff(plane)).toEqual(plane);
    });
  });

  describe('airport capacity', function() {
    it('should have a capacity of two', function() {
      expect(airport.capacity).toBe(2);
    });

    it('should raise an error when the airport is full', function() {
      expect(airport.isFull).toThrow("Can't land. Airport is full")
    });
  });

  // describe('weather stormy or clear', function() {
  //   it('knows when the weather is stormy', function() {
  //     spyOn(airport, 'isStormy').and.returnValue(true);
  //     expect(function() {airport.takeOff(plane);}).toThrow('Weather stormy. Cannot take off')
  //   });
  // });
});
