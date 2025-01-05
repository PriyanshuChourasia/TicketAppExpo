import { createContext } from "react";



interface ThemeProps{
    colorTheme:string;
    setColorTheme: React.Dispatch<React.SetStateAction<string>>;
}


const defaultValue:ThemeProps={
    colorTheme:'light',
    setColorTheme:() =>{}
}


export const ThemeContext = createContext(defaultValue);