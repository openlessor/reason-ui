let str = React.string;
//let logo: string = [%raw "require('./assets/logo.png')"];

[@react.component]
let make = (~dateA = ?, ~dateB = ?) => {
    let (openDate, setOpenDate) = React.useState(() => (switch dateA {
        | Some(date) => Js.Date.fromString(date)
        | None => Js.Date.make()
    }));
    let (closeDate, setCloseDate) = React.useState(() => (switch dateB {
        | Some(date) => Js.Date.fromString(date)
        | None => Js.Date.make()
    }));

    let today = Js.Date.make();

    <div className=[%twc "h-screen justify-center flex items-center"]>
        <div className=[%twc "w-full rounded shadow-lg p-4"]>
            <div className=[%twc "bg-zinc-100 rounded px-4 py-4"]>
                <div className=[%twc "align-middle font-bold text-3xl m-2 text-zinc-700"]>
                    <span className=[%twc "m-2 align-middle text-3xl font-light"]>
                        <i className="light-icon-cloud"></i>
                    </span>
                {"Cloud Hardware Rental" |> str}
                </div>
                <p className=[%twc "inline align-middle text-gray-700 text-base m-2"]>
                    <span className=[%twc "m-2 align-middle text-3xl font-light"]>
                        <i className="light-icon-calendar"></i>
                    </span> 
                    {"Select your reservation start date: " |> str}
                </p>
                <DayPicker minDate={today} onChange={setCloseDate} isOpen={false} className="m-2 inline-block" calendarClassName="bg-white" value={openDate} />
                <p className=[%twc "block align-middle text-gray-700 text-base m-2"]>
                    <span className=[%twc "m-2 align-middle text-3xl font-light"]>
                        <i className="light-icon-file-invoice"></i>
                    </span>
                    {"Select your reservation type: " |> str}
                    <ReservationTypeSelection />
                </p> 
                <InventoryList openDate={openDate} closeDate={closeDate} />
            </div>
        </div>
    </div>
};