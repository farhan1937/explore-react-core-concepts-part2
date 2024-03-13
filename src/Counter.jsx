import { useState } from "react"

export default function Counters (){
    const [count, setCount] = useState(0);
    // console.log(abc);
    const hanldeAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)

    }

    const handleRedus = ()=>{
        const newCount = count-1;
        setCount(newCount)
    }
    return (
        <div style={{border:'2px solid yellow'}}>
            <h3>Counter: {count}</h3>
            <button onClick={hanldeAdd}>Add</button>
            <button onClick={handleRedus}>Reduce</button>
        </div>

    )

}