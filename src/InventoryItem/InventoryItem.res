let str = React.string
let placeholderImg = %raw(`require("../assets/placeholder_1.png")`)

@react.component
let make = (~id, ~title, ~description, ~toggleSelection, ~hideDescription) => {
  <button className="transition-order hover:brightness-100 block bg-white p-4 rounded shadow m-1" onClick={(e) => { toggleSelection(e, id) }}>
    <img src={placeholderImg} style={ReactDOM.Style.make(~width="100%", ())} />
    <h2 className="text-sm font-bold">{title |> str}</h2>
    <p className={(hideDescription ? "hidden " : "") ++ "text-xs"}>{description |> str}</p>
  </button>
}
