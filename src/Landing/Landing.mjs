'use strict';

var Curry = require("rescript/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("rescript/lib/js/belt_Array.js");
var Cart$ReasonUi = require("../Cart/Cart.mjs");
var Error$ReasonUi = require("../Error/Error.mjs");
var Loading$ReasonUi = require("../Loading/Loading.mjs");
var ReactDatepicker = require("react-datepicker").default;
var ExecutorHook$ReasonUi = require("../ExecutorHook/ExecutorHook.mjs");
var InventoryList$ReasonUi = require("../InventoryList/InventoryList.mjs");
var ReservationTypeSelection$ReasonUi = require("../ReservationTypeSelection/ReservationTypeSelection.mjs");

function str(prim) {
  return prim;
}

var endpoint_url = "https://62210a40afd560ea69a5c07b.mockapi.io/mock";

function addToCart(state, id) {
  return {
          cart: Belt_Array.concat(state.cart, [id]),
          selected_item: state.selected_item,
          items: state.items
        };
}

function removeFromCart(state, id) {
  return {
          cart: state.cart.filter(function (compareId) {
                return compareId !== id;
              }),
          selected_item: state.selected_item,
          items: state.items
        };
}

function Landing(Props) {
  var dateA = Props.dateA;
  var dateB = Props.dateB;
  var activeIdOpt = Props.activeId;
  var activeId = activeIdOpt !== undefined ? activeIdOpt : -1;
  var now = new Date();
  var today = new Date(now.setHours(0.0, 0.0, 0.0, 0.0));
  var match = React.useState(function () {
        if (dateA !== undefined) {
          return new Date(dateA);
        } else {
          return today;
        }
      });
  var setOpenDate = match[1];
  var openDate = match[0];
  var match$1 = React.useState(function () {
        if (dateB !== undefined) {
          return new Date(dateB);
        } else {
          return openDate;
        }
      });
  var setCloseDate = match$1[1];
  var updateDate = function (openDate) {
    Curry._1(setOpenDate, openDate);
    return Curry._1(setCloseDate, openDate);
  };
  var match$2 = React.useReducer((function (state, action) {
          console.log("calling reducer");
          console.log({
                state: state,
                action: action
              });
          var result;
          result = action.TAG === /* AddToCart */0 ? addToCart(state, action.id) : removeFromCart(state, action.id);
          console.log({
                nextState: result
              });
          return result;
        }), {
        cart: [],
        selected_item: undefined,
        items: []
      });
  var state = match$2[0];
  var cartCount = state.cart.length;
  var configState = ExecutorHook$ReasonUi.useExecutor(endpoint_url);
  var result;
  if (typeof configState === "number") {
    result = configState !== 0 ? React.createElement(Loading$ReasonUi.make, {}) : React.createElement(Error$ReasonUi.make, {});
  } else {
    var configState$1 = configState._0;
    result = React.createElement("div", {
          className: "justify-center flex items-center"
        }, React.createElement("div", {
              className: "w-full rounded shadow-lg p-4"
            }, React.createElement("div", {
                  className: "bg-zinc-100 rounded px-4 py-4"
                }, React.createElement("div", {
                      className: "align-middle font-bold text-3xl m-2 text-zinc-700"
                    }, React.createElement("span", {
                          className: "m-2 align-middle text-3xl font-light"
                        }, React.createElement("i", {
                              className: "light-icon-cloud"
                            })), "Cloud Hardware Rental"), React.createElement("div", {
                      className: "align-middle text-gray-700 text-base m-2"
                    }, React.createElement("span", {
                          className: "m-2 align-middle text-3xl font-light"
                        }, React.createElement("i", {
                              className: "light-icon-calendar"
                            })), "Select your reservation start date: "), React.createElement(ReactDatepicker, {
                      calendarClassName: "bg-white",
                      className: "m-2 ml-14 block",
                      isOpen: false,
                      minDate: today,
                      onChange: updateDate,
                      selected: openDate
                    }), React.createElement("div", {
                      className: "align-middle text-gray-700 text-base m-2"
                    }, React.createElement("span", {
                          className: "m-2 align-middle text-3xl font-light"
                        }, React.createElement("i", {
                              className: "light-icon-file-invoice"
                            })), "Select your reservation type: ", React.createElement(ReservationTypeSelection$ReasonUi.make, {})), React.createElement(Cart$ReasonUi.StateContext.Provider.make, {
                      children: React.createElement(Cart$ReasonUi.DispatchContext.Provider.make, {
                            children: null,
                            value: match$2[1]
                          }, React.createElement(InventoryList$ReasonUi.make, {
                                openDate: openDate,
                                closeDate: match$1[0],
                                activeId: activeId,
                                items: configState$1.inventory
                              }), React.createElement(Cart$ReasonUi.make, {
                                items: configState$1.inventory,
                                count: cartCount
                              })),
                      value: state
                    }), React.createElement("div", {
                      className: "w-full"
                    }, React.createElement("button", {
                          className: "mx-auto mt-4 bg-slate-500 hover:bg-slate-700 text-white py-2 px-4 rounded"
                        }, "Book Reservation")))));
  }
  console.log(configState);
  return result;
}

var make = Landing;

exports.str = str;
exports.endpoint_url = endpoint_url;
exports.addToCart = addToCart;
exports.removeFromCart = removeFromCart;
exports.make = make;
/* react Not a pure module */
