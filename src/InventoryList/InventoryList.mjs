'use strict';

var React = require("react");
var ReDate = require("@mobily/rescript-date/src/ReDate.mjs");
var Belt_Id = require("rescript/lib/js/belt_Id.js");
var Caml_obj = require("rescript/lib/js/caml_obj.js");
var Caml_option = require("rescript/lib/js/caml_option.js");
var Cart$ReasonUi = require("../Cart/Cart.mjs");
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
  var items = Props.items;
  React.useContext(Cart$ReasonUi.DispatchContext.context);
  var cartState = React.useContext(Cart$ReasonUi.StateContext.context);
  var now = new Date();
  var today = new Date(now.setHours(0.0, 0.0, 0.0, 0.0));
  var heading = ReDate.isEqual(today, openDate) ? "Showing all equipment available today" : (
      ReDate.differenceInDays(openDate, closeDate) === 0.0 ? "Showing all equipment available on " + openDate.toLocaleDateString() : "Showing all equipment available from " + openDate.toLocaleDateString() + " to " + closeDate.toLocaleDateString()
    );
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
                            })), "Available equipment", React.createElement("span", {
                          className: "m-4 text-gray-500 text-lg shadow-lg"
                        }, heading)), React.createElement("div", {
                      className: "place-content-start grid grid-cols-4 gap-4"
                    }, items.filter(function (item) {
                            return Caml_option.undefined_to_opt(cartState.find(function (id) {
                                            return item.id === id;
                                          })) === undefined;
                          }).map(function (item) {
                          return React.createElement(InventoryItem$ReasonUi.make, {
                                      item: item,
                                      hideDescription: false,
                                      key: String(item.id)
                                    });
                        }))));
}

var make = InventoryList;

exports.str = str;
exports.IntCmp = IntCmp;
exports.make = make;
/* IntCmp Not a pure module */
