import AuthProvider from "../AuthContext/AuthProvider";
import { CombineContext } from "./CombineContext";






const providers =[
    AuthProvider
];



export const CombineContextProvider = ({children}:{children: React.ReactNode}) =>{
    return <CombineContext components={providers} children={children} />
}