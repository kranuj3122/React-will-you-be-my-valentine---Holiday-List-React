import React from 'react';

const CityName = ({name,country}) => {
    return (
        <li>{name}({country})</li>
    );
};

export default CityName;