// Entry point
%%raw(`require("./tailwind.css")`)
%%raw(`require("light-icons/dist/light-icon.css")`)
%%raw(`require("react-datepicker/dist/react-datepicker.css")`)

switch (ReactDOM.querySelector("#root")) {
  | Some(root) => ReactDOM.render(<App />, root)
  | None => ()
}