// describe("A first jasmine test", function() {
//   it("should pass", function() {
//     expect(true).toBe(true);
//   });

//   it("should pass", function() {
//    expect(true).not.toBe(false);
//   });
// });

describe("Testing the Map object", function() {

    it("should create a map with a default size of (4, 4)", function(){
        var map = new Map();
        expect(map.getSize().equalsTo(new Size(4,4))).toBe(true);
    });

    it("should create a map with a specified size", function() {
        var size = new Size(5,5);
        var map = new Map(size);
        expect(map.getSize().equalsTo(size)).toBe(true);
    });

    // it("should", function () {
       //todo next test
    // });
});
