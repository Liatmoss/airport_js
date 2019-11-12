function Plane(){

};

function Airport(){
  this.capacity = 2
};

Airport.prototype.land = function (plane) {
  planes.push(plane);
  return plane
};

Airport.prototype.takeOff = function (plane) {
  planes.pop()
  return plane;
};

Airport.prototype.isFull = function () {
  planes.length >= airport.capacity
  throw("Can't land. Airport is full")
};

// Airport.prototype.isStormy = function () {
//   if (this.isStormy()) {
//     throw("Weather stormy. Cannot take off")
//   }
// };

var airport = new Airport
var plane = new Plane
var planes = []
