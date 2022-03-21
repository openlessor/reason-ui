let str = React.string

let endpoint_url: string = "https://62210a40afd560ea69a5c07b.mockapi.io/mock"

let addToCart = (state: Cart.t, id) => {
  { ...state, cart: Belt.Array.concat(state.cart, [id]) }
}

let removeFromCart = (state: Cart.t, id) => {
  { ...state, cart: Js.Array.filter((compareId) => {
    compareId != id
  }, state.cart) }
}

@react.component
let make = (~dateA = ?, ~dateB = ?, ~activeId = -1) => {
    let now = Js.Date.make()
    let today = Js.Date.fromFloat(Js.Date.setHoursMSMs(now, ~hours=0.0, ~minutes=0.0, ~seconds=0.0, ~milliseconds=0.0, ()))

    let (openDate, setOpenDate) = React.useState(() => (switch dateA {
        | Some(date) => Js.Date.fromString(date)
        | None => today
    }))
    let (closeDate, setCloseDate) = React.useState(() => (switch dateB {
        | Some(date) => Js.Date.fromString(date)
        | None => openDate
    }))
    let updateDate = (openDate) => {
        setOpenDate(openDate)
        setCloseDate(openDate)
    }

    let (state, dispatch) = React.useReducer((state, action) => {
        Js.Console.log("calling reducer")
        Js.Console.log({ "state": state, "action": action })
        let result = switch action {
        | Cart.DispatchContext.AddToCart({ id }) => addToCart(state, id)
        | Cart.DispatchContext.RemoveFromCart({ id }) => removeFromCart(state, id)
        }
        Js.Console.log({"nextState": result })
        result
    }, { items: [], selected_item: None, cart: [] })
    let cartCount = Belt.Array.length(state.cart)

    let configState: ExecutorHook.state = ExecutorHook.useExecutor(endpoint_url)
    let result = switch configState {
        | ErrorLoadingEndpoint => <Error />
        | LoadingEndpoint => <Loading />
        | LoadedEndpoint(configState) => 
    <div className="justify-center flex items-center">
        <div className="w-full rounded shadow-lg p-4">
            <div className="bg-zinc-100 rounded px-4 py-4">
                <div className="align-middle font-bold text-3xl m-2 text-zinc-700">
                    <span className="m-2 align-middle text-3xl font-light">
                        <i className="light-icon-cloud"></i>
                    </span>
                {"Cloud Hardware Rental" |> str}
                </div>
                <div className="align-middle text-gray-700 text-base m-2">
                    <span className="m-2 align-middle text-3xl font-light">
                        <i className="light-icon-calendar"></i>
                    </span> 
                    {"Select your reservation start date: " |> str}
                </div>
                <DatePicker minDate={today} onChange={updateDate} isOpen={false} className="m-2 ml-14 block" calendarClassName="bg-white" selected={openDate} />
                <div className="align-middle text-gray-700 text-base m-2">
                    <span className="m-2 align-middle text-3xl font-light">
                        <i className="light-icon-file-invoice"></i>
                    </span>
                    {"Select your reservation type: " |> str}
                    <ReservationTypeSelection />
                </div>
                <Cart.StateContext.Provider value={state}>
                    <Cart.DispatchContext.Provider value={dispatch}>
                        <InventoryList activeId={activeId} items={configState.inventory} openDate={openDate} closeDate={closeDate} />
                        <Cart count={cartCount} items={configState.inventory} />
                    </Cart.DispatchContext.Provider>
                </Cart.StateContext.Provider>
                <div className="w-full">
                    <button className="mx-auto mt-4 bg-slate-500 hover:bg-slate-700 text-white py-2 px-4 rounded">{"Book Reservation" |> str}</button>
                </div>
            </div>
        </div>
    </div>
    }
    Js.Console.log(configState)
    result
}