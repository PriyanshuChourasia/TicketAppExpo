import { ProfileProvider } from "@/features/app/Profile/context/ProfileProvider";
import AuthProvider from "../AuthContext/AuthProvider";
import { ThemeProvider } from "../ThemeContext/ThemeProvider";
import { CombineContext } from "./CombineContext";






const providers =[
    AuthProvider,ThemeProvider,
    ProfileProvider
];



export const CombineContextProvider = ({children}:{children: React.ReactNode}) =>{
    return <CombineContext components={providers} children={children} />
}