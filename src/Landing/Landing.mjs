'use strict';

var Curry = require("rescript/lib/js/curry.js");
var React = require("react");
var DatePicker$ReasonUi = require("../DatePicker/DatePicker.mjs");
var InventoryList$ReasonUi = require("../InventoryList/InventoryList.mjs");
var ReservationTypeSelection$ReasonUi = require("../ReservationTypeSelection/ReservationTypeSelection.mjs");

function str(prim) {
  return prim;
}

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
  var closeDate = match$1[0];
  var updateDate = function (openDate) {
    Curry._1(setOpenDate, openDate);
    return Curry._1(setCloseDate, openDate);
  };
  console.log([
        now,
        today,
        openDate,
        closeDate
      ]);
  return React.createElement("div", {
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
                                })), "Cloud Hardware Rental"), React.createElement("p", {
                          className: "align-middle text-gray-700 text-base m-2 block"
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
                        }), React.createElement("p", {
                          className: "block align-middle text-gray-700 text-base m-2"
                        }, React.createElement("span", {
                              className: "m-2 align-middle text-3xl font-light"
                            }, React.createElement("i", {
                                  className: "light-icon-file-invoice"
                                })), "Select your reservation type: ", React.createElement(ReservationTypeSelection$ReasonUi.make, {})), React.createElement(InventoryList$ReasonUi.make, {
                          openDate: openDate,
                          closeDate: closeDate
                        }))));
}

var make = Landing;

exports.str = str;
exports.make = make;
/* react Not a pure module */
