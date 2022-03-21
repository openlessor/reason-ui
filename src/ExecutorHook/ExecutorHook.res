module InventoryItem = {
  type t = {
      id: int,
      description: string,
      image: string,
      title: string,
      quantity: int
  }
}

module ExecutorConfig = {
    type t = {
        inventory: array<InventoryItem.t>
    }
}

type request
type response
@new external makeXMLHttpRequest: unit => request = "XMLHttpRequest"
@send external addEventListener: (request, string, unit => unit) => unit = "addEventListener"
@val @scope("JSON") external parseResponse: response => ExecutorConfig.t = "parse"
@get external response: request => response = "response"
@send external open_: (request, string, string) => unit = "open"
@send external send: request => unit = "send"
@send external abort: request => unit = "abort"

type state = ErrorLoadingEndpoint | LoadingEndpoint | LoadedEndpoint(ExecutorConfig.t)

let useExecutor = (url: string): state => {
  let (state, setState) = React.useState(_ => LoadingEndpoint)

  React.useEffect0(() => {
    let request = makeXMLHttpRequest()
    request->addEventListener("load", () => {
      setState(_previousState => LoadedEndpoint((request->response->parseResponse)))
    })
    request->addEventListener("error", () => {
      setState(_previousState => ErrorLoadingEndpoint)
    })
    request->open_("GET", url)
    request->send

    // the return value is called by React's useEffect when the component unmounts
    Some(() => {
      request->abort
    })
  })

  state
}