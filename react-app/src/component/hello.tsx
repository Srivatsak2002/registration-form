type helloprops = {
    name: string,
    msgcount: number
}


export const Hello = (props:helloprops) =>{
    
    return(
        <div>
            <h1>welcome...{props.name} you have {props.msgcount} messages</h1>
        </div>
    )
}