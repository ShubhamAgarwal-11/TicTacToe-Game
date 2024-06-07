import React from "react";

function Square(props){
    return(
        <>
            <div onClick={props.onClick} className=" align-middle	cursor-pointer text-white inline-flex border-solid border-2 border-sky-500 h-20 w-20">
                <div className="m-auto">
                    {props.value}
                </div>
            </div>
        </>
    )
}

export default Square;