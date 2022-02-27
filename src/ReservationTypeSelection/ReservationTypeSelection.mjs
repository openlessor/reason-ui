'use strict';

var React = require("react");

function str(prim) {
  return prim;
}

function ReservationTypeSelection(Props) {
  return React.createElement("div", {
              className: "ml-10"
            }, React.createElement("div", {
                  className: "inline-block"
                }, React.createElement("label", {
                      htmlFor: "type_hour"
                    }, React.createElement("input", {
                          className: "m-1",
                          id: "type_hour",
                          name: "type",
                          type: "radio",
                          value: "hour"
                        }), React.createElement("span", {
                          className: "p-1 pl-0"
                        }, " Hourly"))), React.createElement("div", {
                  className: "inline-block"
                }, React.createElement("label", {
                      htmlFor: "type_date"
                    }, React.createElement("input", {
                          className: "m-1",
                          id: "type_date",
                          name: "type",
                          type: "radio",
                          value: "date"
                        }), React.createElement("span", {
                          className: "p-1 pl-0"
                        }, " Until specified date"))));
}

var make = ReservationTypeSelection;

exports.str = str;
exports.make = make;
/* react Not a pure module */
