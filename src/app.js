//todo migrate the objects to an other directory
function Map(size) {
	var self = this;
	self._size = size || new Size(4,4);
	self.getSize = function () {
        return self._size;
    };
}

function Size(width, height) {
	var self = this;

	self._width = width || 4;
	self._height = height || 4;

	self.getWidth = function(){ return self._width; };
	self.getHeigth = function(){ return self._height; };

	self.getDimension = function() {
		return {
			w: self._width,
			h: self._height
		};
	};

    self.equalsTo = function (size) {
        return self._width === size.getWidth() && self._height === size.getHeigth();
    };
}