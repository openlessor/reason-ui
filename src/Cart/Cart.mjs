'use strict';

var React = require("react");

function str(prim) {
  return prim;
}

function itemCount(state) {
  return state.length;
}

var context = React.createContext(function (_action) {
      
    });

var provider = context.Provider;

function Cart$DispatchContext$Provider(Props) {
  var children = Props.children;
  var value = Props.value;
  return React.createElement(provider, {
              children: children,
              value: value
            });
}

var Provider = {
  provider: provider,
  make: Cart$DispatchContext$Provider
};

var DispatchContext = {
  context: context,
  Provider: Provider
};

var state = [];

var context$1 = React.createContext(state);

var provider$1 = context$1.Provider;

function Cart$StateContext$Provider(Props) {
  var children = Props.children;
  var value = Props.value;
  return React.createElement(provider$1, {
              children: children,
              value: value
            });
}

var Provider$1 = {
  provider: provider$1,
  make: Cart$StateContext$Provider
};

var StateContext = {
  state: state,
  context: context$1,
  Provider: Provider$1
};

function Cart(Props) {
  var count = Props.count;
  var cartState = React.useContext(context$1);
  React.useContext(context);
  console.log({
        CartState: cartState
      });
  return React.createElement("h1", {
              className: "block font-bold align-middle text-gray-700 text-base m-2 text-3xl"
            }, React.createElement("span", {
                  className: "m-2 align-middle text-3xl font-light"
                }, React.createElement("i", {
                      className: "light-icon-shopping-cart"
                    })), "Selected equipment (", String(count), ")");
}

var make = Cart;

exports.str = str;
exports.itemCount = itemCount;
exports.DispatchContext = DispatchContext;
exports.StateContext = StateContext;
exports.make = make;
/* context Not a pure module */
