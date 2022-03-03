let str = React.string

let endpoint_url: string = "https://62210a40afd560ea69a5c07b.mockapi.io/mock"

@react.component
let make = (~dateA = ?, ~dateB = ?) => {
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

    let state: ExecutorHook.state = ExecutorHook.useExecutor(endpoint_url)
    let result = switch state {
        | ErrorLoadingEndpoint => <Error />
        | LoadingEndpoint => <Loading />
        | LoadedEndpoint(config) => 
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
                <InventoryList items={config.inventory} openDate={openDate} closeDate={closeDate} />
                <div className="w-full">
                    <button className="mx-auto mt-4 bg-slate-500 hover:bg-slate-700 text-white py-2 px-4 rounded">{"Book Reservation" |> str}</button>
                </div>
            </div>
        </div>
    </div>
    }
    Js.Console.log(state)
    result
}