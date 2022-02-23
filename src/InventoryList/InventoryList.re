let str = React.string;
//let logo: string = [%raw "require('./assets/logo.png')"];

[@react.component]
let make = (~openDate, ~closeDate) => { 
    let filterType = "all";
    let heading = { 
        if (openDate->ReDate.isEqual(closeDate)) {
            ( "Showing " ++ filterType ++ " equipment available on " ++ Js.Date.toLocaleDateString(openDate) )
        } else {
            ( "Showing " ++ filterType ++ " equipment available from " ++ Js.Date.toLocaleDateString(openDate) ++ " to " ++ Js.Date.toLocaleDateString(closeDate) ) 
        }
    };
    Js.Console.log(openDate);
    Js.Console.log(closeDate);
    // log(Js.Date.fromString(openDate).toLocaleDateString());
    // log(Js.Date.fromString(closeDate).toLocaleDateString());

    (
        <div className=[%twc "bg-slate-200 w-[100%] rounded p-1"]>
            <div className=[%twc "m-4 px-1 py-1"]>
                <h1 className=[%twc "block font-bold align-middle text-gray-700 text-base m-2 text-3xl"]>
                    <span className=[%twc "m-2 align-middle text-3xl font-light"]>
                        <i className="light-icon-search"></i>
                    </span>
                    {"Select equipment to rent" |> str}
                </h1> 
                <span className=[%twc "m-4 text-slate-500 text-lg shadow-lg"]>
                    {heading |> str}
                </span>
            </div>
        </div>
    )
};
