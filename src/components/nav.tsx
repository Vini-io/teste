


export default function nav(props: {itemsProps: string[]}){    
    
    return(
        <div className="bg-red-500 p-5 w-full h-24 text-white text-lg font-bold flex items-center">
    
                {props.itemsProps.map((e)=>(
                    <div className="ml-5">{e}</div>
                ))}
            
        </div>
    )
}