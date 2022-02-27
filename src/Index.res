// Entry point
%%raw(`require("./tailwind.css")`)
%%raw(`require("react-date-picker/dist/DatePicker.css")`)
%%raw(`require("light-icons/dist/light-icon.css")`)

switch (ReactDOM.querySelector("#root")) {
  | Some(root) => ReactDOM.render(<Landing />, root)
  | None => ()
}