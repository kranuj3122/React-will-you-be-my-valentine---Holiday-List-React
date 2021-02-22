import React from "react";

const CityName = ({ _key, name, country }) => {
  return (
    <li key={_key}>
      {name}({country})
    </li>
  );
};

export default CityName;
