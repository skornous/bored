// describe("A first jasmine test", function() {
//   it("should pass", function() {
//     expect(true).toBe(true);
//   });

//   it("should pass", function() {
//    expect(true).not.toBe(false);
//   });
// });

describe("Testing the Map object", function() {
  var map = new Map();

  it("should have a size", function() {
    expect(map.getSize()).not.toBe(null);
    console.log(map.getSize().getDimension());
  });
});
