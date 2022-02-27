'use strict';

var React = require("react");
var ReactDatepicker = require("react-datepicker").default;

require("react-datepicker/dist/react-datepicker.css")
;

var ExternalDatePicker = {};

function DatePicker(Props) {
  var minDate = Props.minDate;
  var onChange = Props.onChange;
  var isOpen = Props.isOpen;
  var className = Props.className;
  var calendarClassName = Props.calendarClassName;
  var selected = Props.selected;
  return React.createElement(ReactDatepicker, {
              minDate: minDate,
              onChange: onChange,
              isOpen: isOpen,
              className: className,
              calendarClassName: calendarClassName,
              selected: selected
            });
}

var make = DatePicker;

exports.ExternalDatePicker = ExternalDatePicker;
exports.make = make;
/*  Not a pure module */
