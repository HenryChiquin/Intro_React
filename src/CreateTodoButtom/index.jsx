import React from "react";
import './CreateTodoButtom.css';

function CreateTodoButton(props){

    const onClickButtton = ()=>{
        props.setOpenModal(prevState => !prevState);
    };

    return(
        <button 
            className="CreateTodoButton" 
            onClick={onClickButtton}
        >
            +
        </button>
    );
}

export {CreateTodoButton};