'use strict';

var React = require("react");

function str(prim) {
  return prim;
}

function Loading(Props) {
  return React.createElement("h1", undefined, "Loading...");
}

var make = Loading;

exports.str = str;
exports.make = make;
/* react Not a pure module */
