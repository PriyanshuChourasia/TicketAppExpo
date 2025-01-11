import { createContext } from "react";
import { IGroupResponseDetailsInterface } from "../interfaces/GroupResponseInterface";




interface GroupContext{
    itemGroupData:IGroupResponseDetailsInterface | null,
    setItemGroupData: React.Dispatch<React.SetStateAction<IGroupResponseDetailsInterface | null>>;
}

const defaultValue:GroupContext={
    itemGroupData: null,
    setItemGroupData:()=>{}
}





export const ItemGroupContext = createContext(defaultValue);