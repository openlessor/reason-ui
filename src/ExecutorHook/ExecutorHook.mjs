'use strict';

var Curry = require("rescript/lib/js/curry.js");
var React = require("react");

var InventoryItem = {};

var ExecutorConfig = {};

function useExecutor(url) {
  var match = React.useState(function () {
        return /* LoadingEndpoint */1;
      });
  var setState = match[1];
  React.useEffect((function () {
          var request = new XMLHttpRequest();
          request.addEventListener("load", (function (param) {
                  return Curry._1(setState, (function (_previousState) {
                                return /* LoadedEndpoint */{
                                        _0: JSON.parse(request.response)
                                      };
                              }));
                }));
          request.addEventListener("error", (function (param) {
                  return Curry._1(setState, (function (_previousState) {
                                return /* ErrorLoadingEndpoint */0;
                              }));
                }));
          request.open("GET", url);
          request.send();
          return (function (param) {
                    request.abort();
                    
                  });
        }), []);
  return match[0];
}

exports.InventoryItem = InventoryItem;
exports.ExecutorConfig = ExecutorConfig;
exports.useExecutor = useExecutor;
/* react Not a pure module */
