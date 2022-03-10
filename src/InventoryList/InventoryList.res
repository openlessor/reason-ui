let str = React.string

module IntCmp =
  Belt.Id.MakeComparable({
    type t = int
    let cmp = Pervasives.compare
  })

@react.component
let make = (~openDate, ~closeDate, ~items: array<ExecutorHook.InventoryItem.t>) => {
  let dispatch = React.useContext(Cart.DispatchContext.context)
  let cartState = React.useContext(Cart.StateContext.context)

  let filterType = "all"
  let now = Js.Date.make()
  let today = Js.Date.fromFloat(
    Js.Date.setHoursMSMs(now, ~hours=0.0, ~minutes=0.0, ~seconds=0.0, ~milliseconds=0.0, ()),
  )

  let heading = {
    if today->ReDate.isEqual(openDate) {
      "Showing " ++ filterType ++ " equipment available today"
    } else if openDate->ReDate.differenceInDays(closeDate) == 0.0 {
      // There is no close date selected and the reservation date is not today
      "Showing " ++ filterType ++ " equipment available on " ++ Js.Date.toLocaleDateString(openDate)
    } else {
      // The open date and close date are at least 1 day apart
      "Showing " ++ filterType ++ " equipment available from " ++ Js.Date.toLocaleDateString(openDate) ++ " to " ++ Js.Date.toLocaleDateString(closeDate)
    }
  }
  
  //let (selection, setSelection) = React.useState(_ => Belt.Set.make(~id=module(IntCmp)))
  let toggleSelection = (_e, id) => {
    //setSelection(_prev => {
      // if Belt.Set.has(selection, id) {
      //  dispatch(RemoveFromCart({ id: id }))
      //  Belt.Set.remove(selection, id)
      //} else {
        dispatch(AddToCart({ id: id }))
      //  Belt.Set.fromArray(cartState, ~id=module(IntCmp))
      //}
    //})
  }
  //let toggleSelection = (_e, id) => {
    //setSelection(_prev => {
    //if Belt.Set.has(selection, id) {
    //  Belt.Set.remove(selection, id)
    //} else {
      // dispatch Cart.addToCart(cartState, id)
      // Belt.Set.fromArray(Belt.Array.map(cartState.items, (item) => item.id), ~id=module(IntCmp))
    //}
    // })
  //}
 
  <div className="bg-slate-200 w-[100%] rounded p-1">
    <div className="m-4 px-1 py-1">
      <h1 className="block font-bold align-middle text-gray-700 text-base m-2 text-3xl">
        <span className="m-2 align-middle text-3xl font-light">
          <i className="light-icon-search" />
        </span>
        {"Available equipment" |> str}
        <span className="m-4 text-gray-500 text-lg shadow-lg">{heading |> str}</span>
      </h1>
      <div className="place-content-start grid grid-cols-4 gap-4">
        {Js.Array.map((item: ExecutorHook.InventoryItem.t) =>
          <InventoryItem
              key={Belt.Int.toString(item.id)}
              item={item}
              hideDescription={false}
            />,
           Js.Array.filter((item: ExecutorHook.InventoryItem.t) =>
             Js.Array.find((id) => item.id == id, cartState) === None
           , items)) |> React.array}
      </div>
    </div>
  </div>
}
