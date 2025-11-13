@react.component
let make = () => {
    let url = RescriptReactRouter.useUrl()
    
    switch url.path {
        | list{"item", id} => {
            // This logic probably doesn't belong here
            let id = switch (Belt.Int.fromString(id)) {
                | Some(id) => id
                | None => -1
            }
            <Landing activeId={id} />
        }
        | list{} => <Landing />
        | _ => <ErrorView />
    }
  }