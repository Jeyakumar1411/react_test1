import React from 'react'

const Render = ({age}) => {

    if(age === 10) {
        return(
            <p>small component</p>
        )
    }
    else if(age >=25){

        <p>medium</p>
    }
    else if(age < 25){

        <p>little</p>
    }
    else{

        <p>unknown</p>
        
    }

}

export default Render