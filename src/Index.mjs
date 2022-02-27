'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Landing$ReasonUi = require("./Landing/Landing.mjs");

require("./tailwind.css")
;

require("light-icons/dist/light-icon.css")
;

var root = document.querySelector("#root");

if (!(root == null)) {
  ReactDom.render(React.createElement(Landing$ReasonUi.make, {}), root);
}

/*  Not a pure module */
