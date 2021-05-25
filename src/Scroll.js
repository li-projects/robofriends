import React from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    )
  
};

export default Scroll;