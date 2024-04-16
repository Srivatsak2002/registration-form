import { MouseEventHandler } from "react";

type propstype ={
    cb:MouseEventHandler
}


const HomePage = (cb:propstype) => {
    return (
        <div className="button-container">
            <button onClick={cb.cb}>Open Registration Form</button>
        </div>
    );
}

export default HomePage;
