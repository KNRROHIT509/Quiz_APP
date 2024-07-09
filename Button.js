import React from 'react';

const Button = (props) => {
    const { btnName = props.children, onClick, marked, style } = props;
    return (
        <button onClick={onClick} disabled={marked} className={`button ${style}`}>
            {btnName}
        </button>
    );
};

export default Button;
