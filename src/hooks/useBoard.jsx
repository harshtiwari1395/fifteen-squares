import React, { useState } from 'react';
const useBoard= (boardState)=>{
    const [board, setBoard]= useState(boardState);
    const multiplier= ([x,y])=>4*x+y;
    const allNeighbours=(x,y, width=4)=> {
       const allPossibleNeighbors= [];
       for( let extryX of [x-1,x,x+1])
        {
            for (let entryY of [y-1,y, y+1])
                allPossibleNeighbors.push([extryX,entryY]);
        }
        return allPossibleNeighbors.filter(item=>{
            let [entryX, entryY]= item;
            if((entryX>=0 && entryX<width && entryY>=0 && entryY<width)
            && !(entryX===x && entryY===y)
            )
            return item;
        });
    };
    const hasZeroNeighbour= (index, zeroIndex)=>{
            let x= Math.floor(index/4);
            let y= index%4;
            let neighbours= allNeighbours(x,y).map(multiplier);
            return neighbours.includes(zeroIndex)
            // if(x>0 && x<3 && y>0 && y<3 )
            //     arr= [[x-1,y],[x+1,y], [x,y-1],[x,y+1], [x+1,y+1],[x-1,y-1], [x+1,y-1],[x-1,y+1]];
            // if(x===0 && y===0)
            //     arr= [[x,y+1], [x+1,y+1],[x+1,y]];
            // if(x===3 && y===3)
            //     arr= [[x,y-1], [x-1,y-1],[x-1,y]];
            // if(x===0 && y===3)
            //     arr= [[x,y-1], [x+1,y-1],[x+1,y]];
            // if(x===3 && y===0)
            //     arr= [[x,y+1], [x-1,y+1],[x-1,y]];

    }
    const handleClick= (index)=>{
        const newBoardState= [...board];
        const indexOfZero= board.findIndex(item=> item===0);
        if (hasZeroNeighbour(index, indexOfZero))
        {
            newBoardState[indexOfZero]= newBoardState[index];
            newBoardState[index]= 0;
            setBoard(newBoardState);
        }
        
    }

    return [board, handleClick]
}

export default useBoard;
