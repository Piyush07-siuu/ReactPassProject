import React,{useState,useEffect} from "react";
import ReactDom from "react-dom/client"

function Main(){
    const [password,setPassword]=useState("Absjfsdfu")
    const [length,setLength]=useState(8)
    const [inclnumbers,setinclNumber]=useState(false)
    const [inclSpecialChar,setinclspecialChar]=useState(false)

    return(
        <>
        <div id="first">
        <h1>Password is:{password}</h1>
        <input type="range" min={"8"} max={"25"}></input>
        <label>Length:{length}</label>
        <input type="checkbox" defaultChecked={inclnumbers}></input>
        <label>Numbers</label>
        <input type="checkbox" defaultChecked={inclSpecialChar}></input>
        <label>Special Charecters</label>
        </div>
        </>
    )
}
ReactDom.createRoot(document.getElementById("root")).render(<Main/>)