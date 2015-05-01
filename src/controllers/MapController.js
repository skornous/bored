"use strict";
//TODO Finish the map object
//TODO Add the frames
//TODO Add the toView or generateUI function
function Map(size) {
    var self = this;
    self._size = size || new Size();
    self.getSize = function () {
        return self._size;
    };
}