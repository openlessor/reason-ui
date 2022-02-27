'use strict';

var Curry = require("rescript/lib/js/curry.js");
var React = require("react");
var ReDate = require("@mobily/rescript-date/src/ReDate.mjs");
var Belt_Id = require("rescript/lib/js/belt_Id.js");
var Belt_Set = require("rescript/lib/js/belt_Set.js");
var Caml_obj = require("rescript/lib/js/caml_obj.js");
var InventoryItem$ReasonUi = require("../InventoryItem/InventoryItem.mjs");

function str(prim) {
  return prim;
}

var cmp = Caml_obj.caml_compare;

var IntCmp = Belt_Id.MakeComparable({
      cmp: cmp
    });

function InventoryList(Props) {
  var openDate = Props.openDate;
  var closeDate = Props.closeDate;
  var now = new Date();
  var today = new Date(now.setHours(0.0, 0.0, 0.0, 0.0));
  var heading = ReDate.isEqual(today, openDate) ? "Showing all equipment available today" : (
      ReDate.differenceInDays(openDate, closeDate) === 0.0 ? "Showing all equipment available on " + openDate.toLocaleDateString() : "Showing all equipment available from " + openDate.toLocaleDateString() + " to " + closeDate.toLocaleDateString()
    );
  var match = React.useState(function () {
        return Belt_Set.make(IntCmp);
      });
  var setSelection = match[1];
  var selection = match[0];
  var toggleSelection = function (_e, id) {
    return Curry._1(setSelection, (function (_prev) {
                  if (Belt_Set.has(selection, id)) {
                    return Belt_Set.remove(selection, id);
                  } else {
                    return Belt_Set.add(selection, id);
                  }
                }));
  };
  var items = [];
  for(var x = 1; x <= 15; ++x){
    items.push(React.createElement(InventoryItem$ReasonUi.make, {
              id: x,
              title: "Cisco 80" + String(x) + "0 Router",
              description: "Core network infrastructure router for testing and development",
              toggleSelection: toggleSelection,
              selection: selection,
              key: String(x)
            }));
  }
  return React.createElement("div", {
              className: "bg-slate-200 w-[100%] rounded p-1"
            }, React.createElement("div", {
                  className: "m-4 px-1 py-1"
                }, React.createElement("h1", {
                      className: "block font-bold align-middle text-gray-700 text-base m-2 text-3xl"
                    }, React.createElement("span", {
                          className: "m-2 align-middle text-3xl font-light"
                        }, React.createElement("i", {
                              className: "light-icon-search"
                            })), "Select equipment to rent"), React.createElement("span", {
                      className: "m-4 text-gray-500 text-lg shadow-lg"
                    }, heading), React.createElement("div", {
                      className: "grid grid-cols-8 gap-4"
                    }, items)));
}

var make = InventoryList;

exports.str = str;
exports.IntCmp = IntCmp;
exports.make = make;
/* IntCmp Not a pure module */
