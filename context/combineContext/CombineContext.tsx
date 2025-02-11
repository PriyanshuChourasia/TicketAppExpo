import React from "react";


interface ContextProps{
    components: Array<React.JSXElementConstructor<React.PropsWithChildren<unknown>>>;
    children?: React.ReactNode;
}




export const CombineContext = (props:ContextProps) =>{
    

    const {components=[],children} = props;

    return(
        <>
            {
                components.reduceRight((acc,Components)=>{
                    return(
                        <Components>
                            {acc}
                        </Components>
                    );
                },children || null)
            }
        </>
    )
}