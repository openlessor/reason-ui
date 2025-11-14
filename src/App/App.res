@react.component
let make = () => {
    let url = RescriptReactRouter.useUrl()
    
    switch url.path {
        | list{"item", activeIdOpt, ..._} => 
            <Landing activeIdOpt />
        | list{} => <Landing />
        | _ => <ErrorView />
    }
  }