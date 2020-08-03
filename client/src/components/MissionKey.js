import React, { useContext } from 'react';
import { FilterContext } from '../contexts/FilterContext';

const MissionKey = () => {
  const { successFilter, failFilter, handleSuccessFilter } = useContext(
    FilterContext
  );

  const handleCheckbox = (e) => {
    handleSuccessFilter(e.target.name);
  };

  return (
    <div className="my-3">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="success"
          onChange={handleCheckbox}
          checked={successFilter}
        />
        <label className="form-check-label">
          <span className="px-3 mr-2 bg-success" /> = Sucess
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="fail"
          onChange={handleCheckbox}
          checked={failFilter}
        />
        <label className="form-check-label">
          <span className="px-3 mr-2 bg-danger" /> = Fail
        </label>
      </div>
    </div>
  );
};

export default MissionKey;
