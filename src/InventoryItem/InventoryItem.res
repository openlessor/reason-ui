let str = React.string
let placeholderImg = %raw(`require("../assets/placeholder_1.png")`)

@react.component
let make = (~id, ~title, ~description) => {
  let (selected, setSelected) = React.useState(_ => false);
  let toggle = (e) => {
    setSelected(_prev => !selected)
  };
  <button className={if selected { "brightness-100 order-first" } else { "brightness-50" } ++ " transition-order hover:brightness-100 block bg-white p-4 rounded shadow m-1"} onClick={toggle}>
    <img src={placeholderImg} style={ReactDOM.Style.make(~width="100%", ())} />
    <h2 className="text-lg font-bold">{title |> str}</h2>
    <p className="text-sm">{description |> str}</p>
  </button>
}
