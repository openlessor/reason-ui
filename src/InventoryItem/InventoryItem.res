let str = React.string

@react.component
let make = (~item: ExecutorHook.InventoryItem.t, ~hideDescription) => {
  let { id, title, description, image } = item
  let dispatch = React.useContext(Cart.DispatchContext.context)

  <button className="relative m-4 flex flex-col hover:brightness-100 block bg-white rounded shadow m-1" onClick={(_e) => { dispatch(Cart.DispatchContext.AddToCart({ id: id })) }}>
    <div className="rounded shadow m-0 p-0">
      <img className="p-4" src={image ++ "?" ++ Belt.Int.toString(id)} style={ReactDOM.Style.make(~width="100%", ())} />
    </div>
    <div className="flex flex-col">
      <h2 className="w-full text-align-center text-sm font-bold">{title |> str}</h2>
      <p className={(hideDescription ? "hidden " : "") ++ "text-xs m-4"}>{description |> str}</p>
    </div>
    <div className="group hover:opacity-50 inset-0 z-10 top-0 left-0 font-bold absolute h-full w-full hover:bg-slate-100 justify-self-end">
      <div className="inline-block group-hover:opacity-100 opacity-0 relative left-0 bottom-[-10%] z-10 text-6xl">
        <i className="light-icon-plus"></i>
      </div>
      <div className="inline-block group-hover:opacity-100 opacity-0 relative bottom-[-10%] left-[-10%] z-11 text-6xl">
        <i className="light-icon-shopping-cart"></i>
      </div>
      <div className="w-full inline-block group-hover:opacity-100 opacity-0 relative top-[2rem] z-11 text-lg">
        <span className="block w-full mx-auto">{"Add to Cart" |> str}</span>
      </div>
    </div>
  </button>
}
