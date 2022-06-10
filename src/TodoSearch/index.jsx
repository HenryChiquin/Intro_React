import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch(){
    
    //EJEMPLO NO RECOMENDADA: const [searchValue, setSearchValue] = React.useState('');
    const {searchValue,setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event)=>{        
        setSearchValue(event.target.value);
    };


    return(
        <input  
            className="TodoSearch" 
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />        
    );
}

export {TodoSearch};