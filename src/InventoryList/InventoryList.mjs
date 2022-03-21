'use strict';

var React = require("react");
var ReDate = require("@mobily/rescript-date/src/ReDate.mjs");
var Belt_Id = require("rescript/lib/js/belt_Id.js");
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
  var activeId = Props.activeId;
  var items = Props.items;
  var now = new Date();
  var today = new Date(now.setHours(0.0, 0.0, 0.0, 0.0));
  var heading = ReDate.isEqual(today, openDate) ? "Showing all equipment available today" : (
      ReDate.differenceInDays(openDate, closeDate) === 0.0 ? "Showing all equipment available on " + openDate.toLocaleDateString() : "Showing all equipment available from " + openDate.toLocaleDateString() + " to " + closeDate.toLocaleDateString()
    );
  return React.createElement("div", {
              className: "m-4 px-1 py-1"
            }, React.createElement("h1", {
                  className: "block font-bold align-middle text-gray-700 text-base m-2 text-3xl"
                }, React.createElement("span", {
                      className: "m-2 align-middle text-3xl font-light"
                    }, React.createElement("i", {
                          className: "light-icon-search"
                        })), "Available equipment", React.createElement("span", {
                      className: "m-4 text-gray-500 text-lg shadow-lg"
                    }, heading)), React.createElement("div", {
                  className: "place-content-start grid lg:grid-cols-8 grid-cols-4 gap-4"
                }, items.map(function (item) {
                      return React.createElement(InventoryItem$ReasonUi.make, {
                                  item: item,
                                  active: item.id === activeId,
                                  key: String(item.id)
                                });
                    })));
}

var make = InventoryList;

exports.str = str;
exports.IntCmp = IntCmp;
exports.make = make;
/* IntCmp Not a pure module */
