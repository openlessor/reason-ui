'use strict';

var React = require("react");
var Belt_Int = require("rescript/lib/js/belt_Int.js");
var Error$ReasonUi = require("../Error/Error.mjs");
var Landing$ReasonUi = require("../Landing/Landing.mjs");
var RescriptReactRouter = require("@rescript/react/src/RescriptReactRouter.mjs");

function App(Props) {
  var url = RescriptReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  if (!match) {
    return React.createElement(Landing$ReasonUi.make, {});
  }
  if (match.hd === "item") {
    var match$1 = match.tl;
    if (match$1 && !match$1.tl) {
      var id = Belt_Int.fromString(match$1.hd);
      var id$1 = id !== undefined ? id : -1;
      return React.createElement(Landing$ReasonUi.make, {
                  activeId: id$1
                });
    }
    
  }
  return React.createElement(Error$ReasonUi.make, {});
}

var make = App;

exports.make = make;
/* react Not a pure module */
