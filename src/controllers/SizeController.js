"use strict";

function Size(width, height) {
    var self = this;

    self._width = width || 4;
    self._height = height || 4;

    self.setWidth = function(newWidth){ self._width = newWidth; return self; };
    self.setHeight = function(newHeight){ self._height = newHeight; return self; };

    self.getWidth = function(){ return self._width; };
    self.getHeight = function(){ return self._height; };

    self.getDimension = function() {
        return {
            w: self._width,
            h: self._height
        };
    };

    self.equalsTo = function (size) { return self._width === size.getWidth() && self._height === size.getHeight(); };
}