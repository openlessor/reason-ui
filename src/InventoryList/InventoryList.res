let str = React.string

module IntCmp =
  Belt.Id.MakeComparable({
    type t = int
    let cmp = Pervasives.compare
  })

@react.component
let make = (~openDate, ~closeDate) => {
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
  
  let (selection, setSelection) = React.useState(_ => Belt.Set.make(~id=module(IntCmp)))
  let toggleSelection = (_e, id) => {
    setSelection(_prev => if Belt.Set.has(selection, id) {
      Belt.Set.remove(selection, id)
    } else {
      Belt.Set.add(selection, id)
    })
  }

  let items = []
  for x in 1 to 15 {
    Js.Array2.push(items, 
      <InventoryItem
          key={Belt.Int.toString(x)}
          id={x}
          title={"Cisco 80" ++ Belt.Int.toString(x) ++ "0 Router"}
          description="Core network infrastructure router for testing and development"
          toggleSelection={toggleSelection}
          selection={selection}
      />)->ignore
  }

  <div className="bg-slate-200 w-[100%] rounded p-1">
    <div className="m-4 px-1 py-1">
      <h1 className="block font-bold align-middle text-gray-700 text-base m-2 text-3xl">
        <span className="m-2 align-middle text-3xl font-light">
          <i className="light-icon-search" />
        </span>
        {"Select equipment to rent" |> str}
      </h1>
      <span className="m-4 text-gray-500 text-lg shadow-lg">{heading |> str}</span>
      <div className="grid grid-cols-8 gap-4">
        {items |> React.array}
      </div>
    </div>
  </div>
}
