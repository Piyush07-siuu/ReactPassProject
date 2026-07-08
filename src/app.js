import React,{useState,useEffect} from "react";
import ReactDom from "react-dom/client"

function Main(){
    const [password,setPassword]=useState("Absjfsdfu")
    const [length,setLength]=useState(8)
    const [inclnumbers,setinclNumber]=useState(false)
    const [inclSpecialChar,setinclspecialChar]=useState(false)
    function passGenerator(){
        let pass="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(inclnumbers)
            pass+="1234567890"
        if(inclSpecialChar)
            pass+="!@#$%^&*()_+=-~`?:;<>.,"

        let ans=""

        for(let i=0;i<length;i++){
            ans+=pass[Math.floor(Math.random()*pass.length)]
        }
        setPassword(ans)
    }
    useEffect(()=>{
            passGenerator()
        },[length,inclSpecialChar,inclnumbers])
    return(
        <>
        <div id="first">
        <h1>{password}</h1>
        </div>
        <div id="second">
        <input type="range" min={"4"} max={"15"} value={length} onChange={(e)=>setLength(e.target.value)}></input>
        <label>Length ({length})</label>
        <input type="checkbox" defaultChecked={inclnumbers} onChange={()=>setinclNumber(!inclnumbers)}></input>
        <label>Numbers</label>
        <input type="checkbox" defaultChecked={inclSpecialChar} onChange={()=>setinclspecialChar(!inclSpecialChar)}></input>
        <label>Special Charecters</label>
        </div>
        
        </>
    )
}
ReactDom.createRoot(document.getElementById("root")).render(<Main/>)