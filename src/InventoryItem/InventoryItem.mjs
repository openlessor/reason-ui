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
                  className: "group hover:opacity-50 inset-0 z-10 top-0 left-0 font-bold absolute h-full w-full hover:bg-slate-100 justify-self-end"
                }, React.createElement("div", {
                      className: "inline-block group-hover:opacity-100 opacity-0 relative left-0 bottom-[-10%] z-10 text-6xl"
                    }, React.createElement("i", {
                          className: "light-icon-plus"
                        })), React.createElement("div", {
                      className: "inline-block group-hover:opacity-100 opacity-0 relative bottom-[-10%] left-[-10%] z-11 text-6xl"
                    }, React.createElement("i", {
                          className: "light-icon-shopping-cart"
                        })), React.createElement("div", {
                      className: "w-full inline-block group-hover:opacity-100 opacity-0 relative top-[2rem] z-11 text-lg"
                    }, React.createElement("span", {
                          className: "block w-full mx-auto"
                        }, "Add to Cart"))));
}

var make = InventoryItem;

exports.str = str;
exports.make = make;
/* react Not a pure module */
