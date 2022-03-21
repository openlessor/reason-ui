'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var App$ReasonUi = require("./App/App.mjs");

require("./tailwind.css")
;

require("light-icons/dist/light-icon.css")
;

require("react-datepicker/dist/react-datepicker.css")
;

var root = document.querySelector("#root");

if (!(root == null)) {
  ReactDom.render(React.createElement(App$ReasonUi.make, {}), root);
}

/*  Not a pure module */
