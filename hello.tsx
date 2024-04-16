import { useState } from 'react';
/*
type Helloprops = {
    name:string
}
*/
interface MyButtonProps{
    name:string
}


function handleClick(){
    alert("you clicked me!!")
}

function MyButton() {
    return (
        <button onClick={handleClick}>
            I'm a button
        </button>
    );
  }

export const Hello = (props: MyButtonProps) =>{
    return(
        <div>
            <h1>welcome...{props.name}</h1>
            <MyButton />
        </div>
    );
};