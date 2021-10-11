let str = React.string;
//let logo: string = [%raw "require('./assets/logo.png')"];

[@react.component]
let make = (~dateA = ?, ~dateB = ?) => {
    let (openDate, setOpenDate) = React.useState(() => switch(dateA) {
        Some(date) => Js.Date.fromString(date),
        None => Js.Date.make()
    });
    let (closeDate, setCloseDate) = React.useState(() => switch(dateB) {
        Some(date) => Js.Date.fromString(date),
        None => Js.Date.make()
    });    
    let heading;

    if (openDate == closeDate) {
        heading = "Equipment available on " ++ Js.Date.toLocaleDateString(openDate);
    } else {
        heading = "Equipment available from " ++ Js.Date.toLocalDateString(openDate) ++ " to " ++ Js.Date.toLocalDateString(closeDate); 
    }

    <div className=[%tw "w-screen"]>
        <h1 className=[%tw "text-2xl"]>{heading |> str}</h1>
    </div>
};
