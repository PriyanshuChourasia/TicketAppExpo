import React, { useState } from "react";
import { ItemGroupContext } from "./ItemGroupContext";
import { IGroupResponseDetailsInterface } from "../interfaces/GroupResponseInterface";



const ItemGroupProvider = ({children}:any) =>{

    const [itemGroupData,setItemGroupData] = useState<IGroupResponseDetailsInterface | null>(null);

    return(
        <ItemGroupContext.Provider value={{
            itemGroupData,setItemGroupData
        }}>
            {children}
        </ItemGroupContext.Provider>
    )
}




export default ItemGroupProvider;