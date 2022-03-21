'use strict';

var React = require("react");
var Cart$ReasonUi = require("../Cart/Cart.mjs");
var RescriptReactRouter = require("@rescript/react/src/RescriptReactRouter.mjs");

function str(prim) {
  return prim;
}

function InventoryItem(Props) {
  var item = Props.item;
  var activeOpt = Props.active;
  var active = activeOpt !== undefined ? activeOpt : false;
  var id = item.id;
  React.useContext(Cart$ReasonUi.DispatchContext.context);
  var cartState = React.useContext(Cart$ReasonUi.StateContext.context);
  var matches = cartState.cart.filter(function (cart_item) {
        return cart_item === item.id;
      });
  var matchCount = matches.length;
  var quantity = matchCount > 0 ? String(matches.length) : "0";
  var available = String(item.quantity - matchCount | 0);
  return React.createElement("a", {
              className: "active:col-span-4 target:col-span-4 lg:active:col-span-8 lg:target:col-span-8 block",
              id: "item-" + String(id),
              href: "/item/" + String(id),
              onClick: (function (_e) {
                  return RescriptReactRouter.push("item/" + String(id));
                })
            }, React.createElement("button", {
                  className: "relative m-[1.5] flex flex-col block"
                }, React.createElement("div", {
                      className: "rounded border-2 shadow m-0 p-0"
                    }, React.createElement("img", {
                          className: "p-[1.5]",
                          style: {
                            width: "100%"
                          },
                          src: item.image + "?" + String(id)
                        })), React.createElement("div", {
                      className: "flex flex-row justify-between w-full bg-gray-300 text-white shadow"
                    }, React.createElement("span", {
                          className: "drop-shadow"
                        }, React.createElement("i", {
                              className: "light-icon-shopping-cart text-xl"
                            }), React.createElement("span", {
                              className: "text-[0.5rem]",
                              title: "Quantity in cart"
                            }, quantity)), React.createElement("span", {
                          className: "drop-shadow"
                        }, React.createElement("i", {
                              className: "light-icon-checks text-xl"
                            }), React.createElement("span", {
                              className: "text-[0.5rem]",
                              title: "Quantity available"
                            }, available))), React.createElement("div", {
                      className: "flex flex-col text-align-center w-full bg-white text-gray-300 rounded m-[1.5] justify-self-end"
                    }, React.createElement("h2", {
                          className: "w-full text-xs drop-shadow text-gray-500"
                        }, item.title), React.createElement("p", {
                          className: (
                            active === false ? "hidden " : ""
                          ) + "text-xs m-2"
                        }, item.description))));
}

var make = InventoryItem;

exports.str = str;
exports.make = make;
/* react Not a pure module */
