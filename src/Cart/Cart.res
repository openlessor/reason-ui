let str = React.string

type rec t = {cart: array<int>, selected_item: option<int>, items: array<ExecutorHook.InventoryItem.t>}

let itemCount = (state) => {
  Belt.Array.length(state)
}

module DispatchContext = {
  type action = AddToCart({ id:int }) | RemoveFromCart({ id:int })

  let context = React.createContext((_action: action) => ())

  module Provider = {
    let provider = React.Context.provider(context)

    @react.component
    let make = (~children, ~value) => {
        React.createElement(provider, {"children": children, "value": value})
    } 
  }
}

module StateContext = {
  let state: t = {cart: [], selected_item: None, items: []}
  let context = React.createContext(state)

  module Provider = {
    let provider = React.Context.provider(context)

    @react.component
    let make = (~children, ~value: t) => {
        React.createElement(provider, {"children": children, "value": value})
    } 
  }
}

/**
@react.component
let make = (~initialCount: int) => {
  let (state, dispatch) = React.useReducerWithMapState(
    reducer,
    initialCount,
    init,
  )

  <>
    {React.string("Count:" ++ Belt.Int.toString(state.count))}
    <button onClick={_ => dispatch(Dec)}> {React.string("-")} </button>
    <button onClick={_ => dispatch(Inc)}> {React.string("+")} </button>
  </>
}
*/

@react.component
let make = (~items, ~count) => {
    let cartState = React.useContext(StateContext.context)
    let dispatch = React.useContext(DispatchContext.context)
    Js.Console.log({"CartState": cartState})
    // let (count, setCount) = React.useState(() => Belt.Array.length(cartState))
    // React.useEffect(() => {
    //   Js.Console.log("count: " ++ Belt.Int.toString(Belt.Array.length(cartState)))
    //  setCount(_int => Belt.Array.length(cartState))
    //  None
    // })

    <h1 className="block font-bold align-middle text-gray-700 text-base m-2 text-3xl">
      <span className="m-2 align-middle text-3xl font-light">
          <i className="light-icon-shopping-cart"></i>
      </span>
      {"Selected equipment (" |> str}
      {Belt.Int.toString(count) |> str}
      {")" |> str}
    </h1>
}