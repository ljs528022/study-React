import { createContext, useState } from "react";

const ToggleContext = createContext()

function ToggleProvider({children}) {
    
    const [isOn, setIsOn] = useState(false)
    const toggle = () => setIsOn(prev => !prev)

    return (
        <ToggleContext.Provider value={{ isOn, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext, ToggleProvider }