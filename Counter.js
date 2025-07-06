import React, { useState } from "react";
 

const sty_h3 = {
    color: 'blue',
    BackgroundColor:'grey',

}


function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }
    
    return (
        <div>
            <h1>Counter Program</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <h3 style={sty_h3}>Count : {count}</h3>
        </div>
    );

}

export default Counter;


//Inline function create