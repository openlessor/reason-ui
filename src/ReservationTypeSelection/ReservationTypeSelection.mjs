'use strict';

var React = require("react");

function str(prim) {
  return prim;
}

function ReservationTypeSelection(Props) {
  return React.createElement("div", {
              className: "m-2 ml-12 block"
            }, React.createElement("span", {
                  className: "inline-block"
                }, React.createElement("label", {
                      htmlFor: "type_hour"
                    }, React.createElement("input", {
                          className: "ml-1 mr-1",
                          id: "type_hour",
                          name: "type",
                          type: "radio",
                          value: "hour"
                        }), React.createElement("span", undefined, " Hourly"))), React.createElement("span", {
                  className: "inline-block"
                }, React.createElement("label", {
                      htmlFor: "type_date"
                    }, React.createElement("input", {
                          className: "ml-4 mr-1",
                          id: "type_date",
                          name: "type",
                          type: "radio",
                          value: "date"
                        }), React.createElement("span", undefined, " Until specified date"))));
}

var make = ReservationTypeSelection;

exports.str = str;
exports.make = make;
/* react Not a pure module */
