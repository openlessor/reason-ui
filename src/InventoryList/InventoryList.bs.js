'use strict';

var React = require("react");

function str(prim) {
  return prim;
}

function InventoryList(Props) {
  var match = React.useState(function () {
        return new Date();
      });
  React.useState(function () {
        return new Date();
      });
  return React.createElement("div", {
              className: "w-screen"
            }, React.createElement("h1", {
                  className: "text-2xl"
                }, "Equipment available on " + match[0].toLocaleDateString()));
}

var make = InventoryList;

exports.str = str;
exports.make = make;
/* react Not a pure module */
