'use strict';

var Curry = require("rescript/lib/js/curry.js");
var React = require("react");
var Error$ReasonUi = require("../Error/Error.mjs");
var Loading$ReasonUi = require("../Loading/Loading.mjs");
var DatePicker$ReasonUi = require("../DatePicker/DatePicker.mjs");
var ExecutorHook$ReasonUi = require("../ExecutorHook/ExecutorHook.mjs");
var InventoryList$ReasonUi = require("../InventoryList/InventoryList.mjs");
var ReservationTypeSelection$ReasonUi = require("../ReservationTypeSelection/ReservationTypeSelection.mjs");

function str(prim) {
  return prim;
}

var endpoint_url = "https://62210a40afd560ea69a5c07b.mockapi.io/mock";

function Landing(Props) {
  var dateA = Props.dateA;
  var dateB = Props.dateB;
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
  var state = ExecutorHook$ReasonUi.useExecutor(endpoint_url);
  var result = typeof state === "number" ? (
      state !== 0 ? React.createElement(Loading$ReasonUi.make, {}) : React.createElement(Error$ReasonUi.make, {})
    ) : React.createElement("div", {
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
                            })), "Select your reservation start date: "), React.createElement(DatePicker$ReasonUi.make, {
                      minDate: today,
                      onChange: updateDate,
                      isOpen: false,
                      className: "m-2 ml-14 block",
                      calendarClassName: "bg-white",
                      selected: openDate
                    }), React.createElement("div", {
                      className: "align-middle text-gray-700 text-base m-2"
                    }, React.createElement("span", {
                          className: "m-2 align-middle text-3xl font-light"
                        }, React.createElement("i", {
                              className: "light-icon-file-invoice"
                            })), "Select your reservation type: ", React.createElement(ReservationTypeSelection$ReasonUi.make, {})), React.createElement(InventoryList$ReasonUi.make, {
                      openDate: openDate,
                      closeDate: match$1[0],
                      items: state._0.inventory
                    }), React.createElement("div", {
                      className: "w-full"
                    }, React.createElement("button", {
                          className: "mx-auto mt-4 bg-slate-500 hover:bg-slate-700 text-white py-2 px-4 rounded"
                        }, "Book Reservation")))));
  console.log(state);
  return result;
}

var make = Landing;

exports.str = str;
exports.endpoint_url = endpoint_url;
exports.make = make;
/* react Not a pure module */
