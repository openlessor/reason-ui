let str = React.string

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

    Js.Console.log([now, today, openDate, closeDate])

    <div className="justify-center flex items-center">
        <div className="w-full rounded shadow-lg p-4">
            <div className="bg-zinc-100 rounded px-4 py-4">
                <div className="align-middle font-bold text-3xl m-2 text-zinc-700">
                    <span className="m-2 align-middle text-3xl font-light">
                        <i className="light-icon-cloud"></i>
                    </span>
                {"Cloud Hardware Rental" |> str}
                </div>
                <p className="align-middle text-gray-700 text-base m-2 block">
                    <span className="m-2 align-middle text-3xl font-light">
                        <i className="light-icon-calendar"></i>
                    </span> 
                    {"Select your reservation start date: " |> str}
                </p>
                <DayPicker minDate={today} onChange={updateDate} isOpen={false} className="m-2 ml-14 block" calendarClassName="bg-white" value={openDate} />
                <p className="block align-middle text-gray-700 text-base m-2">
                    <span className="m-2 align-middle text-3xl font-light">
                        <i className="light-icon-file-invoice"></i>
                    </span>
                    {"Select your reservation type: " |> str}
                    <ReservationTypeSelection />
                </p> 
                <InventoryList openDate={openDate} closeDate={closeDate} />
            </div>
        </div>
    </div>
}