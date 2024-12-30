import { useState } from "react"

export default function Square() {

    function handleClick(){
        setValue("X")
    }
    
    const[value,setValue]=useState(null);

    return (
    <button className="square" onClick={handleClick}>{value}</button>
    )
  }