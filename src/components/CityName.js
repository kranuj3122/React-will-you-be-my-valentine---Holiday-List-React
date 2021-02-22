import React from "react";

const CityName = ({ _key, name, country }) => {
  return (
    <li key={_key}>
      {name}
    </li>
  );
};

export default CityName;
