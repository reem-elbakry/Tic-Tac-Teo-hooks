import React from 'react';
import './Box.css';

const Box = ({value, onClick}) => {
    //value will be passed as a prop to this component
    const style = value === 'X' ? 'box x' : 'box o';
    return (
        <>
            <button className={style} onClick={onClick}>{value}</button>
        </>
    );
}


export default Box;