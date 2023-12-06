import { createContext, useState } from "react";

export const Contexto = createContext({});

import React from 'react'

const ContextoProvider = ({children}) => {
    const [sesion, setSesion] = useState(true);

  return (
    <Contexto.Provider value={{sesion, setSesion}}>
        {children}
    </Contexto.Provider>
  )
}

export default ContextoProvider;