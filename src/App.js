// import React from 'react'; 


// JSX => HTML, JS , 


import Button from "./Components/Button";

function App(){
    
    let a = 10
    return(
         <div>
            <h1 style={{backgroundColor: "green", color: "white"}}>Anbhav {a} </h1>
            <p>React</p> 
            <Button  name="Apple" description="Its an Apple"/>
            <Button name="Mango" description="Its an Mango"/>
            <Button name="Banana" description="Its an Banana"/>
           
         </div>
    )
}

// function Hello2(){
//     return <h1>Anubhav</h1>
// }


export default App;

// export {Hello1 , Hello2}


