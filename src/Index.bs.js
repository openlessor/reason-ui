'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/legacy/ReactDOMRe.bs.js");
var Landing$ReasonUi = require("./Landing/Landing.bs.js");

((require("../dist/tailwind.css")));

((require("react-date-picker/dist/DatePicker.css")));

((require("light-icons/dist/light-icon.css")));

ReactDOMRe.renderToElementWithId(React.createElement(Landing$ReasonUi.make, {}), "root");

/*  Not a pure module */
