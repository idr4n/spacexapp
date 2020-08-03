import React, { useState, createContext } from 'react';

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
  const [successFilter, setSucessFilter] = useState(false);
  const [failFilter, setFailFilter] = useState(false);

  const handleSuccessFilter = (filter) => {
    if (filter === 'success') setSucessFilter(!successFilter);
    if (filter === 'fail') setFailFilter(!failFilter);
  };

  return (
    <FilterContext.Provider
      value={{ successFilter, failFilter, handleSuccessFilter }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
