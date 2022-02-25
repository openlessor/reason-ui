'use strict';

var Curry = require("rescript/lib/js/curry.js");
var React = require("react");

function str(prim) {
  return prim;
}

var placeholderImg = (require("../assets/placeholder_1.png"));

function InventoryItem(Props) {
  var title = Props.title;
  var description = Props.description;
  var match = React.useState(function () {
        return false;
      });
  var setSelected = match[1];
  var selected = match[0];
  var toggle = function (e) {
    return Curry._1(setSelected, (function (_prev) {
                  return !selected;
                }));
  };
  return React.createElement("button", {
              className: (
                selected ? "brightness-100 order-first" : "brightness-50"
              ) + " transition-order hover:brightness-100 block bg-white p-4 rounded shadow m-1",
              onClick: toggle
            }, React.createElement("img", {
                  style: {
                    width: "100%"
                  },
                  src: placeholderImg
                }), React.createElement("h2", {
                  className: "text-lg font-bold"
                }, title), React.createElement("p", {
                  className: "text-sm"
                }, description));
}

var make = InventoryItem;

exports.str = str;
exports.placeholderImg = placeholderImg;
exports.make = make;
/* placeholderImg Not a pure module */
