// Entry point
[%bs.raw {|require("../dist/tailwind.css")|}];
[%bs.raw {|require("react-date-picker/dist/DatePicker.css")|}];
[%bs.raw {|require("light-icons/dist/light-icon.css")|}];

ReactDOMRe.renderToElementWithId(<Landing />, "root");