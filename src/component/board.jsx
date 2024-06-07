import react, { useState } from 'react'
import Square from './square'
function Board(){
    const [state,setState] = useState(Array(9).fill(null))
    const [isXTurn,setIsXTurn] = useState(true);
    const handleClick = (index)=>{
        if(state[index] === null){
            const copyState = [...state]
            copyState[index] = isXTurn ? "X" : "O";
            setState(copyState);
            setIsXTurn(!isXTurn)
        }
    }
    const checkWinner = ()=>{
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for(let logic of winnerLogic){
            const [a,b,c] = logic;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return state[a];
            }
        }
        return false;
    }
    const IsWinner = checkWinner()
    const ResetGame = ()=>{
        setState(Array(9).fill(null))
    }
    return(
    <div>
        {IsWinner ? (
            <div className='text-white'>
            <p>{IsWinner} Won the Game.</p>
            <button className='curson-pointer border-solid border-2 border-sky-500 p-2 rounded-lg mt-3' onClick={ResetGame}>Try Again</button>
        </div>
        ) : (
            <>
            <h4 className='mb-4'>Player {isXTurn ? "X" : "O"} Please Move</h4>
            <div>
            <Square onClick={()=> handleClick(0)} value={state[0]} />
            <Square onClick={()=> handleClick(1)} value={state[1]} />
            <Square onClick={()=> handleClick(2)} value={state[2]} />
            </div>

            <div >
            <Square onClick={()=> handleClick(3)} value={state[3]} />
            <Square onClick={()=> handleClick(4)} value={state[4]}/> 
            <Square onClick={()=> handleClick(5)} value={state[5]} />
            </div>

            <div>
            <Square onClick={()=> handleClick(6)} value={state[6]}/>
            <Square onClick={()=> handleClick(7)} value={state[7]}/>
            <Square onClick={()=> handleClick(8)} value={state[8]}/>
            </div>
        </>
        )}
    </div>
    )
}

export default Board