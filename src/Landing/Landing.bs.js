'use strict';

var React = require("react");
var InventoryList$ReasonUi = require("../InventoryList/InventoryList.bs.js");
var ReservationTypeSelection$ReasonUi = require("../ReservationTypeSelection/ReservationTypeSelection.bs.js");
var DatePicker = require("react-date-picker/dist/DatePicker").default;

function str(prim) {
  return prim;
}

function Landing(Props) {
  var dateA = Props.dateA;
  var dateB = Props.dateB;
  var match = React.useState(function () {
        if (dateA !== undefined) {
          return new Date(dateA);
        } else {
          return new Date();
        }
      });
  var openDate = match[0];
  var match$1 = React.useState(function () {
        if (dateB !== undefined) {
          return new Date(dateB);
        } else {
          return new Date();
        }
      });
  var today = new Date();
  return React.createElement("div", {
              className: "h-screen justify-center flex items-center"
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
                          className: "inline align-middle text-gray-700 text-base m-2"
                        }, React.createElement("span", {
                              className: "m-2 align-middle text-3xl font-light"
                            }, React.createElement("i", {
                                  className: "light-icon-calendar"
                                })), "Select your reservation start date: "), React.createElement(DatePicker, {
                          className: "m-2 inline-block",
                          minDate: today,
                          value: openDate,
                          isOpen: false,
                          calendarClassName: "bg-white",
                          onChange: match$1[1]
                        }), React.createElement("p", {
                          className: "block align-middle text-gray-700 text-base m-2"
                        }, React.createElement("span", {
                              className: "m-2 align-middle text-3xl font-light"
                            }, React.createElement("i", {
                                  className: "light-icon-file-invoice"
                                })), "Select your reservation type: ", React.createElement(ReservationTypeSelection$ReasonUi.make, {})), React.createElement(InventoryList$ReasonUi.make, {
                          openDate: openDate,
                          closeDate: match$1[0]
                        }))));
}

var make = Landing;

exports.str = str;
exports.make = make;
/* react Not a pure module */
