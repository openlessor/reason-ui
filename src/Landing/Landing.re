let str = React.string;
//let logo: string = [%raw "require('./assets/logo.png')"];

[@react.component]
let make = () => {
  let dateA = "";
  let dateB = "10/12/2021";

    <div className=[%tw "h-screen justify-center flex items-center"]>
        <div className=[%tw "max-w-sm rounded shadow-lg p-4"]>
            <div className=[%tw "px-6 py-4"]>
                <div className=[%tw "font-bold text-xl mb-2"]>
                {"Reserve Equipment" |> str}
                </div>
                <p className=[%tw "text-gray-700 text-base"]>
                {"Book an equipment reservation" |> str}
                </p>
                <DayPicker isOpen={true} calendarClassName="bg-white" />
                <InventoryList dateA={dateA} dateB={dateB} />
            </div>
        </div>
    </div>
};