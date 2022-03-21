let str = React.string

@react.component
let make = (~item: ExecutorHook.InventoryItem.t, ~active = false) => {
  let { id, title, description, image } = item
  let dispatch = React.useContext(Cart.DispatchContext.context)
  let cartState = React.useContext(Cart.StateContext.context)
  let matches = Js.Array.filter((cart_item) => cart_item == item.id, cartState.cart)
  let matchCount = Js.Array.length(matches)
  let quantity = matchCount > 0 ? Belt.Int.toString(Js.Array.length(matches)) : "0"
  let available = Belt.Int.toString(item.quantity - matchCount)
  <a id={"item-" ++ Belt.Int.toString(id)} href={"/item/" ++  Belt.Int.toString(id)} onClick={(_e) => RescriptReactRouter.push("item/" ++  Belt.Int.toString(id))} className="active:col-span-4 target:col-span-4 lg:active:col-span-8 lg:target:col-span-8 block">
    <button className="relative m-[1.5] flex flex-col block">
      <div className="rounded border-2 shadow m-0 p-0">
        <img className="p-[1.5]" src={image ++ "?" ++ Belt.Int.toString(id)} style={ReactDOM.Style.make(~width="100%", ())} />
      </div>
      <div className="flex flex-row justify-between w-full bg-gray-300 text-white shadow">
        <span className="drop-shadow"><i className="light-icon-shopping-cart text-xl"></i> <span className="text-[0.5rem]" title="Quantity in cart">{{ quantity |> str }}</span></span>
        <span className="drop-shadow"><i className="light-icon-checks text-xl"></i> <span className="text-[0.5rem]" title="Quantity available">{{ available |> str }}</span></span>
      </div>
      <div className="flex flex-col text-align-center w-full bg-white text-gray-300 rounded m-[1.5] justify-self-end">
        <h2 className="w-full text-xs drop-shadow text-gray-500">{title |> str}</h2>
        <p className={(active === false ? "hidden " : "") ++ "text-xs m-2"}>{description |> str}</p>
      </div>
    </button>
  </a>
}
