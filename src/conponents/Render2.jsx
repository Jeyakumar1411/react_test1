import React from 'react'

const Render2 = ({age}) => {

    let rendering_data

    if(age === 10) {
        
        rendering_data = <div>
            <p>small component</p>
        </div>
    }
    else if(age >=25){

        rendering_data = <div>
            <p>medium component</p>
        </div>
    }
    else if(age < 25){

        rendering_data = <div>
            <p>little component</p>
        </div>
    }
    else{

        rendering_data = <div>
            <p>unknown component</p>
        </div>
        
    }
    return(

        rendering_data
        
    )
}

export default Render2