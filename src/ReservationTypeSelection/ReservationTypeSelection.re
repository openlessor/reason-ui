let str = React.string;

[@react.component]
let make = () => {
    (
        <div className=[%twc "m-4"]>
            <p className=[%twc "inline p-1"]>
                <label htmlFor="type_hour">
                    <input id="type_hour" name="type" type_="radio" value="hour" />
                    <span>{" Hourly" |> str}</span>
                </label>
            </p>
            <p className=[%twc "inline p-1"]>
                <label htmlFor="type_date">
                    <input id="type_date" name="type" type_="radio" value="date" />
                    <span>{" Until specified date" |> str}</span>
                </label>
            </p>
        </div>
    )
};