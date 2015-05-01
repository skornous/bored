describe("Testing the Size object", function() {

    it("should create a Size with a default 4 width and 4 height", function(){
        var size = new Size();
        expect(size.equalsTo(new Size(4,4))).toBe(true);
    });

    it("should create a Size with a specified width and height", function() {
        var w = 5,
            h = 5,
            size = new Size(5,5);
        expect(size.equalsTo(new Size(w, h))).toBe(true);
    });

    it("should retrieve a Size width and height separately", function () {
       var w = 5,
           h = 5,
           size = new Size(w, h);
        expect(size.getHeight()).toBe(w);
        expect(size.getWidth()).toBe(h);
    });

    it("should retrieve a Size width and height in an object", function () {
       var w = 5,
           h = 5,
           size = new Size(w, h);
        expect(size.getDimension()).toEqual({w:w, h:h});
    });

    it("should modify a Size width", function () {
        var w = 5,
            size = new Size();
        size.setWidth(w);
        expect(size.getWidth()).toBe(w);
    });

    it("should modify a Size height", function () {
        var h = 5,
            size = new Size();
        size.setHeight(h);
        expect(size.getHeight()).toBe(h);
    });
});
