'use strict';

var Curry = require("rescript/lib/js/curry.js");
var React = require("react");
var Belt_Set = require("rescript/lib/js/belt_Set.js");

function str(prim) {
  return prim;
}

var placeholderImg = (require("../assets/placeholder_1.png"));

function InventoryItem(Props) {
  var id = Props.id;
  var title = Props.title;
  var description = Props.description;
  var toggleSelection = Props.toggleSelection;
  var selection = Props.selection;
  var selected = Belt_Set.has(selection, id);
  return React.createElement("button", {
              className: (
                selected ? "order-first brightness-100" : "brightness-50"
              ) + " transition-order hover:brightness-100 block bg-white p-4 rounded shadow m-1",
              onClick: (function (e) {
                  return Curry._2(toggleSelection, e, id);
                })
            }, React.createElement("img", {
                  style: {
                    width: "100%"
                  },
                  src: placeholderImg
                }), React.createElement("h2", {
                  className: "text-sm font-bold"
                }, title), React.createElement("p", {
                  className: "text-xs"
                }, description));
}

var make = InventoryItem;

exports.str = str;
exports.placeholderImg = placeholderImg;
exports.make = make;
/* placeholderImg Not a pure module */
