import React from "react"

export default function Calculator(){
   
    const Calculator = (op) =>{
        let cal = ev.target.innerText
        let result = eval(cal) 
        alert(`${cal} = ${result}`)
    }
    return(
        <div>    
            <button onClick={(ev) =>Calculator(ev)}>30 * 40</button>    
        </div>
    )
}