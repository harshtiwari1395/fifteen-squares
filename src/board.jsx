import React from 'react'
import useBoard from "./hooks/useBoard"
const Board= ()=>{
    const [board, handleClick]= useBoard([1,2,3,4,5,6,7,8,0,10,11,12,13,14,15,9]);
    return (
    <div style= {{height: 400, width: 400, display: "flex", flexWrap:"wrap"}}>
        {board.map((item, index)=>{
            return <div onClick={()=>handleClick(index)} key={""+item+index} 
            style={{height: 100, width:100, boxSizing: "border-box", border:"1px solid black",
            visibility: item===0?"hidden": undefined, display:"flex",
            alignItems:"center", justifyContent:"center" , backgroundColor: item%2===0?"blue": "green", color:"white", fontSize:20}}>
                {item}
            </div>
        })}
    </div>
    )
}

export default Board;