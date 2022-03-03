'use strict';

var Curry = require("rescript/lib/js/curry.js");
var React = require("react");

function str(prim) {
  return prim;
}

function InventoryItem(Props) {
  var item = Props.item;
  var toggleSelection = Props.toggleSelection;
  var hideDescription = Props.hideDescription;
  var id = item.id;
  return React.createElement("button", {
              className: "relative m-4 flex flex-col hover:brightness-100 block bg-white rounded shadow m-1",
              onClick: (function (e) {
                  return Curry._2(toggleSelection, e, id);
                })
            }, React.createElement("img", {
                  className: "p-4",
                  style: {
                    width: "100%"
                  },
                  src: item.image
                }), React.createElement("div", {
                  className: "flex flex-col"
                }, React.createElement("h2", {
                      className: "w-full text-align-center text-sm font-bold"
                    }, item.title), React.createElement("p", {
                      className: (
                        hideDescription ? "hidden " : ""
                      ) + "text-xs m-4"
                    }, item.description)), React.createElement("div", {
                  className: "opacity-50 z-10 top-0 left-0 text-3xl font-bold absolute h-full w-full hover:bg-slate-100 hidden hover:block justify-self-end"
                }, React.createElement("i", {
                      className: "light-icon-plus relative top-[100%]"
                    })));
}

var make = InventoryItem;

exports.str = str;
exports.make = make;
/* react Not a pure module */
