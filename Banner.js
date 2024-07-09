import React from 'react';

const Banner = ({ score }) => {
    return (
        <div className="banner">
            You have answered {score} / 5 &nbsp;Correctly
        </div>
    );
};

export default Banner;
