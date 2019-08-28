import React, { createContext, useState } from "react";

const context = createContext({
  toggleActive: "",
  toggle: () => {}
});

const { Provider, Consumer } = context;

const Toggle = ({ children }) => (
  <Consumer>
    {({ toggle }) => (
      <div onClick={() => toggle(prevToggle => !prevToggle)}>{children}</div>
    )}
  </Consumer>
);

const View = ({ children }) => (
  <Consumer>
    {({ toggleActive }) =>
      console.log(toggleActive) || (toggleActive ? children : null)
    }
  </Consumer>
);

function ToggledView({ children }) {
  const [toggleActive, setToggle] = useState(false);
  console.log("TOGGLE", toggleActive);
  return (
    <Provider value={{ toggleActive, toggle: setToggle }}>{children}</Provider>
  );
}

export default ToggledView;
export { Toggle, View };
