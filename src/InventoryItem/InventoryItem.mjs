'use strict';

var Curry = require("rescript/lib/js/curry.js");
var React = require("react");

function str(prim) {
  return prim;
}

var placeholderImg = (require("../assets/placeholder_1.png"));

function InventoryItem(Props) {
  var id = Props.id;
  var title = Props.title;
  var description = Props.description;
  var toggleSelection = Props.toggleSelection;
  var hideDescription = Props.hideDescription;
  return React.createElement("button", {
              className: "transition-order hover:brightness-100 block bg-white p-4 rounded shadow m-1",
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
                  className: (
                    hideDescription ? "hidden " : ""
                  ) + "text-xs"
                }, description));
}

var make = InventoryItem;

exports.str = str;
exports.placeholderImg = placeholderImg;
exports.make = make;
/* placeholderImg Not a pure module */
