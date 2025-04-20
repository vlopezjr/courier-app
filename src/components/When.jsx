import React from 'react'

const When = ({prop, children}) => {
    if(!prop){
        return null;
    }

    return <>{children}</>;
}

export default When;
