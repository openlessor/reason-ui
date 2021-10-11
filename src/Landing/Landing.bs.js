'use strict';

var React = require("react");
var InventoryList$ReasonUi = require("../InventoryList/InventoryList.bs.js");
var DatePicker = require("react-date-picker/dist/DatePicker").default;

function str(prim) {
  return prim;
}

function Landing(Props) {
  return React.createElement("div", {
              className: "h-screen justify-center flex items-center"
            }, React.createElement("div", {
                  className: "max-w-sm rounded shadow-lg p-4"
                }, React.createElement("div", {
                      className: "px-6 py-4"
                    }, React.createElement("div", {
                          className: "font-bold text-xl mb-2"
                        }, "Reserve Equipment"), React.createElement("p", {
                          className: "text-gray-700 text-base"
                        }, "Book an equipment reservation"), React.createElement(DatePicker, {
                          isOpen: true,
                          calendarClassName: "bg-white"
                        }), React.createElement(InventoryList$ReasonUi.make, {}))));
}

var make = Landing;

exports.str = str;
exports.make = make;
/* react Not a pure module */
