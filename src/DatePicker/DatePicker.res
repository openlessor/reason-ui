%%raw(`require("react-datepicker/dist/react-datepicker.css")`)

module ExternalDatePicker = {
  @react.component @module("react-datepicker")
  external make: (~minDate: Js.Date.t, ~onChange: 'a, ~isOpen: bool, ~className: string, ~calendarClassName: string, ~selected: Js.Date.t) => React.element = "default";
}

@react.component
let make = (~minDate, ~onChange, ~isOpen, ~className, ~calendarClassName, ~selected) => {
  <ExternalDatePicker minDate onChange isOpen className calendarClassName selected />
}