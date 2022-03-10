%%raw(`require("react-datepicker/dist/react-datepicker.css")`)

@react.component @module("react-datepicker")
external make: (~calendarClassName: string, ~className: string, ~isOpen: bool, ~minDate: Js.Date.t, ~onChange: 'a, ~selected: Js.Date.t) => React.element = "default";