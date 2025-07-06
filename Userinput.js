// TAsk: - Create a two button for dark and ligh theme. nased on select theme applied on your page.(inline css).


import React, {useState} from 'react';

export default function GetInput(){
    const [username, manage_uname] = useState(''); //manage_uname is function.
    const [username1, manage_greet] = useState('');
}


return (
    <div>
        <lable>Enter UserName:</lable>
        <input type='text' placeholder= "enter name" value={username} 
        onChange=
        {
            (e) => {manage_uname(e.target.value)}
        }/>

        <button onClick={greet}>Submit</button>
        <h3>{UserName}</h3>
        <h3>{greet}</h3>
        <length>Length: {length.username}</length>
    </div>
)