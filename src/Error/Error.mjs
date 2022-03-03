'use strict';

var React = require("react");

function str(prim) {
  return prim;
}

function $$Error(Props) {
  return React.createElement("h1", undefined, "Error");
}

var make = $$Error;

exports.str = str;
exports.make = make;
/* react Not a pure module */
