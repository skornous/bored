// console.log("js loaded");

// $(document).ready(function() {
// 	console.log('jquery loaded');
// });

function Map() {
	var self = this;
	self._size = new Size(4,4);
	self.getSize = function () {
		return self._size;
	};
}

function Size(width, height) {
	var self = this;

	self._width = width;
	self._height = height;

	self.getWidth = function(){ return self._width; };
	self.getHeigth = function(){ return self._height; };

	self.getDimension = function() {
		return {
			w: self._width,
			h: self._height
		};
	};
}