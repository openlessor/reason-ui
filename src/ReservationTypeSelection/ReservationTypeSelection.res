let str = React.string;

@react.component
let make = () => {
    (
        <div className="m-2 ml-12 block">
            <span className="inline-block">
                <label htmlFor="type_hour">
                    <input className="ml-1 mr-1" id="type_hour" name="type" type_="radio" value="hour" />
                    <span>{" Hourly" |> str}</span>
                </label>
            </span>
            <span className="inline-block">
                <label htmlFor="type_date">
                    <input className="ml-4 mr-1" id="type_date" name="type" type_="radio" value="date" />
                    <span>{" Until specified date" |> str}</span>
                </label>
            </span>
        </div>
    )
};