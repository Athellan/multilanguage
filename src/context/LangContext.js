import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [lang, setLang] = useState("EN");

  return <ContextProvider value={{ lang }}>{props.children}</ContextProvider>;
};

export default ContextProvider;
