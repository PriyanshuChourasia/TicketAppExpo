import { createContext } from "react";





interface AuthContext{
    isAuthenticated:boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultValue:AuthContext={
    isAuthenticated:false,
    setIsAuthenticated:() => {}
}


export const AuthContext = createContext(defaultValue);