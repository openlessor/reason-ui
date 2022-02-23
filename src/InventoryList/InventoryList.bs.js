'use strict';

var React = require("react");
var ReDate = require("@mobily/rescript-date/src/ReDate.bs.js");

function str(prim) {
  return prim;
}

function InventoryList(Props) {
  var openDate = Props.openDate;
  var closeDate = Props.closeDate;
  var filterType = "all";
  var heading = ReDate.isEqual(openDate, closeDate) ? "Showing " + (filterType + (" equipment available on " + openDate.toLocaleDateString())) : "Showing " + (filterType + (" equipment available from " + (openDate.toLocaleDateString() + (" to " + closeDate.toLocaleDateString()))));
  console.log(openDate);
  console.log(closeDate);
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
                      className: "m-4 text-slate-500 text-lg shadow-lg"
                    }, heading)));
}

var make = InventoryList;

exports.str = str;
exports.make = make;
/* react Not a pure module */
