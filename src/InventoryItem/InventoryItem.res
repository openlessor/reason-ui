let str = React.string

@react.component
let make = (~item: ExecutorHook.ExecutorConfig.InventoryItem.t, ~toggleSelection, ~hideDescription) => {
  let { id, title, description, image } = item
  <button className="relative m-4 flex flex-col hover:brightness-100 block bg-white rounded shadow m-1" onClick={(e) => { toggleSelection(e, id) }}>
    <img className="p-4" src={image} style={ReactDOM.Style.make(~width="100%", ())} />
    <div className="flex flex-col">
      <h2 className="w-full text-align-center text-sm font-bold">{title |> str}</h2>
      <p className={(hideDescription ? "hidden " : "") ++ "text-xs m-4"}>{description |> str}</p>
    </div>
    <div className="opacity-50 z-10 top-0 left-0 text-3xl font-bold absolute h-full w-full hover:bg-slate-100 hidden hover:block justify-self-end">
      <i className="light-icon-plus relative top-[100%]"></i>
    </div>
  </button>
}
