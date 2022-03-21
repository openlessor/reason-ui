let str = React.string

module IntCmp =
  Belt.Id.MakeComparable({
    type t = int
    let cmp = Pervasives.compare
  })

@react.component
let make = (~openDate, ~closeDate, ~activeId, ~items: array<ExecutorHook.InventoryItem.t>) => {
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

  <div className="m-4 px-1 py-1">
    <h1 className="block font-bold align-middle text-gray-700 text-base m-2 text-3xl">
      <span className="m-2 align-middle text-3xl font-light">
        <i className="light-icon-search" />
      </span>
      {"Available equipment" |> str}
      <span className="m-4 text-gray-500 text-lg shadow-lg">{heading |> str}</span>
    </h1>
    <div className="place-content-start grid lg:grid-cols-8 grid-cols-4 gap-4">
      {Js.Array.map((item: ExecutorHook.InventoryItem.t) =>
        <InventoryItem
          key={Belt.Int.toString(item.id)}
          item={item}
          active={item.id == activeId}
        />,
        items) |> React.array}
    </div>
  </div>
}
